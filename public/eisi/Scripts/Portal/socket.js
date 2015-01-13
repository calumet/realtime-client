/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Portal | Socket
 * Romel Pérez, prhone.blogspot.com
 * 2015
 **/

/**
 * Las peticiones AJAX deben ser enviadas desde este servidor al de sockets con
 * un flag especial, que permitirá enviar las cookies, ya que se trata de un
 * servidor distinto al origen mismo (puerto 7000) al que envía (puerto 80).
 * http://stackoverflow.com/questions/2870371/why-is-jquerys-ajax-method-not-sending-my-session-cookie
 * $.ajax({..., xhrFields: {withCredentials: true}});
 */

// require(['jquery', 'elise']).
window.portal = window.portal || {};

// Objetos por inicializar:
// > portal.server
// > portal.socket

// Mensajes recibidos de la administración.
portal.messages = [];

// Inicializar manejador de eventos/emisores de tiempo real.
portal.manager = function (e) {

  var ev, emit;

  // Conectar el socket portal.
  portal.socket = io.connect(portal.server.url + '/portal');

  // Asignar eventos.
  for (ev in portal.events) {
    portal.socket.on(ev, portal.events[ev]);
  }

  // Asignar emisores.
  for (emit in portal.emits) {
    portal.emits[emit].apply(io);
  }
};

// Eventos del socket.
portal.events = {

  // Conectado.
  connect: function (data) {
    console.debug('portal:socket connect:', data);
  },

  // Error.
  error: function (data) {
    console.debug('portal:socket error:', data);

    // Pueden llegar varias respuestas de error. Por estar el proyecto en 
    // fase inestable, no se tratan todas. Sin embargo, si funcionó bien,
    // y encontró ésta conexión como duplicada, entonces, hacer logout al
    // usuario.
    if (data === 'DUPLICATE') {
      Elise.alert({
        content: 'Lo sentimos, un usuario sólo puede tener sesiones '
          +'en una sola computadora.',
        type: 'info',
        afterClose: function () {
          window.location.href = '/eisi';
        }
      });
      setTimeout(function () {
        window.location.href = '/eisi';
      }, 5000);
    }
  },

  // Mensaje de administración.
  'portal:msg': function (data) {
    console.debug('portal:socket portal:msg:', data);

    var msg;
    if (data.messages && data.messages.length) {
      for (var m in data.messages) {
        msg = data.messages[m];

        if (_.where(portal.messages, {id: msg.id}).length) return;
        else portal.messages.push(msg);

        if (msg.type === 'persistent') {
          Elise.notify.info(msg.message, undefined, {
            timeOut: 0,
            extendedTimeOut: 0
          });
        } else if (msg.type === 'instant') {
          Elise.notify.info(msg.message);
        }
      }
    }
  }

};

// Emitidores del socket.
portal.emits = {};

// Iniciar al momento de estar lista la aplicación.
$(document).ready(function ($) {

  // Cargar módulos.
  $.getJSON('/eisi/Scripts/Portal/realtime.config.json')
  .done(function (config) {
    
    // Parsear configuración.
    portal.server = config.sockets;
    portal.server.url = 'http://'+ portal.server.host +':'+ portal.server.port;

    // Conseguir conexión con sockets.
    $.getScript(portal.server.url +'/socket.io/socket.io.js')
    .done(portal.manager)
    .fail(function (err) {
      console.debug(err.name +': '+ err.message);
    });
  })
  .fail(function (err) {
    console.debug(err.name +': '+ err.message);
  });
});
