define(['./module'], function (controllers) {
    controllers.controller('MyCtrl1', ["$scope", function ($scope) {
        $scope.context = "这是第一个页面";
    }]);
});
