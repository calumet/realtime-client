/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | Main
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * 2015
 **/

window.chat = window.chat || {};
chat.win = _.extend({}, Backbone.Events);

// Objetos ya definidos:
// > chat.data = {user: {id}, teacher: {id}, subject, group, subgroup}


// -------------------------------------------------------------------------- //
// Utilidades //

// Private methods.
chat._debugMode = true;
chat._debug = function () {
  if (chat._debugMode) console.debug.apply(console, arguments);
};


// -------------------------------------------------------------------------- //
// Ventana del chat //

// Estado de la ventana del chat.
// hidden | shown
chat.win.state = 'hidden';
chat.win.on('state', function (state) {
  chat.win.state = state;
  chat.ui.rooms[chat.ui._room].render();
  if (state === 'shown') {
    chat.win.trigger('markTrigger', false);
    $('body').css('overflow', 'hidden');
  } else {
    $('body').css('overflow', 'auto');
  }
});

// Mostrar/ocultar ventana del chat.
chat.win.on('toggle', function () {
  var $chat = $('#chat');

  $chat.addClass('animated');

  // Mostrar si estaba ocultada.
  if ($chat.hasClass('hidden')) {
    $chat.removeClass('hidden fadeOut').addClass('fadeIn');
    $chat.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function (e) {
      chat.win.trigger('state', 'shown');
    });
  }

  // Ocultar si estaba mostrada.
  else {
    $chat.removeClass('fadeIn').addClass('fadeOut');
    $chat.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function (e) {
      chat.win.trigger('state', 'hidden');
      $chat.addClass('hidden');
    });
  }
});

// Cambiar estado del trigger del chat cuando ocurran eventos nuevos.
chat.win.on('markTrigger', function (somethingNew) {
  if (somethingNew === undefined || somethingNew === true) {
    $('#chat-opt-trigger').removeClass('verde').addClass('naranja');
  } else {
    $('#chat-opt-trigger').removeClass('naranja').addClass('verde');
  }
});

// Re/posicionar ventana del chat.
chat.win.on('position', function () {
  var dims = Elise.win.dims();
  var w = dims.width - 60;
  var h = dims.height - 60;

  $('#chat').css({
    left: 30,
    top: 30,
    width: w,
    height: h
  });
  $('#chat .chat-sidebar-content').css({
    height: h - 8*2 - (50+8*2) - (20+8*2)
  });
  $('#chat .chat-rooms').css({
    width: w - 250
  });
  $('#chat .chat-rooms-list').css({
    height: h - (40+5*2) - 50
  });
  $('#chat .chat-message').css({
    width: w - 5*2 - 250
  })
});


// -------------------------------------------------------------------------- //
// DOM Events //

// DOM listo.
$(document).ready(function ($) {

  // Iniciar conexión.
  chat.conn.trigger('init');

  // Posicionar la ventana.
  chat.win.trigger('position');

  // Decoración.
  $('#chat .chat-rooms-options a').toolTip();
});

// Ventana redimensionada.
$(window).on('resize', function (e) {
  chat.win.trigger('position');
});
