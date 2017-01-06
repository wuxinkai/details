define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main.husky', angularAMD.route({
                url: '/husky',
                templateUrl: 'views/husky.html',
                controllerUrl: 'scripts/controllers/husky'
            }))
            .state('main.kendoGrid', angularAMD.route({    //树形图表
                url: '/kendoGrid',
                templateUrl: 'views/kendoGrid.html',
                controllerUrl: 'scripts/controllers/kendoGridCtrl'
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
          .state('main.less', angularAMD.route({
              url: '/less',
              templateUrl: 'views/less.html',
              controllerUrl: 'scripts/controllers/lessCtrl'
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
          }))
            .state('main.parameter', angularAMD.route({  //配置路由传递参数
                url: '/parameter',
                templateUrl: 'views/parameter.html',
                controllerUrl: 'scripts/controllers/parameterCtrl'
            }))
            .state('main.parameter1', angularAMD.route({  //路由子页面
                //第一种方法
                params:{messageId:null},//params是传参方法 ，
                url: '/parameter1',  //参数必须先在这边声明templateUrl: requirejs.toUrl(’…/…/user/user_list.html’),

                //第二种方法 利用 ？后面传递参数
                //url: '/parameter1?type&role',  //参数必须先在这边声明templateUrl: requirejs.toUrl(’…/…/user/user_list.html’),
                templateUrl: 'views/parameter/parameter1.html',
                controllerUrl: 'scripts/controllers/parameter/parameterCtrl1',
                // 第三种办法混合
                //上两种办法混合应用
                // 第四种 a标签的href传递参数
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
          })).state('main.echartsMap', angularAMD.route({
            url: '/echartsMap',
            templateUrl: 'views/eCharts/echartsMap.html',
            controllerUrl: 'scripts/controllers/eCharts/echartsMapCtrl'
        }));

        $urlRouterProvider.otherwise('index.html#/main');

    }]);
});