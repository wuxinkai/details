define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main.husky', angularAMD.route({
                url: '/husky',
                templateUrl: 'views/husky.html',
                controllerUrl: 'scripts/controllers/husky'
            }))
          .state('main.kendo',angularAMD.route({  //manin地下的kendo.html
              url: '/kendo',  //url地址名字
              templateUrl: 'views/kendo.html', //模板
              controllerUrl: 'scripts/controllers/kendoCtrl' //控制器位置
          }))
          .state('main.notification', angularAMD.route({
              url: '/notification',
              templateUrl: 'views/notification.html',
              controllerUrl: 'scripts/controllers/notificationCtrl'
          }))
          .state('main.uibootstrap', angularAMD.route({
              url: '/uibootstrap',
              templateUrl: 'views/uibootstrap.html',
              controllerUrl: 'scripts/controllers/uibootstrapCtrl'
          }))
          .state('main.confirm', angularAMD.route({
              url: '/confirm',
              templateUrl: 'views/confirm.html',
              controllerUrl: 'scripts/controllers/confirmCtrl'
          }))
          .state('main.state', angularAMD.route({
              url: '/state',
              templateUrl: 'views/state.html',
              controllerUrl: 'scripts/controllers/stateCtrl'
          })).state('main.kendoGrid', angularAMD.route({    //树形图表
                url: '/kendoGrid',
                templateUrl: 'views/kendoGrid.html',
                controllerUrl: 'scripts/controllers/kendoGridCtrl'

            }))
            .state('main.echartsDemoOne', angularAMD.route({
              url: '/echartsDemoOne',
              templateUrl: 'views/eCharts/echartsDemoOne.html',
              controllerUrl: 'scripts/controllers/eCharts/echartsDemoOneCtrl'
          })).state('main.echartsDemoMulti', angularAMD.route({
              url: '/echartsDemoMulti',
              templateUrl: 'views/eCharts/echartsDemoMulti.html',
              controllerUrl: 'scripts/controllers/eCharts/echartsDemoMultiCtrl'
          })).state('main.echartsDemoConnect', angularAMD.route({
              url: '/echartsDemoConnect',
              templateUrl: 'views/eCharts/echartsDemoConnect.html',
              controllerUrl: 'scripts/controllers/eCharts/echartsDemoConnectCtrl'

          }))
    }]);
});