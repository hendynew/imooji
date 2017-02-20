var app = angular.module('imoojiApp',[]);

app.controller('topImooji', function($scope, $http){
	var req = {
		method: 'GET',
		url: 'http://127.0.0.1:3000/api/data/m_imooji',
		headers: {			
			'Content-Type': 'application/json'
		}
	};
	$http(req).success(function(hasil){
		$scope.product = angular.fromJson(hasil);
		//alert(hasil);
	});
});