define(['ngload!ui.bootstrap'], function () {
    'use strict';
    return ['$scope', function ($scope) {
        //当前时间,用于设置"完成时间"必须大于当前时间
        $scope.currentDate = new Date();
        //日期控件
        $scope.stOpen = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.stOpened = true;
        };
    }]
});