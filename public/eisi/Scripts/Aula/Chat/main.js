/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | Main
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * Enero, 2015
 **/

// Objetos ya definidos:
// > window.chat
// > window.chat.data = {user: {id}, teacher: {id}, subject, group, subgroup}

chat.config = _.extend({}, Backbone.Events);
chat.win = _.extend({}, Backbone.Events);
chat.audio = _.extend({}, Backbone.Events);


// -------------------------------------------------------------------------- //
// CONTROL (debug, events, config) //

// MOGO DEBUG.
chat._debug = false;
if (!chat._debug) {
  console._debug = console.debug;
  console.debug = function () {};
}


// Estado de la aplicación.
chat._focus = true;
chat.on('focus', function (state) {
  if (state === undefined || state === true) {
    chat._focus = true;

    // Cambiar estado a disponible si está viendo la sala al momento de ver
    // la ventana.
    if (chat.win._state === 'shown') {
      chat.conn.trigger('state', chat.ui._room, 'available');
    }
  } else {
    chat._focus = false;
    chat.conn.trigger('state', chat.ui._room, 'away');
  }
});


// Configuración predeterminada de usuario.
chat.config.audio = {
  volume: 0.5,
  enabled: true
};

// General.
// Cargar configuración guardada por el usuario.
chat.config.on('load', function () {
  _.each(['audio'], function (c) {
    var v;
    _.each(chat.config[c], function (e, i) {
      v = localStorage.getItem('chat['+ chat.data.user.id +'].config.'+ c +'.'+ i);
      chat.config[c][i] = v !== null ? v : chat.config[c][i];
    });
  });
  chat.config.trigger('change', 'audio', 'volume', Number(chat.config.audio.volume));
  chat.config.trigger('change', 'audio', 'enabled',
   chat.config.audio.enabled === 'false' ? false : true);
});
// Cambiar una variable de configuración.
chat.config.on('change', function (c, p, v) {
  chat.config[c][p] = v;
  localStorage.setItem('chat['+ chat.data.user.id +'].config.'+ c +'.'+ p, v);
});

// Audio.
// Cambiar una variable de audio.
chat.config.on('change', function (c, p, v) {
  if (c === 'audio' && p === 'enabled') {
    $('#chat-opt-audio')[!!v ? 'addClass' : 'removeClass']('azuloscuro')
                        [!!v ? 'removeClass' : 'addClass']('transparente');
  }
});


// -------------------------------------------------------------------------- //
// VENTANA DEL CHAT //

// Iniciar eventos de control de ventana.
// Inicializar diseño de elementos de control de ventana y configuración del chat.
chat.win.on('init', function () {

  // Si es móbil o no en dispositivo.
  if (Elise.isMobile) {
    $('#chat').css('border', 'none');

    // Ocultar sidebar.
    $('#chat .chat-sidebar').addClass('outPhase');

    // Mostrar/ocultar el sidebar.
    $('#chat-opt-users, #chat-opt-usersHide').removeClass('outPhase').on('click',
    function (e) {
      var $s = $('#chat .chat-sidebar').removeClass('animated fadeIn fadeOut');
      $s.hasClass('outPhase') ? $s.removeClass('outPhase') : $s.addClass('outPhase');
    });
  } else {

    // Decoración.
    $('#chat .chat-rooms-options button').toolTip();
  }

  // Cargar configuración de usuario guardada (si la hay).
  chat.config.trigger('load');

  // Aplicar DOM de cambio de configuraciones definidas.
  $('#chat-opt-audio')[chat.config.audio.enabled ? 'addClass' : 'removeClass']('azuloscuro')
                      [chat.config.audio.enabled ? 'removeClass' : 'addClass']('transparente');

  // Posicionar la ventana.
  chat.win.trigger('position');

  // Redimensionar ventana al redimensionado de ventana.
  $(window).on('resize', function (e) {
    chat.win.trigger('position');
  });

  // Ventana con/sin foco.
  $(window).on('focus', function (e) {
    chat.trigger('focus');
  });
  $(window).on('blur', function (e) {
    chat.trigger('focus', false);
  });
});

// Estado de la ventana del chat: hidden | shown
chat.win._state = 'hidden';
chat.win.on('state', function (state) {
  chat.win._state = state;

  // Se muestra.
  if (state === 'shown') {
    if (chat.conn.socket.connected) {
      chat.win.trigger('markTrigger', false);
      if (chat.ui._room) chat.ui.rooms[chat.ui._room].scrollToEnd();
    }
    if (chat._focus) {
      chat.conn.trigger('state', chat.ui._room, 'available');
    }
    if (Elise.isMobile) {
      $('#header, #aula').addClass('outPhase');
    } else {
      $('body').css('overflow', 'hidden');
    }

    // Colocar la sala de clase como la sala inicialmente abierta (sino lo estaba).
    if (!chat.ui._room) {
      chat.ui.trigger('room:change', chat.data.subject +'_'+ chat.data.group);
      chat.ui.rooms[chat.data.subject +'_'+ chat.data.group].scrollToEnd();
    }
  }

  // Se oculta.
  else {
    if (!Elise.isMobile) {
      $('body').css('overflow', 'auto');
    }
    chat.conn.trigger('state', chat.ui._room, 'away');
    if (Elise.isMobile) {
      $('#header, #aula').removeClass('outPhase');
    }
  }
});

// Mostrar/ocultar ventana del chat.
chat.win.on('toggle', function () {
  var $chat = $('#chat').removeClass('animated');

  // Mostrar si estaba ocultada.
  if ($chat.hasClass('outPhase')) {
    $chat.removeClass('outPhase fadeOutUp').addClass('animated fadeInDown');
    $chat.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function (e) {
      chat.win.trigger('state', 'shown');
    });
  }

  // Ocultar si estaba mostrada.
  else {
    $chat.removeClass('fadeInDown').addClass('animated fadeOutUp');
    $chat.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function (e) {
      chat.win.trigger('state', 'hidden');
      $chat.addClass('outPhase');
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
  var dims = Elise.win.dims(300, 300);
  var w = dims.width;
  var h = dims.height;

  // Si nos encontramos en dispositivo móbil.
  if (Elise.isMobile) {
    $('#chat').css({
      width: w,
      height: h
    });

    // Arreglar estructura interna del chat.
    $('#chat .chat-sidebar').css({
      width: w,
      height: h
    });
    $('#chat .chat-sidebar > div').css('width', 'auto');
    $('#chat .chat-sidebar-content').css({
      height: h - 8*2 - (50+8*2) - (20+8*2)
    });
    $('#chat .chat-rooms').css({
      width: w
    });
    $('#chat .chat-rooms-list').css({
      height: h - (40+5*2) - 50
    });
  } else {
    w -= 100;
    h -= 100;

    $('#chat').css({
      width: w,
      height: h,
      left: 50,
      top: 50
    });

    // Arreglar estructura interna del chat.
    $('#chat .chat-sidebar-content').css({
      height: h - 8*2 - (50+8*2) - (20+8*2)
    });
    $('#chat .chat-rooms').css({
      width: w - 250
    });
    $('#chat .chat-rooms-list').css({
      height: h - (40+5*2) - 80
    });
  }
});


// -------------------------------------------------------------------------- //
// AUDIO //

// Reproducir un sonido de los precargados.
chat.audio.on('play', function (sound) {
  var s;
  if (chat.config.audio.enabled) {
    s = createjs.Sound.play(sound);
    s.volume = chat.config.audio.volume;
  }
});


// -------------------------------------------------------------------------- //
// INICIALIZACIÓN //

// DOM listo.
$(document).ready(function ($) {

  // Cargar recursos de audio.
  // NOTE: no se espera a que estén cargados ya que la reproducción de audio
  // se hace "probablemente" después de haberse cargado la página entera.
  createjs.Sound.alternateExtensions = ['ogg'];
  createjs.Sound.registerSounds([
    {src: 'CyanPing.mp3', id: 'newMsg'},
    {src: 'Lalande.mp3', id: 'sendMsg'}
  ], '/eisi/sounds/Aula/Chat/');
  
  // Iniciar conexión.
  chat.conn.trigger('init');

  // Iniciar control de ventana.
  chat.win.trigger('init');
});
