angular.module('picaApp', [])
  .controller('playerController', function($scope, $http){
    
	$scope.familia = ['abuelo', 'abuela'];  
	$scope.cocina = [];
	$scope.mostrar = true;
	
	$scope.familiaEnemigo = ['abuelo', 'abuela'];
	$scope.cocinaEnemigo = [];
	
	$scope.agregar = function (lista) {
		lista.push($scope.familia[0]);
		$scope.familia.splice(0,1);
	}	
	
	$scope.atacar = function (lista,numero) {
		
		$http({
			method: 'GET',
			url: '/jugador/'+numero
		}).then(function successCallback(response) {
			console.log(response.data);
			$scope.jugador2 = response.data;
			console.log(lista[0]);
			console.log($scope.jugador2.cocina[0]);
			if(lista[0] == $scope.jugador2.cocina[0]){
				console.log('Esta');
				lista.splice(0,1);
				$scope.jugador2.cocina.splice(0,1);
				$http.put('/atacar/'+numero+'?cocina='+$scope.jugador2.cocina)
				.success(function(response) {
					console.log(response);
				});
			}	
			console.log($scope.jugador2);
		}, function errorCallback(response) {
			console.log(response);
		});
		
		//buscar enemigo en mongo
		//ver si se ataco
	}	
	
	
	$scope.confirmar = function (jnro) {
		$scope.mostrar = false;
		
		//var data = $.param({
        //        name: $scope.nombre
        //});
		
		//Agregar crear objeto en mongo
		$http.put('/jugador/'+jnro+'?'+'name='+$scope.nombre+'&cocina='+$scope.cocina)
		.success(function(response) {
			console.log(response);
		});
	}	
	
	$scope.agregarEnemigo = function (lista) {
		lista.push($scope.familiaEnemigo[0]);
		$scope.familiaEnemigo.splice(0,1);
	}	
	
  });