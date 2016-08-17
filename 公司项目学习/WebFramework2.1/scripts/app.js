/******************************************************************

* Copyright (C): ����̩�ϼ�ͨ��Ϣ�������޹�˾�㶫�ֹ�˾
* ������: �ֿ���
* ����ʱ��: 2015��11��23��
* �汾: WebFramework v2.0
* ����: Angular·�����ü������ļ�

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
