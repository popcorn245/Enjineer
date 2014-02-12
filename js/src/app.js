var $e = function(sel, ctx){
	if(!ctx){ctx = document;}
	if(sel == "document"){
		return angular.element(document);
	}else{
		return angular.element(ctx.querySelectorAll(sel));
	}
};

var	app = angular.module("app",["ngRoute","ui.bootstrap"])
		.controller('homeCtrl', function($scope, $http){
		})
		.config(['$routeProvider',
	  		function($routeProvider) {
		    	$routeProvider
			    	.when('/home', {
				        templateUrl: 'html/home.html',
				        controller: 'homeCtrl'
				    })
				    .otherwise({
				        redirectTo: '/home'
				    });
	  		}
		]);