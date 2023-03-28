var http = require('http');
var manejador = function(solicitud,respuesta){
   console.log('Hola mundito')
   respuesta.end('HOLA uwu')

};
var servidor = http.createServer(manejador);
servidor.listen(8080);
