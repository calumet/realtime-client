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
// MODELS //

// Modelo de usuario.
chat.models.User = Backbone.Model.extend({
  defaults: {
    state: 'available',
    photo: chat.ui._defaults.avatar,
    name: 'Nombre de usuario',
    profile: 'Estudiante'
  }
});

// Modelo de sala de chat.
chat.models.Room = Backbone.Model.extend({
  defaults: {
    id: 'RXXX',
    idAttr: 'RXXX',
    classAttr: '',
    available: true,
    name: 'Sala de chat',
    $usersList: null,  // Objeto lista de usuarios.
    usersViews: [],  // Colección de vistas (y sus modelos) de usuarios.
    messages: []  // Los registros de cada mensaje.
  }
});

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
  templateMsg: _.template($(chat.ui._tmlIds.roomMsg).html()),
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
      _this.$usersList.append(userView.render().el);
    });

    return this;
  },
  render: function () {
    $('#chat .chat-rooms-name').html(this.model.get('name'));
    $('#chat-message').val('').trigger('focus');
    return this;
  },
  setActive: function (active) {
    if (active === undefined || active === true) {
      this.$el.add(this.$usersList).addClass('active');
      this.render();
    } else {
      this.$el.add(this.$usersList).removeClass('active');
    }
    return this;
  },
  addMsg: function (msg) {
    var date = new XDate(msg.id);
    var user = _.findWhere(chat.data.users, {id: msg.user});

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
      content: msg.content
    })).data({
      'id': msg.id,
      'user': msg.user
    });

    // Aplicar $.fn.timeago.
    $msg.find('.time').timeago();

    // Agregar mensaje a la sala y mover scroll.
    this.$('.chat-room-cell').append($msg);
    this.$el.scrollTop(this.$el.height());

    // TODO: concatenar mensajes consecutivos del mismo origen del mismo minuto.




/*
var ago, html;
var fmt = function (time) {
  if (String(time).length == 1) {
    return '0' + time;
  } else {
    return String(time);
  }
};

var user_local = app.data.user();
var user_remoto = app.users.cache[data.id] ? app.users.cache[data.id].info : app.data.user();

var curTime = new Date();
var hour = curTime.getHours() > 12 ? curTime.getHours() - 12 : (curTime.getHours() < 10 ? "0" + curTime.getHours() : curTime.getHours());
var curMinute = fmt(curTime.getMinutes());

var lastMsg = $('#rc' + data.room).children('.block:last');

// Insertar mensaje dependiendo de la sala
if (lastMsg.find('.msg').hasClass(user_remoto.id) &&
  lastMsg.find('.msg').hasClass(hour + '_' + curMinute)) {

  // Si su comentario fue el ultimo no crea bloque para mensaje
  lastMsg.find('.content').append($('<p/>', {text: data.content}));

} else {

  // Sino, crea bloque de menssaje
  ago = curTime.getFullYear() + '-' + fmt(curTime.getMonth() + 1) + '-' + fmt(curTime.getDate())
              + 'T' + fmt(curTime.getHours()) + ':' + fmt(curTime.getMinutes()) + ':' + fmt(curTime.getSeconds());
  html = $(this.msgTemplate({
    user: user_remoto,
    position: user_local.id === user_remoto.id ? 'pull-right' : 'pull-left',
    theme: user_local.id === user_remoto.id ? 'cian' : 'orange',
    content: data.content,
    ago: ago,
    time: hour + ':' + curMinute
  }));
  html.find('.time').timeago();

  // Se agrega el mensaje en la sala correspondiente
  $('#rc' + data.room).append(html);

}

// Notificar con sonido si es otro usuario o no está en focus la ventana
if (user_remoto.id !== app.data.user().id || !app.state.focus) {
  app.notify.msg();
}
$('#content-chat').scrollTop($('#rc' + data.room).height());  // Mueve el scroll
app.rooms.update(data.room);  // Actulizar la sala que recibe el mensaje
*/

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

  // Colocar la sala de clase como activa inicialmente.
  setTimeout(function () {
    chat.ui.trigger('room:change', chat.data.subject +'_'+ chat.data.group);
  }, 1);

  // Habilitar la opción de cambiar la sala.
  var roomsAvailable = _.pluck(rooms, 'id');
  $('#chat-opt-changeRoom').on('click', function (e) {
    var ra = chat.ui._room;
    var i = roomsAvailable.indexOf(ra);
    var r = i === roomsAvailable.length - 1 ? 0 : i + 1;
    chat.ui.trigger('room:change', roomsAvailable[r]);
  });

  // IMPORTANT: recordar que de momento sólo se soportan las dos salas,
  // la sala de clase y la del subgrupo, por lo tanto, sólo se manejan ellas.

  // Si alguna sala no se puede agregar.
  if (_.where(rooms, {available: false}).length) {
    Elise.notify.warning('No todas las salas de chat est&aacute;n disponibles'
     +' en este momento.');
  }

  // Habilitar la opción de enviar mensajes.
  $('#chat-message').on('keydown', function (e) {
    var code = e.keyCode || e.which;
    
    // La tecla ENTER fue presionada.
    if (code === 13) {
      chat.conn.trigger('msg', this.value);
      e.preventDefault();
      this.value = '';
      return false;
    }
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


// Cambia la sala activa.
chat.ui.on('room:change', function (room) {
  
  // Desactivar todas las demás ventanas.
  _.each(chat.ui.rooms, function (roomView) {
    roomView.setActive(false);
  });

  // Activar la ventana enviada.
  chat.ui.rooms[room].setActive();

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
// ROOMS :: USERS //

// Un usuario cambia de estado en una sala.
chat.ui.on('room:user:state', function (room, userId, state) {

  // Encontrar la vista del usuario en la sala.
  var uv = _.find(chat.ui.rooms[room].model.get('usersViews'), function (uv) {
    if (uv.model.get('id') === userId) return true;
  });

  // Cambiar estado y renderizarlo de nuevo.
  uv.model.set('state', state);
  uv.render();

  // TODO: mover usuario al final de los conectados.
});
