'use strict';

musicApp.factory('userData', function($resource) {

    var resource = $resource('/data/user/:userName', { userName: '@userName' });

    return {
        getUser: function(authenticationName) {

            if(!(_.str.contains(authenticationName, "@"))) {

                return resource.get({userName: authenticationName}).$promise;
            }
                else if(_.str.contains(authenticationName, "@")) {

                    return resource.query().$promise.then(function (data) {
                        var emailsArray = [],
                            userNamesArray = [];

                        _.map(data, function(user){ emailsArray.push(user.email); });
                        _.map(data, function(user){ userNamesArray.push(user.userName); });

                        if(_.indexOf(emailsArray, authenticationName) !== -1) {

                            var indexOfUser = _.indexOf(emailsArray, authenticationName),
                                user = userNamesArray[indexOfUser];

                            return resource.get({userName: user}).$promise;
                        
                        }

                    });
                 
                }
        },
        getUserForm: function(userName) {
            return resource.get({userName: userName});
        },
        saveUser: function(user) {
                resource.query().$promise.then(function(data) {
                    console.log("buuu ya");
                    var userNamesArray = [],
                        emailsArray = [];

                    _.map(data, function(user){ userNamesArray.push(user.userName.toLowerCase()); });
                    _.map(data, function(user){emailsArray.push(user.email.toLowerCase()); });

                    if(_.contains(userNamesArray, user.userName.toLowerCase())) {

                        alert("User already exists!");
                    }
                        else if(_.contains(emailsArray, user.email.toLowerCase())) {
                            alert("Email is already taken!");
                        }
                            else {
                                resource.save(user);
                            }
                });
        },
        editUser: function(user) {
            resource.save(user);
        }

    }

})