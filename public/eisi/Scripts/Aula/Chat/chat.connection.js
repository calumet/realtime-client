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
chat.conn.server = null;
chat.conn.socket = null;


// -------------------------------------------------------------------------- //
// Conexión con el servidor //

// Conexión con el servidor.
chat.conn.on('init', function () {

  // Cargar configuración.
  $.getJSON('/eisi/Scripts/Portal/realtime.config.json')
  .done(function (config) {
    
    // Parsear configuración.
    chat.conn.server = config.sockets;
    chat.conn.server.url = 'http://'+ chat.conn.server.host +':'+ chat.conn.server.port;

    // Conseguir script de socket.
    $.getScript(chat.conn.server.url +'/socket.io/socket.io.js')
    .done(function () {
      chat.conn.trigger('manage');
    })
    .fail(function (err) {
      chat._debug(err.name +': '+ err.message);
    });
  })
  .fail(function (err) {
    chat._debug(err.name +': '+ err.message);
  });
});


// -------------------------------------------------------------------------- //
// Administrador del socket //

chat.conn.on('manage', function () {

  // Conectarse con el socket a la aplicación aula, enviándole los datos.
  chat.conn.socket = io.connect(chat.conn.server.url + '/aula', {
    query: 'subject='+ chat.data.subject
         +'&group='+ chat.data.group
         +'&subgroup='+ chat.data.subgroup
  });

  // Asignar eventos al socket.
  for (ev in chat.conn.events) {
    chat.conn.socket.on(ev, chat.conn.events[ev].bind(chat.conn.socket));
  }
});


// -------------------------------------------------------------------------- //
// Eventos del socket //

chat.conn.events = {

  // Error de conexión.
  // data:String El tipo de error devuelto.
  error: function (data) {
    chat._debug('aula:socket error:', data);

    // Si se está duplicado, cerrar la ventana.
    if (data === 'DUPLICATE') {
      Elise.alert({
        content: 'Lo sentimos, s&oacute;lo se puede tener una instancia del aula.',
        type: 'info',
        afterClose: function () {
          window.close();
        }
      });
      setTimeout(function () {
        window.close();
      }, 5000);
    }

    // TODO: reponder ante otros tipos de errores.
  },

  // socket.io events:
  // > disconnect
  // > connect_failed
  // > reconnect

  // custom events:
  // > serverError
  // > roomState

  // Usuario online.
  // data:{
  //   users:[{id,photo,name}],
  //   rooms:[{
  //     id:String, available:Boolean,
  //     teacher:{id,state}, students:[{id,state}], messages:[{id,user,content}]
  //   }]
  // }
  online: function (data) {
    chat._debug('aula:socket online:', data);

    // Inicializar las vistas de las salas.
    chat.ui.trigger('init', data.rooms, data.users);
  },

  // Otro usuario está online.
  // data:{id:String} El id del usuario conectado.
  userOnline: function (data) {
    chat._debug('aula:socket userOnline:', data);
    
    // TODO: this.
  },

  // Otro usuario está offline.
  // data:{id:String} El id del usuario desconectado.
  userOffline: function (data) {
    chat._debug('aula:socket userOffline:', data);
    
    // TODO: this.
  },

  // Un usuario envía un mensaje en una sala.
  // data:{id:Date, user:String, content:String}
  userMsg: function (data) {
    chat._debug('aula:socket userMsg:', data);

    // TODO: this.
  }
};


// -------------------------------------------------------------------------- //
// Emisiones del socket //

// TODO: this.
