define(['css!bower_components/angular-ui-notification/angular-ui-notification.min.css', 'ngload!ui-notification'], function () {
    'use strict';
    return ['$scope', 'Notification', function ($scope, Notification) {
        $scope.showNotification = function () {
            Notification.success({
                message: "调用Notification成功!",
                delay: 5000
            });
        }
    }]
});