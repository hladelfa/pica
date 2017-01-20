var express = require('express');  
var app = express();  
var server = require('http').Server(app);  

server.listen(8080, function() {  
    console.log('Servidor corriendo en http://localhost:8080');
});


app.use(express.static('front'));

app.get('/jugador/:id', function(req, res) {  
 
 console.log("Jugador"); 
 res.setHeader('Content-Type', 'application/json');
 //res.setHeader('Content-Type', 'text/plain');
 //TODO Agregar busqueda en mongo
 res.status(200).send(JSON.stringify({ name: "Juan", status: "Creando" }));
  
});