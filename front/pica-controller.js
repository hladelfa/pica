angular.module('picaApp', [])
  .controller('picaController', function($scope, $http, $window){
	  
	$scope.jugador1 = {
			status: 'Libre'
	};
	
	$scope.jugador2 = {
			status: 'Libre'
	};
	  
	$scope.getPlayer1 = function () {
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
	
	$scope.getPlayer2 = function () {
		$http({
			method: 'GET',
			url: '/jugador/2'
		}).then(function successCallback(response) {
			console.log(response.data);
			$scope.jugador2 = response.data;
			console.log($scope.jugador2);
		}, function errorCallback(response) {
			console.log(response);
		});
	}	

	$scope.getPlayer1();
	$scope.getPlayer2();
	
	$scope.getStatus1 = function () {
		if($scope.jugador1.status != 'Libre') {
			return true;
		}
		return false;
	}
	
	$scope.crearJugador1 = function () {
		$scope.jugador1.status = "Creando";
		
		$http({
			method: 'POST',
			url: '/jugador/1'
		}).then(function successCallback(response) {
			//agregar en mongo el usuario con estado creando
			console.log($scope.jugador1);
			$window.open('player1.html');
		}, function errorCallback(response) {
			console.log(response);
		});	
	}
	
	$scope.getStatus2 = function () {
		if($scope.jugador2.status != 'Libre') {
			return true;
		}
		return false;
	}
	
	$scope.crearJugador2 = function () {
		$scope.jugador2.status = "Creando";
		
		$http({
			method: 'POST',
			url: '/jugador/2'
		}).then(function successCallback(response) {
			//agregar en mongo el usuario con estado creando
			console.log($scope.jugador2);
			$window.open('player2.html');
		}, function errorCallback(response) {
			console.log(response);
		});	
	}
	
  });