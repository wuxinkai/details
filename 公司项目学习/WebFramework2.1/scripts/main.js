/******************************************************************

* Copyright (C): ����̩�ϼ�ͨ��Ϣ�������޹�˾�㶫�ֹ�˾
* ������: �ֿ���
* ����ʱ��: 2015��11��23��
* �汾: WebFramework v2.0
* ����: RequireJs�����ļ�

******************************************************************/
//require��������Ҳ��һ������������һ��config��������������require.js���в�����config��������һ��������Ϊ������
require.config({
    waitSeconds: 0,

    packages: [
       {
           name: 'echarts',
           location: 'bower_components/eCharts/dist',
           main: 'bower_components',
           lib: '.'
       }
    ],

    baseUrl: './',  //baseUrl����ָ������ģ��λ�õĻ�׼Ŀ¼��������ģ���·����������ĸ�Ŀ¼�ġ� ������ͨ����require.js����ʱ��data-main����ָ����

//paths����ָ������ģ���λ�á����λ�ÿ�����ͬһ���������ϵ����λ�ã�
// Ҳ�������ⲿ��ַ�� ����Ϊÿ��ģ�鶨����λ�ã������һ��λ�ü���ʧ�ܣ�
// ����صڶ���λ�ã������ʾ���ͱ�ʾ���CDN����ʧ�ܣ�����ط������ϵı��ýű���
// ��Ҫע����ǣ�ָ�������ļ�·��ʱ������ʡ���ļ�����js��׺����
    paths: {
        //��������ݾ���  ��������  xxxCtrl.js �����define(['ngload!ui.bootstrap','angular-confirm'], function () {
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angular-ui-router': 'bower_components/angular-ui-router/angular-ui-router.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',

        'ngload': 'bower_components/angularAMD/ngload.min',
        'jQuery': 'bower_components/jQuery/jQuery-2.1.3.min',
        'bootstrap': 'bower_components/bootstrap/js/bootstrap.min',
        'ui.bootstrap': 'bower_components/ui-bootstrap-tpls/ui-bootstrap-tpls-0.13.2.min',
        //kendo����
      //  'kendo-angularAll': 'bower_components/kendo/kendo.all.min',
        'kendo-angular': 'bower_components/kendo/kendo.custom.min',
        'kendo-czh': "bower_components/kendo/cultures/kendo.culture.zh-CN.min",
        'kendo-mzh': "bower_components/kendo/messages/kendo.messages.zh-CN.min",
        'ui-notification': 'bower_components/angular-ui-notification/angular-ui-notification.min',
        'angular-confirm': 'bower_components/angular-confirm/angular-confirm',
        'lteApp': 'bower_components/adminLTE/js/app.min',
    },

    map: {
        '*': {
            'css': 'bower_components/require-css/css.min'
        }
    },
//��Щ�ⲻ��AMD���ݵģ���ʱ����Ҫָ��shim���Ե�ֵ��shim�������ɡ���Ƭ������������require.js���ط�AMD�淶�Ŀ⡣
    shim: {
        'angular-route': {
            deps: ['angular']
        },
        'angularAMD': {
            deps: ['angular']
        },
        'ngload': {
            deps: ['angularAMD']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jQuery']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'angular': {
            deps: ['jQuery']
        },
        //'kendo-angularAll': {
        //    deps: ['jQuery', 'angular']
        //},
        'kendo-angular': {
            deps: ['jQuery', 'angular']
        },
        'kendo-czh': {
            deps: ['kendo-angular']
        },
        'kendo-mzh': {
            deps: ['kendo-angular']
        },
        'ui-notification': {
            deps: ['angular']
        },
        'lteApp': {
            deps: ['jQuery']
        },
    },

    deps: ['scripts/app']
});
