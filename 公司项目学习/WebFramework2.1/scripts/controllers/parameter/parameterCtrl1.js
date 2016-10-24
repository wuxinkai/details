define(['ngload!ui.bootstrap'], function () {
    'use strict';
    return ['$scope','$location', function ($scope,$location) {


        console.log($location.absUrl()) //http://localhost:63342/WebFramework2.1/index.html#/main/parameter
        console.log($location.host()) //localhost
        console.log($location.port()) //端口号

        console.log($location.protocol()) //http  协议
        console.log($location.url()) //  /main/parameter 路径
        console.log($location.search().type , $location.search().role) // 参数传递 type和role都是 传递过海的
        console.log($location.search()['type']) // 参数传递的另一种方法

    }]
});
