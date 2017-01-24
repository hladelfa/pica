var express = require('express');  
var app = express();  
var server = require('http').Server(app);  


//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/pica');

var Jugador = mongoose.model('Jugador', {id:Number, name: String, status: String, cocina: [String]});

server.listen(8080, function() {  
    console.log('Servidor corriendo en http://localhost:8080');
});




app.use(express.static('front'));

//app.get('/jugador/:id', function(req, res) {  
 
 //console.log("Jugador"); 
 
 
 
 //res.setHeader('Content-Type', 'application/json');
 //res.setHeader('Content-Type', 'text/plain');
 
 //TODO Agregar busqueda en mongo
 
 
 //res.status(200).send(JSON.stringify({ name: "Juan", status: "Creando" }));
  
//});

app.route('/jugador/:id')
  .get(function(req, res) {
	
	Jugador.findOne({ id: req.params.id }, function (err, jugadorx) {
		if (err) {
			console.log(err);
		} else if (jugadorx) {
			console.log('Found:', jugadorx);
			res.status(200).send(jugadorx);
		} else {
			console.log('Player not found!');
		}
	})
	
	
	//console.log(jugador);
	//res.status(200).send(jugador);
  })
  .post(function(req, res) {
	
	//Lets create a new jugador
    var jugadorx = new Jugador({ id: req.params.id, status: 'Creando'});
	
	//Lets save it
	jugadorx.save(function (err, userObj) {
		if (err) {
			console.log(err);
		} else {
			console.log('saved successfully:', userObj);
		}
	});
	
    res.send('Add a Player');
  })
  .put(function(req, res) {
	console.log(req.data);
	console.log(req.params);
	console.log(req.body);
	console.log(req.query);
	 
	Jugador.findOne({ id: req.params.id }, function (err, jugadorx) {
		if (err) {
			console.log(err);
		} else if (jugadorx) {
			console.log('Found:', jugadorx);
			//jugadorx.name = req.body.name;
			jugadorx.name = req.query.name;
			//pasar como parametro
			jugadorx.status = 'Listo';
			jugadorx.cocina = req.query.cocina.split(',');
			console.log(jugadorx.cocina);
			jugadorx.save(function (err, userObj) {
				if (err) {
					console.log(err);
				} else {
					console.log('saved successfully:', userObj);
				}
			});
		} else {
			console.log('Player not found!');
		}
	})  
	  
    res.send('Update the book');
});

app.route('/atacar/:id')

  .put(function(req, res) {
	
	Jugador.findOne({ id: req.params.id }, function (err, jugadorx) {
		if (err) {
			console.log(err);
		} else if (jugadorx) {
			console.log('ATACAR');
			jugadorx.cocina = req.query.cocina.split(',');
			jugadorx.save(function (err, userObj) {
				if (err) {
					console.log(err);
				} else {
					console.log('saved successfully:', userObj);
				}
			});
		} else {
			console.log('Player not found!');
		}
	})
	
	res.send('Update the book');
	
	//console.log(jugador);
	//res.status(200).send(jugador);
  });
