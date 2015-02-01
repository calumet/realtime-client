/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | Connection
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * Enero, 2015
 **/

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

        // Intentando abrir el chat.
        $('#chat-opt-trigger').on('click', function (e) {
          Elise.notify.warning('El chat no se encuentra disponible en este momento.',
           'Chat del aula');
        });
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
    console.debug('chat.socket error:', data);

    // Función de error, usuario duplicado.
    var duplicate = function () {
      $('body').html('<p style="margin:20px;font-size:1.5em;">'
       +'Lo sentimos, un usuario sólo puede tener una instancia de un aula virtual'
       +' por sesi&oacute;n <a href="/eisi/">Volver al inicio</a>.'
      +'</p>');
      window.close();
    };

    // Error, usuario duplicado.
    if (data === 'DUPLICATE') {
      Elise.alert({
        content: 'Lo sentimos, s&oacute;lo se puede tener una instancia de un '
         +'aula virtual por sesi&oacute;n.',
        type: 'error',
        afterClose: duplicate
      });
      setTimeout(duplicate, 5000);
    }

    // Algún tipo de error ocurrió en la conexión.
    else {
      Elise.notify.error('Lo sentimos, ocurrió un error conectándonos con el'
       +' chat. Intenta en unos minutos por favor.', 'Chat del aula');

      // Intentando abrir el chat.
      $('#chat-opt-trigger').on('click', function (e) {
        Elise.notify.warning('El chat no se encuentra disponible en este momento.',
         'Chat del aula');
      });
    }
  },


  // Conexión fallida.
  connect_error: function () {
    console.debug('chat.socket connect_error|connect_timeout:', arguments);

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
    console.debug('chat.socket disconnect:', arguments);

    chat.ui.trigger('user:disconnect');
    Elise.notify.error('Te has desconectado del servidor.', 'Chat del aula');
  },


  // Reconectando.
  reconnecting: function (n) {
    console.debug('chat.socket reconnecting:', arguments);

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
    console.debug('chat.socket serverError:', data);
    
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


  // Error de usuario con el servidor.
  userError: function (err) {
    console.debug('chat.socket userError:', err);

    // Función de error, usuario duplicado.
    var duplicate = function () {
      $('body').html('<p style="margin:20px;font-size:1.5em;">'
       +'Lo sentimos, un usuario sólo puede tener una instancia de un aula virtual'
       +' por sesi&oacute;n <a href="/eisi/">Volver al inicio</a>.'
      +'</p>');
      window.close();
    };

    // Otro usuario intenta entrar con esta cuenta.
    if (err === 'DUPLICATE') {
      Elise.alert({
        content: 'Lo sentimos, s&oacute;lo se puede tener una instancia de un '
         +'aula virtual por sesi&oacute;n.',
        type: 'error',
        afterClose: duplicate
      });
      setTimeout(duplicate, 5000);
    }

    // NOTE: otro errores no se tratan.
  },


  // Usuario online.
  // data:{
  //   users:[{id:String, photo:String, name:String}],
  //   rooms:[{
  //     id:String, available:Boolean, timeLastOut:Date,
  //     teacher:String,
  //     users:[{id:String,state:String}],
  //     messages:[{id:String,user:String,content:String}]
  //   }]
  // }
  online: function (data) {
    console.debug('chat.socket online:', data);

    var roomsAvailable = _.where(data.rooms, {available: true}).length;
    var roomsUnavailable = _.where(data.rooms, {available: false}).length;

    // Sino se encontró ninguna sala.
    if (roomsUnavailable === data.rooms.length) {
      
      // Evento de trigger.
      $('#chat-opt-trigger').on('click', function (e) {
        Elise.notify.warning('No hay ninguna sala de chat disponible en este '
         +'momento.', 'Chat del aula');
      });

      // Desconectarse.
      chat.conn.socket.emit('offline');

      // Comentarlo.
      return Elise.notify.warning('No hay ninguna sala de chat del aula disponible'
       +' en este momento. Intenta en unos minutos por favor.', 'Chat del aula');
    } else {

      // Actualizar trigger.
      $('#chat-opt-trigger').addClass('verde');
    }

    // Si alguna sala no se puede agregar.
    if (roomsUnavailable) {
      Elise.notify.warning('No todas las salas de chat est&aacute;n disponibles'
       +' en este momento.', 'Chat del aula');
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

    // Inicialización de vistas generales.
    chat.ui.trigger('init');
  },


  // Otro usuario está online.
  // data:{id:String, room:String} El id del usuario conectado.
  userOnline: function (data) {
    console.debug('chat.socket userOnline:', data);
    
    // Cambiar estado de usuario en la sala.
    chat.ui.trigger('room:user:state', data.room, data.id, 'away');
  },


  // Otro usuario está offline.
  // data:{id:String, room:String} El id del usuario desconectado.
  userOffline: function (data) {
    console.debug('chat.socket userOffline:', data);
    
    // Cambiar estado de usuario en la sala.
    chat.ui.trigger('room:user:state', data.room, data.id, 'offline');
  },


  // Otro usuario cambia de estado en una sala (available | away).
  // data:{room:String, id:String, state:String}
  userState: function (data) {
    console.debug('chat.socket userState:', data);

    // Cambiar el estado en la sala.
    chat.ui.trigger('room:user:state', data.room, data.id, data.state);
  },


  // Un usuario envía un mensaje en una sala.
  // data:{id:Date, room:String, user:String, content:String}
  userMsg: function (data) {
    console.debug('chat.socket userMsg:', data);

    // Procesar encoding de los datos de llegada si fueron distintos.
    if (chat.conn.server.encoding !== chat.conn.client.encoding) {
      data.content = utf8_decode(data.content);
    }
    
    // Dependiendo del usuario que envió el mensaje.
    if (data.user === chat.data.user.id) {
      chat.audio.trigger('play', 'sendMsg');
    } else {

      // Navegador sin foco || ventana chat oculta.
      if (!chat._focus || chat.win._state === 'hidden') {
        chat.audio.trigger('play', 'newMsg');
        chat.win.trigger('markTrigger', true);
        Elise.notify.normal('Hay nuevos mensajes por leer en <b>'+
         chat.ui.rooms[data.room].model.get('name') +'</b>.', 'Chat del aula', {
          timeOut: 3000
         });
      }

      // Navegador con foco && ventana chat mostrada.
      else {
        chat.win.trigger('markTrigger', false);

        // La sala es distinta.
        if (data.room !== chat.ui._room) {
          chat.audio.trigger('play', 'newMsg');
          Elise.notify.normal('Hay nuevos mensajes por leer en <b>'+
           chat.ui.rooms[data.room].model.get('name') +'</b>.', 'Chat del aula', {
            timeOut: 3000
           });
        }
      }
    }

    // NOTE: no se guarda referencia del nuevo mensaje para no saturar el cliente.

    // Agregar el mensaje a la interfaz de la sala.
    chat.ui.trigger('room:msg:add', data.room, data);
  },


  // Una sala de chat ha cambiado su estado.
  // data:{room:String, available:Boolean}
  roomState: function (data) {
    console.debug('chat.socket roomState:', data);
    
    // NOTE: de momento, sólo se controla que una sala estaba activa y se reciba
    // un mensaje para desactivarla.

    // Interfaz del chat debido al cambio de estado de la sala.
    chat.ui.trigger('room:state', data);
  }
};


// -------------------------------------------------------------------------- //
// Emisiones del socket //

// Cambiar estado en una sala.
chat.conn.on('state', function (room, state) {
  if (!room || !state
   || (room && (chat.ui.rooms[room].model.get('userState') === state
    || !chat.ui.rooms[room].model.get('available')))) return;
  var data = {
    room: room,
    state: state
  };

  // Cambiar estado de usuario en la sala en local.
  chat.ui.rooms[room].model.set('userState', state);

  // Enviar cambio de estado.
  chat.conn.socket.emit('state', data);
  console.debug('chat.socket.emit state:', data);
});


// Enviar un mensaje en la sala activa.
chat.conn.on('msg', function (content) {
  if (typeof content !== 'string') return;

  // Si la sala donde se encuentra se encuentra inactiva.
  if (!chat.ui.rooms[chat.ui._room].model.get('available')) {
    return Elise.notify.warning('Esta sala se encuentra no disponible en '
     +'este momento.', 'Chat del aula');
  }

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
    return Elise.notify.warning('No estás conectado con el chat.', 'Chat del aula');
  }

  // Enviar mensaje.
  chat.conn.socket.emit('msg', data);
  console.debug('chat.socket.emit msg:', data);
});
