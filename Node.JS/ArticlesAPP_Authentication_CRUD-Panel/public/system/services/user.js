'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.system').factory('Users', ['$resource', function($resource) {
    return $resource('users/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);