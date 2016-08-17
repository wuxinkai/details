define([
    'require',
    'angular',
    './route',
    './app'
], function (require, ng) {
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
