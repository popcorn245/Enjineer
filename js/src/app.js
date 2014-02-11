var $e = function(sel, ctx){
	if(!ctx){ctx = document;}
	if(sel == "document"){
		return angular.element(document);
	}else{
		return angular.element(ctx.querySelectorAll(sel));
	}
};

var	app = angular.module("app",["ngRoute","ui.bootstrap"])
		.controller('appCtrl', function($scope, $http){
			$scope.menu = function(){
				$sidebar = $e("#sidebar"); 
				if($sidebar.css("display") == 'none'){
					$sidebar.css("display","block");
				}else{
					$sidebar.css("display","none");
				}
			};
		})
		.controller('homeCtrl', function($scope, $http){
		
		})
		.controller('phpCtrl', function($scope, $http){
		
		})
		.controller('jsCtrl', function($scope, $http){

		})
		.controller('addCtrl', function($scope, $http){

		})
		.config(['$routeProvider',
	  		function($routeProvider) {
		    	$routeProvider
			    	.when('/home', {
				        templateUrl: 'html/home.html',
				        controller: 'homeCtrl'
				    })
				    .when('/add', {
				        templateUrl: 'html/add.html',
				        controller: 'Ctrl'
				    })
				    .when('/js', {
				        templateUrl: 'html/js.html',
				        controller: 'jsCtrl'
				    })
				    .when('/php', {
				        templateUrl: 'html/php.html',
				        controller: 'phpCtrl'
				    })
				    .otherwise({
				        redirectTo: '/home'
				    });
	  		}
		]);