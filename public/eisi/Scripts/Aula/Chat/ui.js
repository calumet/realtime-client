/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * EISI | Aula | Chat | UI
 * Romel Pérez, prhone.blogspot.com
 * Duvan Vargas, @DuvanJamid
 * 2015
 **/

window.chat = window.chat || {};
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
      'background-image': 'url('+ this.model.get('photo') +')'
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
    if (render === undefined || render === true) {
      this.$el.add(this.$usersList).addClass('active');
      this.$el.scrollTop(this.$('.chat-room-cell').height() + 300);
      $('#chat .chat-rooms-name').html(this.model.get('name'));
      $('#chat-message').val('').trigger('focus');
    } else {
      this.$el.add(this.$usersList).removeClass('active');
    }
    return this;
  },
  addMsg: function (msg) {
    var date = new XDate(msg.id);
    var user = _.findWhere(chat.data.users, {id: msg.user});
    var content = msg.content;
    var $lastMsg = this.$('.chat-room-cell .block:last');
    var lastDate = new XDate($lastMsg.data('id'));

    // Agregar contenido enriquecido.
    content = '<p>'+ content +'</p>';

    // Concatenar mensajes consecutivos del mismo origen del mismo minuto.
    if ($lastMsg.length && $lastMsg.data('user') === msg.user
    && date.toString('yyyy-MM-dd HH:mm') === lastDate.toString('yyyy-MM-dd HH:mm')) {

      // Agregar mensaje.
      $lastMsg.find('.chat-msg-content').append(content);
    }

    // Mensaje de un usuario diferente al último o de diferencia de más de un minuto.
    else {

      // Definir las clases del mensaje.
      var classes = chat.data.user.id === msg.user
       ? 'pull-right cian'
       : 'pull-left orange';

      // Crear elemento del mensaje.
      var $msg = $(this.templateMsg({
        idAttr: this.model.get('id') +'-M'+ msg.id,
        classAttr: classes,
        user: user,
        time: date.toString('yyyy-MM-dd HH:mm:ss'),
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
    state: 'available',  // Concuerda con la clase en CSS.
    photo: chat.ui._defaults.avatar,
    name: 'Nombre de usuario',
    profile: 'Estudiante'
  }
});


// Vista de usuario de sala.
chat.views.RoomUser = Backbone.View.extend({
  template: _.template($(chat.ui._tmlIds.roomUser).html()),
  events: {},
  initialize: function () {
    this.setElement(this.template(this.model.attributes));
    return this;
  },
  render: function () {
    this.$el.attr('class', 'chat-user-box').addClass(this.model.get('state'));
    this.$('.chat-user-photo').css({
      'background-image': 'url('+ this.model.get('photo') +')'
    });
    this.$('.chat-user-name').html(this.model.get('name'));
    this.$('.chat-user-profile').html(this.model.get('profile'));
    return this;
  }
});


// -------------------------------------------------------------------------- //
// GENERAL //

// Re/iniciar interfaz con datos de entrada.
chat.ui.on('init', function () {

  // Habilitar la opción de cambiar la sala.
  var roomsAvailable = _.pluck(chat.data.rooms, 'id');
  $('#chat-opt-changeRoom').on('click', function (e) {
    var ra = chat.ui._room;
    var i = roomsAvailable.indexOf(ra);
    var r = i === roomsAvailable.length - 1 ? 0 : i + 1;
    chat.ui.trigger('room:change', roomsAvailable[r]);
  });

  // Habilitar la opción de enviar mensajes.
  $('#chat-message').on('keydown', function (e) {
    var code = e.keyCode || e.which;
    var content = $.trim(this.value);
    var roomActive = chat.ui._room;

    // La tecla ENTER fue presionada.
    if (code === 13) {
      e.preventDefault();
      e.stopPropagation();
      
      // Si la sala donde se encuentra se encuentra inactiva.
      if (!chat.ui.rooms[roomActive].model.get('available')) {
        Elise.notify.warning('Esta sala se encuentra no disponible en '
         +'este momento.', 'Chat del aula');
        return false;
      }
      
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

  // Trigger button.
  $('#chat-opt-trigger').removeAttr('disabled');

  // Toggle ventana.
  $('#chat-opt-trigger, #chat-opt-minimize').on('click', function (e) {
    chat.win.trigger('toggle');
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


// Agregar una nueva sala.
chat.ui.on('room:add', function (room) {

  var ud;

  // Lista de usuarios de la sala (exceptuar el local).
  var users = room.students;
  users = _.filter(users, function (user) {
    if (user.id === chat.data.user.id) return false;
    return true;
  });
  if (room.teacher.id !== '' && room.teacher.id !== chat.data.user.id) {
    users.unshift(room.teacher);
  }

  // Crear las vistas con sus modelos de cada usuario.
  users = _.map(users, function (user) {
    ud = _.findWhere(chat.data.users, {id: user.id});
    var model = new chat.models.RoomUser({
      id: user.id,
      idAttr: room.id +'-'+ user.id,
      state: user.state,
      photo: ud.photo,
      name: ud.name,
      profile: chat.data.teacher.id === user.id ? 'Profesor' : 'Estudiante'
    });
    return new chat.views.RoomUser({
      model: model
    });
  });

  // Crear modelo de la sala.
  var roomName = room.id === chat.data.subject +'_'+ chat.data.group
   ? 'Sala de clase'
   : (room.id === chat.data.subject +'_'+ chat.data.group +'_'+ chat.data.subgroup
      ? 'Sala del subgrupo'
      : room.name);
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
});


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


// Cambia la sala activa.
chat.ui.on('room:change', function (room) {
  
  // Desactivar todas las demás ventanas.
  _.each(chat.ui.rooms, function (roomView) {
    roomView.render(false);
  });

  // Activar la ventana enviada.
  chat.ui.rooms[room].render();

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
