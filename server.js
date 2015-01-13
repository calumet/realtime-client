/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * Realtime-client | JSP-Fake-Server
 * Romel Pérez, prhone.blogspot.com
 * 2015
 **/

// Módulos.
var express = require('express');
var swig = require('swig');
var cookieParser = require('cookie-parser');
var config = require('./config');
var security = require('./security');

// Instanciar y configurar.
var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// Routes:

// Remueve las cookies de seguridad manualmente.
app.get('/', function (req, res) {
  var userId = req.cookies[config.security.user];

  res.cookie(config.security.user, 'NONE', {
    domain: config.host,
    port: '*'
  });
  res.cookie(config.security.door, 'NONE', {
    domain: config.host,
    port: '*'
  });

  res.set('Content-Type', 'text/html; charset=iso-8859-1');
  res.render('index');
  console.log('usuario desconectado manualmente: '+ userId);
});
app.get('/eisi', function (req, res) {
  res.redirect('/');
});
app.get('/login', function (req, res) {
  res.render('login');
});

// Agrega las cookies de seguridad para certificar las conexiones.
app.get('/portal', function (req, res) {
  var userId = req.query.id;
  var subgroup = req.query.subgroup;
  var userAdmin = req.query.admin;
  var certificate = security.encrypt(userId);

  res.cookie(config.security.user, userId, {
    domain: config.host,
    port: '*'
  });
  res.cookie(config.security.door, certificate, {
    domain: config.host,
    port: '*'
  });

  res.render('portal/portal', {
    id: userId,
    admin: userAdmin,
    subgroup: subgroup
  });
  console.log('usuario conectado manualmente: '+ userId);
});

// Administración de servicios del sistema realtime.
app.get('/realtimeAdmin', function (req, res) {
  res.render('portal/realtimeAdmin', {
    id: req.cookies[config.security.user]
  });
});

// Escoger el aula.
app.get('/escogerAula', function (req, res) {
  res.render('aula/escogerAula', {
    id: req.cookies[config.security.user],
    subgroup: req.query.subgroup
  });
});

// Entrar en un aula.
app.get('/aula', function (req, res) {
  var clase = req.query.clase.split('_');
  var subject = clase[0];
  var group = clase[1];
  var subgroup = clase[2];
  var teacher = clase[3];

  res.render('aula/aula', {
    id: req.cookies[config.security.user],
    subject: subject,
    group: group,
    subgroup: subgroup,
    teacher: teacher
  });
});

// Iniciar servidor.
app.listen(config.port, function (err) {
  if (err) throw err;

  console.log('servidor en modo '+ app.get('env'));
  console.log('servidor escuchando en puerto '+ config.port);
});
