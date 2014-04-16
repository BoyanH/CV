'use strict';

musicApp.controller('SuccessController',
    function SuccessController($scope, $location, $anchorScroll, $templateCache, $routeParams, artistData, $timeout) {


    	var url = '/home';
    	
    	function redirect() {

    		$location.path(url);
    	}

    	$timeout(redirect, 3000);


    	$scope.object = $routeParams.object;


    }
);