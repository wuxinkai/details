define(['./module'], function (controllers) {
    controllers.controller('MyCtrl3', ['$scope', function ($scope) {
        $scope.context = "这是第三个页面";
    }]);
});
