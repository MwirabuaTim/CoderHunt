	angular.module('MyApp')
	.controller('Ctrl', function ($scope) {
		$scope.name = "Juliani";
		$scope.age = 20;
	})
	.controller('AnotherCtrl', function ($scope) {
		$scope.name = "Juliana Moi";
		$scope.age = 24;
		$scope.$watch('name', function(){
			console.log($scope.name);
		});
	});