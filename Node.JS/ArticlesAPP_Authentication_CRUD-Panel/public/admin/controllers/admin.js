'use strict';

angular.module('mean.admin').controller('UsersController', ['$scope', '$stateParams', '$location', 'Global', 'Users',
    function ($scope, $stateParams, $location, Global, Users) {
    $scope.global = Global;

$scope.create = function() {
        var user = new Users({
            title: this.title,
            content: this.content
        });
        user.$save(function(response) {
            $location.path('admin/users/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(user) {
        if (user) {
            user.$remove();

            for (var i in $scope.users) {
                if ($scope.users[i] === user) {
                    $scope.users.splice(i, 1);
                }
            }
        }
        else {
            $scope.user.$remove();
            $location.path('admin/users');
        }
    };

    $scope.find = function() {
        Users.query(function(users) {
            $scope.users = users;
        });
    };

    $scope.findOne = function() {
        Users.get({
            userId: $stateParams.userId
        }, function(user) {
            $scope.user = user;

            if($scope.user.roles.indexOf('admin') > -1) {
                $scope.admin = true;
            }
        });
    };

    $scope.update = function() {

        if($scope.user.roles.indexOf('admin') > -1) {
            console.log('already an admin');
        }
            else {
                if($scope.admin) {
                    $scope.user.roles.push('admin');
                }
            }

        if(!$scope.admin && $scope.user.roles.indexOf('admin') > -1) {

            $scope.user.roles.splice($scope.user.roles.indexOf('admin'), 1);
        }

        var user = $scope.user;

        user.$update(function() {
            $location.path('/#!/user/' + user._id);
        });
    };


}]);