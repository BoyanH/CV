'use strict';

musicApp.controller('LoginController',
    function LoginController($rootScope, $scope, $location, $anchorScroll, $templateCache, $routeParams, userData, $timeout, focus) {


    	var url = "/success/Login"

        focus('focusAuthenticationName');

    	$scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }

        $scope.login = function(user, loginForm) {

        	if (loginForm.$valid) {

            	user.keyword = CryptoJS.SHA1(user.keyword).toString(CryptoJS.enc.Base64);
                userData.getUser(user.authenticationName)
                	.then(function(data) {
                		var registeredUserPass = data.keyword;
                		if(user.keyword === registeredUserPass) {
		                	
                            cookies.create("loginCookie", data.userName);
                            $scope.user.keyword = " ";

                            if(cookies.read("loginCookie")) {


                                $rootScope.loggedMessage = "Logged in as: " + cookies.read("loginCookie");
                                $rootScope.userName = cookies.read("loginCookie");
                                data.keyword = "";
                                $rootScope.user = data;
                            }
		                	$templateCache.removeAll();
			                $location.path(url);
		                }
		                	else{
		                		$scope.error = "WRONG AUTHENTICATION NAME OR PASSWORD!";
		                		$scope.user.keyword = "";
		                	}

                	}, function(err) {

                        $scope.error = "User does not exist!";
                        $scope.user.keyword = "";
                    });
                
            }
        	else {

        		$scope.error = "PLEASE ENTER YOU E-MAIL AND PASSWORD!";
        	}

        }

    }
);