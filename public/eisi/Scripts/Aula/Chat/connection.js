/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | Connection
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * 2015
 **/

window.chat = window.chat || {};
chat.conn = _.extend({}, Backbone.Events);
chat.conn.socket = null;  // El socket de conexión.
chat.conn.server = {};  // Configuración del servidor del chat.
chat.conn.client = {  // Configuración de éste cliente del chat.
  encoding: 'UTF-8'  // UTF-8 | Western (ISO 8859-1)
};


// -------------------------------------------------------------------------- //
// PRIVATE //

// Si se ha conectado al menos una vez.
chat.conn._hasConnected = false;

// Si ha ocurrido un error en la conexión.
chat.conn._hasAConnectionError = false;

// Si se ha tratado de reconectar en esta conexión.
chat.conn._hasAttemptedToReconnect = false;

// Si se ha avisado que hay nuevos mensajes mientras tenga la ventana cerrada.
chat.conn._hasShownNewEvents = false;


// -------------------------------------------------------------------------- //
// Conexión con el servidor //

// Conexión con el servidor.
chat.conn.on('init', function () {

  // Cargar configuración.
  $.getJSON('/eisi/Scripts/Portal/realtime.config.json', function (config) {
    
    // Parsear configuración.
    chat.conn.server = _.extend(chat.conn.server, config.sockets);
    chat.conn.server.url = 'http://'+ chat.conn.server.host +':'+ chat.conn.server.port;

    // Conseguir script de socket.
    $.ajax({
      dataType: 'script',
      url: chat.conn.server.url +'/socket.io/socket.io.js',
      timeout: 10000,
      global: false,
      statusCode: {
        0: function () {},
        404: function () {},
        500: function () {}
      },
      success: function () {
        chat.conn.trigger('manage');
      },
      error: function () {
        Elise.notify.error('Lo sentimos, el chat del aula no está disponible en '
        +'este momento. Intenta en unos minutos por favor.', 'Chat del aula');
      }
    });
  });
});


// -------------------------------------------------------------------------- //
// Administración del socket //

// Administrar.
chat.conn.on('manage', function () {

  // Conectarse con el socket a la aplicación aula, enviándole los datos.
  chat.conn.socket = io.connect(chat.conn.server.url + '/aula', {
    query: 'subject='+ chat.data.subject
         +'&group='+ chat.data.group
         +'&subgroup='+ chat.data.subgroup
  });

  // Asignar eventos al socket.
  for (var ev in chat.conn.events) {
    chat.conn.socket.on(ev, chat.conn.events[ev].bind(chat.conn.socket));
  }
});


// -------------------------------------------------------------------------- //
// Eventos del socket //

chat.conn.events = {

  // Error de conexión.
  // data:String El tipo de error devuelto.
  error: function (data) {
    chat._debug('aula.socket error:', data);

    // Si se está duplicado, cerrar la ventana.
    if (data === 'DUPLICATE') {
      Elise.alert({
        content: 'Lo sentimos, s&oacute;lo se puede tener una instancia del aula.',
        type: 'error',
        afterClose: function () {
          window.close();
        }
      });
      setTimeout(function () {
        window.close();
      }, 5000);
    }

    // Algún tipo de error ocurrió en la conexión.
    else {
      Elise.notify.error('Lo sentimos, ocurrió un error conectándonos con el'
       +' chat. Intenta en unos minutos por favor.', 'Chat del aula');
    }
  },


  // Conexión fallida.
  connect_error: function () {
    chat._debug('aula.socket connect_error|connect_timeout:', arguments);

    if (!chat.conn._hasConnected && !chat.conn._hasAConnectionError) {
      Elise.notify.error('Ha ocurrido un error de conexión con el servidor.'
       +' Intenta en unos minutos por favor.', 'Chat del aula');
      chat.conn._hasAConnectionError = true;
    }
  },
  connect_timeout: function () {
    this.connect_error.apply(this, arguments);
  },


  // Desconectado.
  disconnect: function () {
    chat._debug('aula.socket disconnect:', arguments);

    chat.ui.trigger('user:disconnect');
    Elise.notify.error('Te has desconectado del servidor.', 'Chat del aula');
  },


  // Reconectando.
  reconnecting: function (n) {
    chat._debug('aula.socket reconnecting:', arguments);

    if (!chat.conn._hasAttemptedToReconnect) {
      Elise.notify.info('Estamos intentando reconectarnos...', 'Chat del aula', {
        timeOut: 30 * 1000,
        extendedTimeOut: 30 * 1000
      });
      chat.conn._hasAttemptedToReconnect = true;
    }
  },


  // Error en un evento enviado.
  serverError: function (data) {
    chat._debug('aula.socket serverError:', data);
    
    // Error al recibir datos.
    if (data.ev === 'online') {
      Elise.notify.error('Lo sentimos, ha ocurrido un error al conseguir los datos'
       +' de conexión.', 'Chat del aula');
    }

    // Error al enviar un mensaje.
    else if (data.ev === 'msg') {
      Elise.notify.error('Lo sentimos, ha ocurrido un error enviado el mensaje.',
       'Chat del aula');
    }

    // Error al desconectarse manualmente.
    else if (data.ev === 'offline') {
      Elise.notify.error('Lo sentimos, no hemos podido desconectarnos manualmente.',
       'Chat del aula');
    }
  },

  // Usuario online.
  // data:{
  //   users:[{id:String,photo:String,name:String}],
  //   rooms:[{
  //     id:String, available:Boolean,
  //     teacher:{id:String,state:String},
  //     students:[{id:String,state:String}],
  //     messages:[{id:String,user:String,content:String}]
  //   }]
  // }
  online: function (data) {
    chat._debug('aula.socket online:', data);

    var roomsAvailable = _.where(data.rooms, {available: true}).length;
    var roomsUnavailable = _.where(data.rooms, {available: false}).length;

    // Sino se encontró ninguna sala.
    if (roomsUnavailable === data.rooms.length) {
      
      // Cambiar trigger.
      $('#chat-opt-trigger').removeAttr('disabled').removeClass('verde')
      .on('click', function (e) {
        Elise.notify.warning('No hay ninguna sala de chat disponible en este '
         +'momento.', 'Chat del aula');
      });

      // Desconectarse.
      chat.conn.socket.emit('offline');

      // Comentarlo.
      return Elise.notify.warning('No hay ninguna sala de chat del aula disponible'
       +' en este momento. Intenta en unos minutos por favor.', 'Chat del aula');
    }

    // Si se encontró sólo una sala.
    else if (roomsAvailable === 1) {
      $('#chat-opt-changeRoom').addClass('hidden');
    }

    // Si alguna sala no se puede agregar.
    if (roomsUnavailable) {
      Elise.notify.warning('No todas las salas de chat est&aacute;n disponibles'
       +' en este momento.');
    }

    // Si ya se ha conectado anteriormente con el servidor.
    if (chat.conn._hasConnected) {
      Elise.notify.success('Recargando el aula...', 'Chat del aula');
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else {
      chat.conn._hasConnected = true;
      Elise.notify.success('Ahora est&aacute;s conectado en el chat.',
       'Chat del aula');
    }

    // Procesar encoding de los datos de llegada si son distintos.
    if (chat.conn.server.encoding !== chat.conn.client.encoding) {

      // Contenidos de los mensajes.
      _.each(data.rooms, function (room) {
        _.each(room.messages, function (message) {
          message.content = utf8_decode(message.content);
        });
      });

      // Nombres de los estudiantes.
      _.each(data.users, function (user) {
        user.name = utf8_decode(user.name);
      });
    }

    // Guardar referencias de datos.
    chat.data.rooms = data.rooms;
    chat.data.users = data.users;

    // Definir interfaz de usuario.
    chat.ui.trigger('user:set');

    // Agregar las salas de chat.
    _.each(data.rooms, function (room) {
      if (room.available) {
        chat.ui.trigger('room:add', room);
      }
    });

    // Colocar la sala de clase como activa inicialmente.
    setTimeout(function () {
      chat.ui.trigger('room:change', chat.data.subject +'_'+ chat.data.group);
    }, 1);

    // IMPORTANT: recordar que de momento sólo se soportan las dos salas,
    // la sala de clase y la del subgrupo, por lo tanto, sólo se manejan ellas.

    // Inicialización de vistas generales.
    chat.ui.trigger('init');
  },


  // Otro usuario está online.
  // data:{id:String, room:String} El id del usuario conectado.
  userOnline: function (data) {
    chat._debug('aula.socket userOnline:', data);
    
    // Cambiar estado de usuario en la sala.
    chat.ui.trigger('room:user:state', data.room, data.id, 'available');
  },


  // Otro usuario está offline.
  // data:{id:String, room:String} El id del usuario desconectado.
  userOffline: function (data) {
    chat._debug('aula.socket userOffline:', data);
    
    // Cambiar estado de usuario en la sala.
    chat.ui.trigger('room:user:state', data.room, data.id, 'offline');
  },


  // Un usuario envía un mensaje en una sala.
  // data:{id:Date, room:String, user:String, content:String}
  userMsg: function (data) {
    chat._debug('aula.socket userMsg:', data);

    // Mostrar que hay un evento nuevo sino está abierta la ventana.
    if (chat.win.state === 'hidden') {
      chat.win.trigger('markTrigger', true);
      if (!chat.conn._hasShownNewEvents) {
        Elise.notify.info('Hay nuevos mensajes por leer.', 'Chat del aula');
        chat.conn._hasShownNewEvents = true;
      }
    } else {
      chat.win.trigger('markTrigger', false);
      chat.conn._hasShownNewEvents = false;
    }

    // Procesar encoding de los datos de llegada si fueron distintos.
    if (chat.conn.server.encoding !== chat.conn.client.encoding) {
      data.content = utf8_decode(data.content);
    }

    // Agregar el mensaje a la interfaz de la sala.
    chat.ui.trigger('room:msg:add', data.room, data);
  },


  // Una sala de chat ha cambiado su estado.
  // data:{room:String, available:Boolean}
  roomState: function (data) {
    chat._debug('aula.socket roomState:', data);
    
    // Interfaz del chat debido al cambio de estado de la sala.
    chat.ui.trigger('room:state', data);
  }
};


// -------------------------------------------------------------------------- //
// Emisiones del socket //

// Enviar un mensaje en la sala activa.
chat.conn.on('msg', function (content) {
  var data = {
    room: chat.ui._room,
    content: content
  };

  // Procesar encoding de los datos de llegada si fueron distintos.
  if (chat.conn.server.encoding !== chat.conn.client.encoding) {
    data.content = utf8_encode(data.content);
  }

  // Determinar si el usuario está conectado.
  if (chat.conn.socket.disconnected) {
    Elise.notify.warning('No estás conectado con el chat.', 'Chat del aula');
    return;
  }

  // Enviar mensaje.
  chat.conn.socket.emit('msg', data);
});
