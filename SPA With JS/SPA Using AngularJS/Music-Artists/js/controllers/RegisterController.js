'use strict';

musicApp.controller('RegisterController',
    function RegisterController($scope, $location, $anchorScroll, $templateCache, $routeParams, userData, $timeout) {

    	var url = "/success/Registration";

    	$scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }

        $scope.saveUser = function(user, registerForm) {

            if(registerForm.$valid){

            	user.keyword = CryptoJS.SHA1(user.keyword).toString(CryptoJS.enc.Base64);
                userData.saveUser(user);
                $templateCache.removeAll();
                $location.path(url);
            }
            	else {
            		alert("Form is invalid!");
            	}
        }

        $scope.checkForUserName = function(userName) {

        	if(userData.checkUserName(userName)) {

        		$scope.message = "Username is available! :)";
				console.log("lost focus");
        	}
        		else {
        			$scope.message = "Username is taken! :/";
        			console.log("lost focus");
        		}
        }

    }
);