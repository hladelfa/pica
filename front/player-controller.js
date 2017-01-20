angular.module('picaApp', [])
  .controller('playerController', function($scope){
    
	$scope.familia = ['abuelo', 'abuela'];  
	$scope.cocina = [];
	$scope.mostrar = true;
	
	$scope.familiaEnemigo = ['abuelo', 'abuela'];
	$scope.cocinaEnemigo = [];
	
	$scope.agregar = function (lista) {
		lista.push($scope.familia[0]);
		$scope.familia.splice(0,1);
	}	
	
	$scope.atacar = function (lista) {
		//buscar enemigo en mongo
		//ver si se ataco
	}
	
	$scope.confirmar = function () {
		$scope.mostrar = false;
		//Agregar crear objeto en mongo
	}	
	
	$scope.agregarEnemigo = function (lista) {
		lista.push($scope.familiaEnemigo[0]);
		$scope.familiaEnemigo.splice(0,1);
	}	
	
  });