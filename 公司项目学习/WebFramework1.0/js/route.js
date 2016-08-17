define(['./app'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'templets/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'templets/partial2.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.when('/view3', {
            templateUrl: 'templets/partial3.html',
            controller: 'MyCtrl3'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
