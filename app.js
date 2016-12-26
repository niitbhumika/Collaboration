var app= angular.module("myApp", ["ngRoute"]);

app.config(function($routeprovider) {
	$routeProvider
	
	.when('/',{
		templateUrl : 'View/home.html',
	     controller: 'HomeController'
	})
	
	.when('/blog',{
		templateUrl : '/View/blog.html',
		  controller:'BlogController'
	})
	
	.when('/friend',{
		templateUrl : 'View/friend.html',
			controller:'FriendController'
	})
	
	.when('/job',{
		templateUrl : 'View/job.html',
			controller:'JobController'
	})
	
	.otherwise({redirectTo: '/'});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

