'use strict';

musicApp.controller('PageController',
    function PageController($rootScope, $scope, author, copyright, userData) {
        $scope.author = author;
        $scope.copyright = copyright;

        $scope.showLoggedUser = function() {

        	this.loggedUser = cookies.read("loginCookie");
        	return this.loggedUser
        }


        $scope.logout = function() {

            cookies.remove("loginCookie")
            $rootScope.loggedMessage = "";
            $rootScope.userName = "";
            $rootScope.user = "";
            $scope.user = "";
        }

        if(cookies.read("loginCookie")) {

	        $scope.loggedMessage = "Logged in as: " + cookies.read("loginCookie");
	        $rootScope.userName = cookies.read("loginCookie");

            userData.getUserForm(cookies.read("loginCookie")).$promise
                .then(function (data) {

                    $rootScope.user = data;

                }, function (err) {

                    console.error(err);
                });
	    }

	}
);