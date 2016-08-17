define(['css!bower_components/angular-ui-notification/angular-ui-notification.min.css', 'ngload!ui-notification'], function () {
    'use strict';
    return ['$scope', '$location', 'Notification', function ($scope, $location, Notification) {
        $scope.user = {};

        $scope.user.userName = "admin";
        $scope.user.password = "pa55w0rd";

        //传统登陆
        $scope.login = function () {
            if ($scope.user.userName == "admin" && $scope.user.password == "pa55w0rd") {
                $location.path('/main');
            }
            else {
                Notification.error({ message: "请输入正确的用户名和密码!", delay: 5000 });
            }
        }
    }]
})