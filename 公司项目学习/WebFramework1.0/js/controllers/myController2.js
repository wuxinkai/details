define(['./module'], function (controllers) {
    controllers.controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.context = "这是第二个页面";
    }]);
});
