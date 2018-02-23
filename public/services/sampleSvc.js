angular.module('sample').factory('name',
    function ($resource) {
        return $resource('sampleurl', {
            id: '@id'
        }, {
                update: {
                    method: 'PUT'
                },
                delete: {
                    method: 'DELETE'
                },
                create: {
                    method: 'POST'
                },
                get: {
                    method: 'GET', isArray: false
                }
            });
    });