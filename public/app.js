var app = angular.module('sample', ['ngRoute', 'ngResource', 'ui.router']);
/* routing */
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'views/contatcs.html'
        })

});
