/******************************************************************

* Copyright (C): 北京泰合佳通信息技术有限公司广东分公司
* 创建人: 林俊杰
* 创建时间: 2015年11月23日
* 版本: WebFramework v2.0
* 描述: RequireJs配置文件

******************************************************************/
//require方法本身也是一个对象，它带有一个config方法，用来配置require.js运行参数。config方法接受一个对象作为参数。
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

    baseUrl: './',  //baseUrl参数指定本地模块位置的基准目录，即本地模块的路径是相对于哪个目录的。 该属性通常由require.js加载时的data-main属性指定。

//paths参数指定各个模块的位置。这个位置可以是同一个服务器上的相对位置，
// 也可以是外部网址。 可以为每个模块定义多个位置，如果第一个位置加载失败，
// 则加载第二个位置，上面的示例就表示如果CDN加载失败，则加载服务器上的备用脚本。
// 需要注意的是，指定本地文件路径时，可以省略文件最后的js后缀名。
    paths: {
        //这里的内容就是  其他带有  xxxCtrl.js 里面的define(['ngload!ui.bootstrap','angular-confirm'], function () {
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angular-ui-router': 'bower_components/angular-ui-router/angular-ui-router.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',

        'ngload': 'bower_components/angularAMD/ngload.min',
        'jQuery': 'bower_components/jQuery/jQuery-2.1.3.min',
        'bootstrap': 'bower_components/bootstrap/js/bootstrap.min',
        'ui.bootstrap': 'bower_components/ui-bootstrap-tpls/ui-bootstrap-tpls-0.13.2.min',
        //kendo汉化
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
//有些库不是AMD兼容的，这时就需要指定shim属性的值。shim可以理解成“垫片”，用来帮助require.js加载非AMD规范的库。
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
