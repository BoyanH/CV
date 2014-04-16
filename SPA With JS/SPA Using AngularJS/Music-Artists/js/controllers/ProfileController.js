'use strict';

musicApp.controller('ProfileController',
    function ProfileController($scope, $location, $anchorScroll, $templateCache, $routeParams, userData, $timeout) {


    	var successUrl = "/success/Editting",
            url;

    	$scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }

        if ($routeParams.userName) {
            url ='/profile/' + $routeParams.userName;
            
            if(cookies.read("loginCookie") == $routeParams.userName) { //IMPORTANT AUTHENTICATION

                $scope.user = userData.getUserForm($routeParams.userName);
            }
                else {
                    $scope.error = "User is not logged in!";
                }

        }

        $scope.saveUser = function(user, profileForm) {

            if (profileForm.$valid) {

                if(cookies.read("loginCookie") == $routeParams.userName) { //IMPORTANT AUTHENTICATION
                    if(user.newpassword) {

                        user.oldpassword = CryptoJS.SHA1(user.oldpassword).toString(CryptoJS.enc.Base64);

                        userData.getUser(user.userName)
                            .then(function(data) {

                                var registeredUserPass = data.keyword;
                                if(user.oldpassword === registeredUserPass) {

                                    user.keyword = CryptoJS.SHA1(user.newpassword).toString(CryptoJS.enc.Base64);
                                    delete(user.oldpassword);
                                    delete(user.newpassword);

                                    userData.editUser(user);
                                    $templateCache.removeAll();
                                    $location.path(successUrl);
                                }
                                    else {
                                    
                                        $scope.error = "Passwords Not Matching!";
                                        user.oldpassword = "";
                                        user.newpassword = "";
                                    }
                            });

                    }
                        else {

                            user.keyword = CryptoJS.SHA1(user.oldpassword).toString(CryptoJS.enc.Base64);

                            userData.editUser(user);
                            $templateCache.removeAll();
                            $location.path(successUrl);
                        }

                }
                    else {
                        $scope.error = "User is not logged in!";
                    }
            }
            	
            	else {
            		alert("Form is invalid!");
            	}
        }

	}
);