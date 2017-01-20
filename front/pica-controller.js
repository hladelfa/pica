angular.module('picaApp', [])
  .controller('picaController', function($scope, $http, $window){
	  
	$scope.jugador1 = {
			status: 'Libre'
	};
	  
	$scope.getPlayer = function () {
		$http({
			method: 'GET',
			url: '/jugador/1'
		}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			console.log(response.data);
			$scope.jugador1 = response.data;
			console.log($scope.jugador1);
		}, function errorCallback(response) {
			console.log(response);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			//$scope.jugador1 = 'ERROR';
		});
	}	

	$scope.getPlayer();
	
	$scope.getStatus = function () {
		if($scope.jugador1.status != 'Libre') {
			return true;
		}
		return false;
	}
	
	$scope.crearJugador = function () {
		console.log($scope.jugador1);
		$scope.jugador1.status = "Creando";
		//agregar en mongo el usuario con estado creando
		console.log($scope.jugador1);
		$window.open('player.html');
	}
	
  });