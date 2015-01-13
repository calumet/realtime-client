/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Portal | Admin
 * Romel Pérez, prhone.blogspot.com
 * 2014
 **/

// TODO: Completar los servicios de administración del sistema realtime.

/**
 * Las funcionabilidades de administración está verificadas en el servidor.
 */

window.realtime = window.realtime || {};

realtime.stats = {
  interval: null,
  count: null
};

realtime.init = function () {

  // Actualizando estadísticas.
  realtime.stats.interval = setInterval(function () {
    $.ajax({
      url: realtime.server.url +'/app/portal/stats',
      xhrFields: {withCredentials: true},
      success: function (data) {
        console.debug(data);
        if (data.error) {
          $('#statsUsers').html('desconocido');
        } else {
          realtime.stats.count = data.count;
          $('#statsUsers').html(data.count);
        }
      },
      error: function (err) {
        console.debug(err);
        clearInterval(realtime.stats.interval);
      }
    });
  }, 1000);

  // Publicar mensaje de administración al público.
  $('#msgPostSend').on('click', realtime.message.send);

};

realtime.message = {

  send: function () {
    var type = $('#msgPostType').val();
    var startDate = $('#msgPostStartDate').val();
    var endDate = $('#msgPostEndDate').val();
    var message = $('#msgPostContent').val();

    $.ajax({
      url: realtime.server.url +'/app/portal/message',
      type: 'post',
      data: {
        type: type,
        startDate: new XDate(startDate).getTime(),  // date milliseconds
        endDate: new XDate(endDate).getTime(),  // date milliseconds
        message: message
      },
      xhrFields: {withCredentials: true},
      success: function (data) {
        if (data.error) {
          Elise.alert({
            type: 'error',
            content: 'Ha ocurrido un error publicando el mensaje. '
              +'Intente de nuevo por favor.'
          });
        }
      }
    });
  }

};

$(function ($) {

  // Cargar módulos.
  $.getJSON('/eisi/Scripts/Portal/realtime.config.json')
  .done(function (config) {
    
    // Parsear configuración.
    realtime.server = config.sockets;
    realtime.server.url = 'http://'+ realtime.server.host +':'+ realtime.server.port;

    // Iniciar procesos.
    realtime.init();
  })
  .fail(function (err) {
    console.debug(err.name +': '+ err.message);
  });
});
