'use strict';

angular.module('mean.system').controller('UserController', ['$scope', 'Global', 'Users', 'Articles', '$stateParams',
	function ($scope, Global, Users, Articles, $stateParams) {
    $scope.global = Global;

    $scope.show = false;
    $scope.button = 'show';
    $scope.more = '...';

    $scope.findOne = function() {

        Users.get({
            userId: $stateParams.userId
        }, function(user) {
            $scope.user = user;
        });

        $scope.findArticles();
    };

    $scope.findArticles = function() {
        Articles.query(function(articles) {

        	$scope.articles = [];
        	for(var i = 0; i < articles.length; i++) {

        		if (articles[i].user._id === $scope.user._id) {

        			$scope.articles.push(articles[i]);
        		}
        	}
        });

    };

    $scope.toggleShow = function() {

    	if($scope.show) {
    		$scope.show = false;
    		$scope.button = 'show';
            $scope.more = '...';
    	}
        	else {
        		$scope.show = true;
        		$scope.button = 'hide';
                $scope.more = '';
        	}
    };


}]);