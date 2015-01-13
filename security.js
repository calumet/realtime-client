/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * Realtime-client | Security
 * Romel Pérez, prhone.blogspot.com
 * 2015
 **/

var crypto = require('crypto');
var config = require('./config');


// -------------------------------------------------------------------------- //
// ENCRYPTION AND DECRYPTION //

/**
 * Este script simula ser la clase de Java que se encargará de cifrar el código
 * de comunicación entre los dos servidores.
 */

var iv = new Buffer('0000000000000000');
var key = config.security.key;

exports.encrypt = function (data) {
  var decodeKey = crypto.createHash('sha256').update(key, 'utf-8').digest();
  var cipher = crypto.createCipheriv('aes-256-cbc', decodeKey, iv);
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
};

exports.decrypt = function (data) {
  var encodeKey = crypto.createHash('sha256').update(key, 'utf-8').digest();
  var cipher = crypto.createDecipheriv('aes-256-cbc', encodeKey, iv);
  return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
};
