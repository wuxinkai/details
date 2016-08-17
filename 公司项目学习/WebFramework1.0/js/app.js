define([
    'angular',
    'angular-route',
    'bootstrap',
    './controllers/index',
    './directives/index',
    './services/index'
], function (ng) {
    return ng.module('app', [
        'ngRoute',
        'app.controllers',
        'app.directives',
        'app.services'
    ]);
});