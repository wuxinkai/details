define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('main.state.stateOne', angularAMD.route({
              url: '/stateOne',
              templateUrl: 'views/state/state.html',
              controllerUrl: 'scripts/controllers/state/stateOneCtrl'
          }))
          .state('main.state.stateTwo', angularAMD.route({
              url: '/stateTwo',
              templateUrl: 'views/state/state.html',
              controllerUrl: 'scripts/controllers/state/stateTwoCtrl'
          }))
          .state('main.state.stateThree', angularAMD.route({
              url: '/stateThree',
              templateUrl: 'views/state/state.html',
              controllerUrl: 'scripts/controllers/state/stateThreeCtrl'
          }))
        ;
    }]);
});