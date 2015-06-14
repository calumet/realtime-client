/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | UI
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * Enero, 2015
 **/

chat.models = {};
chat.views = {};
chat.ui = _.extend({}, Backbone.Events);


// -------------------------------------------------------------------------- //
// PRIVATE //

// Scripts con los contenidos de las plantillas.
chat.ui._tmlIds = {
  room: '#chat-tml-room',
  roomUser: '#chat-tml-roomUser',
  roomMsg: '#chat-tml-roomMsg'
};

// Avatar por defecto.
chat.ui._defaults = {
  avatar: '/eisi/images/Aula/Chat/avatar.jpg'
};

// Sala activa.
chat.ui._room = null;


// -------------------------------------------------------------------------- //
// MODEL/VIEW :: USER //

// Modelo de usuario.
chat.models.User = Backbone.Model.extend({
  defaults: {
    state: 'available',
    photo: chat.ui._defaults.avatar,
    name: 'Nombre de usuario',
    profile: 'Estudiante'
  }
});


// Vista de usuario.
chat.views.User = Backbone.View.extend({
  events: {},
  render: function () {
    this.$('.chat-user-photo').css({
      'background-image': 'url('+ this.model.get('photo').replace(' ', '%20') +')'
    });
    this.$('.chat-user-name').html(this.model.get('name'));
    this.$('.chat-user-profile').html(this.model.get('profile'));
    return this;
  }
});


// -------------------------------------------------------------------------- //
// MODEL/VIEW :: ROOM //

// Modelo de sala de chat.
chat.models.Room = Backbone.Model.extend({
  defaults: {
    id: 'RXXX',
    idAttr: 'RXXX',
    classAttr: '',
    available: true,
    userState: 'away',
    name: 'Sala de chat',
    usersViews: [],  // Colección de vistas (y sus modelos) de usuarios.
    messages: []  // Los registros de cada mensaje.
  }
});


// Vista de sala de chat.
chat.views.Room = Backbone.View.extend({

  template: _.template($(chat.ui._tmlIds.room).html()),
  templateMsg: _.template($(chat.ui._tmlIds.roomMsg).html()),
  $usersList: null,  // Objeto lista de usuarios.
  events: {},

  initialize: function () {
    var _this = this;

    // Agregar la sala de chat.
    this.setElement(this.template(this.model.attributes));
    $('#chat .chat-rooms-list').append(this.el);

    // Agregar los mensajes en la sala de llegada.
    _.each(this.model.get('messages'), this.addMsg.bind(this));

    // Agregar la lista de los usuarios de la sala.
    this.$usersList = $('<div class="chat-sidebar-users">')
     .attr('id', this.model.get('idAttr') + '-users');
    $('#chat .chat-sidebar-content').append(this.$usersList);

    // Agregar los usuarios a la lista.
    _.each(this.model.get('usersViews'), function (userView) {
      if (userView.model.get('state') === 'offline') {
        _this.$usersList.append(userView.render().el);
      } else {
        _this.$usersList.prepend(userView.render().el);
      }
    });

    return this;
  },

  render: function (render) {

    // Mostrar los contenidos de la sala.
    if (render === undefined || render === true) {
      this.$el.add(this.$usersList).addClass('active animated fadeIn');
      $('#chat .chat-rooms-name .boton .label').html(this.model.get('name'));
      $('#chat-message').val('').trigger('focus');
    }

    // Ocultar los contenidos de la sala.
    else {
      this.$el.add(this.$usersList).removeClass('active animated fadeIn');
    }
    return this;
  },

  scrollToEnd: function () {
    this.$el.scrollTop(this.$('.chat-room-cell').height() + 300);
  },

  addMsg: function (msg) {
    var date = new XDate(msg.id);
    var user = _.findWhere(chat.data.users, {id: msg.user});
    var content = msg.content;
    var $lastMsg = this.$('.chat-room-cell .block:last');
    var lastDate = new XDate($lastMsg.data('id'));

    // Concatenar mensajes consecutivos del mismo origen del mismo minuto.
    if ($lastMsg.length && $lastMsg.data('user') === msg.user
    && date.toString('yyyy-MM-dd HH:mm') === lastDate.toString('yyyy-MM-dd HH:mm')) {

      // Parsear contenido.
      content = '<p class="animated flipInX">'+ content +'</p>';
      
      // Agregar mensaje.
      $lastMsg.find('.chat-msg-content').append(content);
    }

    // Mensaje de un usuario diferente al último o de diferencia de más de un minuto.
    else {

      // Definir las clases del mensaje.
      var classes = chat.data.user.id === msg.user
       ? 'pull-right cian'
       : 'pull-left orange';
      classes += ' animated flipInY';

      // Parsear contenido.
      content = '<p>'+ content +'</p>';

      // Crear elemento del mensaje.
      var $msg = $(this.templateMsg({
        idAttr: this.model.get('id') +'-M'+ msg.id,
        classAttr: classes,
        user: user,
        time: date.toString('yyyy-MM-dd HH:mm'),
        content: content
      })).data({
        'id': msg.id,
        'user': msg.user
      });


      // Aplicar $.fn.timeago.
      $msg.find('.time').timeago();

      // Agregar mensaje a la sala.
      this.$('.chat-room-cell').append($msg);
    }

    // Mover scroll de la sala.
    this.$el.scrollTop(this.$('.chat-room-cell').height() + 300);
  }
});


// -------------------------------------------------------------------------- //
// MODEL/VIEW :: ROOM USER //

// Modelo de usuario de sala de chat.
chat.models.RoomUser = Backbone.Model.extend({
  defaults: {
    id: 'UXXX',
    idAttr: 'RXXX-UXXX',
    state: 'away',  // Concuerda con la clase en CSS.
    photo: chat.ui._defaults.avatar,
    name: 'Nombre de usuario',
    profile: 'Estudiante'
  }
});


// Vista de usuario de sala.
chat.views.RoomUser = Backbone.View.extend({
  template: _.template($(chat.ui._tmlIds.roomUser).html()),
  events: {},
  states: ['available', 'away', 'offline'],

  initialize: function () {
    this.setElement(this.template(this.model.attributes));
    return this;
  },

  render: function () {
    var state = this.model.get('state');

    // Animación del cambio.
    this.$el.removeClass(this.states.join(' ') +' animated rubberBand flipInY')
     .addClass(state);
    if (state === 'offline') {
      this.$el.addClass('animated rubberBand');
    } else {
      this.$el.addClass('animated flipInY');
    }

    // FIXIT: hay un problema tratando de escribir la foto de un usuario.
    // Al parecer, no está llegando el dato, pero esto ocurre con el profesor.

    this.$('.chat-user-photo').css({
      'background-image': 'url('+ this.model.get('photo').replace(' ', '%20') +')'
    });
    this.$('.chat-user-name').html(this.model.get('name'));
    this.$('.chat-user-profile').html(this.model.get('profile'));
    return this;
  }
});


// -------------------------------------------------------------------------- //
// GENERAL //

// Re/iniciar interfaz con datos de entrada.
// Esto si la conexión fue establecida correctamente.
chat.ui.on('init', function () {

  var ra = _.where(chat.data.rooms, {available: true});
  
  // Sólo hay una sala activa.
  if (ra.length === 1) {
    $('#chat .chat-rooms-name .dropdown-menu').append(
     '<li><a href="#">No hay más salas disponibles.</a></li>');
    $('#chat .chat-rooms-name .caret').addClass('hidden');
  }

  // Hay más de una sala activa.
  else {
    
    // Cambiar de sala.
    _.each(ra, function (r) {
      $('#chat .chat-rooms-name .dropdown-menu').append($('<li>').html($('<a>', {
        href: '#',
        html: chat.ui.rooms[r.id].model.get('name'),
        data: {
          room: function (ri) {
            return ri;
          }(r.id)
        },
        click: function (ri) {
          return function (e) {
            chat.ui.trigger('room:change', ri);
          };
        }(r.id)
      })));
    });
  }
  $('#chat .chat-rooms-name .boton').addClass('dropdown-toggle').dropdown();

  // Habilitar la opción de enviar mensajes.
  $('#chat-message').on('keydown', function (e) {
    var code = e.keyCode || e.which;
    var content = $.trim(this.value);
    var roomActive = chat.ui._room;

    // La tecla ENTER fue presionada.
    if (code === 13) {
      e.preventDefault();
      e.stopPropagation();

      // Parsear contenido.
      content = _.escape(content);
      content = content.replace(/\n/g, '<br>');
      content = content.replace(/[\r\t\v]/g, '');

      // Validar el contenido.
      if (content !== '' && content.length >= 2) {
        chat.conn.trigger('msg', content);
        this.value = '';
      }
      return false;
    }
  });

  // Toggle ventana.
  $('#chat-opt-trigger, #chat-opt-minimize').on('click', function (e) {
    chat.win.trigger('toggle');
  });

  // Habilitar la opción de des/habilitar audio.
  $('#chat-opt-audio').on('click', function (e) {
    chat.config.trigger('change', 'audio', 'enabled', !chat.config.audio.enabled);
  });
});


// -------------------------------------------------------------------------- //
// USER //

// La vista del usuario.
chat.ui.user = null;

// Definir usuario en la interfaz.
chat.ui.on('user:set', function () {

  // Shortcuts para los datos.
  var meId = chat.data.user.id;
  var teacherId = chat.data.teacher.id;

  // Conseguir los datos del usuario local.
  var userLocal = _.findWhere(chat.data.users, {id: meId});

  // Crear modelo y vista del usuario en el chat.
  var localUserModel = new chat.models.User({
    id: meId,
    state: 'available',
    photo: userLocal.photo,
    name: userLocal.name,
    profile: (meId === teacherId ? 'Profesor' : 'Estudiante')
  });
  chat.ui.user = new chat.views.User({
    model: localUserModel,
    el: $('#chat .chat-sidebar-head')
  }).render();
});


// Usuario desconectado.
chat.ui.on('user:disconnect', function () {

  // Marcar el botón de trigger como normal.
  $('#chat-opt-trigger').removeClass('verde naranja rojo');

  // Colocar todos los usuarios de todas las salas como desconectados.
  _.each(chat.ui.rooms, function (roomView, room) {
    _.each(roomView.model.get('usersViews'), function (userView) {
      chat.ui.trigger('room:user:state', room, userView.model.get('id'), 'offline');
    });
  });
});


// -------------------------------------------------------------------------- //
// ROOMS //

// Las vistas de las salas de chat donde el usuario se encuentra.
chat.ui.rooms = {};


// -------------------------------------------------------------------------- //
// ROOMS/ADD //

// Agregar una nueva sala.
chat.ui.on('room:add', function (room) {
  var ud, udTeacher;
  var IAmATeacher = chat.data.user.id === chat.data.teacher.id;

  // Lista de usuarios de la sala (exceptuar el local).
  var users = _.filter(room.users, function (user) {
    if (user.id !== chat.data.user.id) return true;
  });

  // Crear las vistas con sus modelos de cada usuario.
  users = _.map(users, function (user) {
    ud = _.findWhere(chat.data.users, {id: user.id});
    udTeacher = chat.data.teacher.id === user.id;
    var model = new chat.models.RoomUser({
      id: user.id,
      idAttr: room.id +'-'+ user.id,
      state: user.state,
      photo: ud.photo,
      name: ud.name,
      profile: udTeacher ? 'Profesor' : 'Estudiante'
    });
    return new chat.views.RoomUser({
      model: model
    });
  });

  // Crear modelo de la sala.
  var roomName = 'Sala personalizada';
  var group = room.id.substring(room.id.indexOf('_') + 1);
  switch (room.type) {
    case 'class': {
      roomName = 'Sala de clase'+ (IAmATeacher ? ' ('+ group +')' : '');
      break;
    }
    case 'subgroup': {
      roomName = 'Sala de subgrupo';
      break;
    }
    case 'guion': {
      roomName = 'Sala de materia';
      break;
    }
  }
  var roomModel = new chat.models.Room({
    id: room.id,
    idAttr: room.id,
    classAttr: '',
    name: roomName,
    available: room.available,
    usersViews: users,
    messages: room.messages
  });

  // Crear y guardar vista de sala.
  chat.ui.rooms[room.id] = new chat.views.Room({
    model: roomModel
  });

  // Avisar si hay nuevos mensajes en esta sala (ya que no la vé inmediatamente).
  if (room.messages.length && room.timeLastOut
  && room.timeLastOut < room.messages[room.messages.length - 1].id) {
    chat.win.trigger('markTrigger', true);
    Elise.notify.normal('Hay nuevos mensajes por leer en <b>'+ roomName +'</b>.',
     'Chat del aula');
  }
});


// -------------------------------------------------------------------------- //
// ROOMS/STATE //

// Cambio de estado de una sala.
chat.ui.on('room:state', function (data) {
  var roomId = data.room;
  var available = data.available;
  var room = chat.ui.rooms[roomId];
  var name = room.model.get('name');

  // Cambiar estado de sala.
  room.model.set('available', available);

  // No disponible.
  if (!available) {
    Elise.notify.warning('La sala <b>'+ name +'</b> no se encuentra disponible'
     +' en este momento.', 'Chat del aula');
  }
});


// -------------------------------------------------------------------------- //
// ROOMS/CHANGE //

// Cambia la sala activa.
chat.ui.on('room:change', function (room) {

  // Usuario lejano en la sala actual y disponible en la nueva.
  // Esto es si la ventana de chat está siendo observada.
  if (chat._focus && chat.win._state === 'shown') {
    chat.conn.trigger('state', chat.ui._room, 'away');
    chat.conn.trigger('state', room, 'available');
  }

  // Desactivar todas las demás ventanas.
  _.each(chat.ui.rooms, function (roomView) {
    roomView.render(false);
  });

  // Activar la ventana enviada y arreglar scroll.
  chat.ui.rooms[room].render();
  chat.ui.rooms[room].scrollToEnd();

  // Guardar estado.
  chat.ui._room = room;
});


// -------------------------------------------------------------------------- //
// ROOMS :: MESSAGES //

// Agregar un mensaje en una sala.
chat.ui.on('room:msg:add', function (room, msg) {
  
  // Agregar el mensaje en la sala correspondiente.
  chat.ui.rooms[room].addMsg(msg);
});


// -------------------------------------------------------------------------- //
// ROOMS :: USER //

// Un usuario cambia de estado en una sala.
chat.ui.on('room:user:state', function (room, userId, state) {

  // Encontrar la vista del usuario en la sala.
  var uv = _.find(chat.ui.rooms[room].model.get('usersViews'), function (uv) {
    if (uv.model.get('id') === userId) return true;
  });
  if (!uv) {
    return console.debug('chat.ui.on("room:user:state")', room, userId, 'no encontrado.');
  }

  // Mover usuario al final de los conectados.
  var $ul = chat.ui.rooms[room].$usersList;
  var $offlines = $ul.find('.chat-user-box.offline');
  if ($offlines.length) {
    $offlines.not('#'+ uv.el.id).first().before(uv.el);
  } else {
    $ul.find('.chat-user-box:not(#'+ uv.el.id +'):last').after(uv.el);
  }

  // Cambiar estado y renderizarlo de nuevo.
  uv.model.set('state', state);
  uv.render();
});
