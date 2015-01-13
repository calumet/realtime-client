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


// -------------------------------------------------------------------------- //
// MODELS //

// Modelo de usuario.
chat.models.User = Backbone.Model.extend({
  defaults: {
    id: 'UXXX',
    state: 'available',
    photo: chat.ui._defaults.avatar,
    name: 'Nombre de usuario',
    profile: 'Estudiante'
  }
});

// Modelo de sala de chat.
chat.models.Room = Backbone.Model.extend({
  defaults: {
    id: 'SXXX',
    available: true,
    $usersList: null,  // Objeto lista de usuarios.
    users: [],  // Colección de vistas y sus modelos de usuarios.
    messages: []  // Los registros de cada mensaje.
  }
});


// -------------------------------------------------------------------------- //
// VIEWS //

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

// Vista de sala de chat.
chat.views.Room = Backbone.View.extend({
  template: _.template($(chat.ui._tmlIds.room).html()),
  events: {},
  initialize: function () {
    var _this = this;

    // Agregar la sala de chat.
    this.setElement(this.template(this.model.attributes));
    $('#chat .chat-rooms-list').append(this.el);

    // Agregar los mensajes en la sala de llegada.
    // TODO: this.

    // Agregar la lista de los usuarios de la sala.
    this.$usersList = $('<div class="chat-sidebar-users">')
     .attr('id', this.model.get('id') + '-users');
    $('#chat .chat-sidebar-content').append(this.$usersList);

    // Agregar los usuarios a la lista.
    _.each(this.model.get('users'), function (userView) {
      _this.$usersList.append(userView.render().el);
    });

    return this;
  },
  render: function () {
    // TODO: this.
    return this;
  },
  setActive: function (active) {
    if (active === undefined || active === true) {
      this.$el.add(this.$usersList).addClass('active');
    } else {
      this.$el.add(this.$usersList).removeClass('active');
    }
    return this;
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

// Iniciar interfaz con datos de entrada.
chat.ui.on('init', function (rooms, users) {

  // Guardar referencia de datos.
  chat.data.rooms = rooms;
  chat.data.users = users;

  // Definir interfaz de usuario.
  chat.ui.trigger('user:set');

  // Agregar las salas de chat.
  _.each(rooms, function (room) {
    if (room.available) {
      chat.ui.trigger('room:add', room);
    }
  });

  // TODO: activar la sala de clase cuando ella esté lista.

  // Si alguna sala no se puede agregar.
  if (_.where(rooms, {available: false}).length) {
    Elise.notify.warning('No todas las salas de chat est&aacute;n disponibles'
     +' en este momento.');
  }
});


// -------------------------------------------------------------------------- //
// User //

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


// -------------------------------------------------------------------------- //
// Rooms //

// Las vistas de las salas de chat donde el usuario se encuentra.
chat.ui.rooms = {};

// Agregar una nueva sala.
chat.ui.on('room:add', function (room) {

  // Crear vistas/modelos de los usuarios de la sala.
  var ud;
  var users = room.students;
  if (room.teacher.id !== '') {
    users.unshift(room.teacher);
  }
  users = _.map(users, function (user) {
    ud = _.findWhere(chat.data.users, {id: user.id});
    var model = new chat.models.User({
      id: room.id +'-'+ user.id,
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
  var roomModel = new chat.models.Room({
    id: room.id,
    classes: '',
    available: room.available,
    users: users,
    messages: room.messages
  });

  // Crear y guardar vista de sala.
  chat.ui.rooms[room.id] = new chat.views.Room({
    model: roomModel
  });
});

// Cambia la sala activa.
chat.ui.on('room:change', function (room) {
  
  // Desactivar todas las demás ventanas.
  _.each(chat.ui.rooms, function (roomView) {
    roomView.setActive(false);
  });

  // Activar la ventana enviada.
  chat.ui.rooms[room].setActive();
});

// Agregar un mensaje en una sala.
chat.ui.on('room:msg', function () {
  // TODO: this.
});
