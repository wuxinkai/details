define(['ngload!ui.bootstrap'], function () {
    'use strict';
    return ['$scope','$location','$state', function ($scope,$location,$state) {  //$state 传递参数用的

        $scope.toProducer = function (producerId) {
            // 多参数传递的方法，不加ng-if ，$state.go的意思是跳转的哪个页面，后面是跳转要加的参数
            $state.go('main.parameter1', {messageId:producerId});
        };

    }]
});
// $state.go 方法
// （1）要在父页面设置跳到哪个子页面，
// (2)在路由设置    params:{messageId:null},
// （3）在子页面 添加 $stateParams ，    var messageId = $stateParams.messageId; 获取参数
// 注意 不要在html 加 ng-href=