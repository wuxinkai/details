/******************************************************************

* Copyright (C): 北京泰合佳通信息技术有限公司广东分公司
* 创建人: 林俊杰
* 创建时间: 2015年11月23日
* 版本: WebFramework v2.0
* 描述: Angular路由配置及启动文件

******************************************************************/

define(['scripts/common'], function (angularAMD) {
  'use strict';
  var app = angular.module('webFrameworkSample', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', angularAMD.route({
          url: '/main',
        templateUrl: 'views/main.html',
        controllerUrl: 'scripts/controllers/mainCtrl'
      }))
      .state('login', angularAMD.route({
          url: '/login',
          templateUrl: 'views/login.html',
          controllerUrl: 'scripts/controllers/loginCtrl'
      }))
    ;

    $urlRouterProvider
      .otherwise('/login');

  }]);

  return angularAMD.bootstrap(app);
});
