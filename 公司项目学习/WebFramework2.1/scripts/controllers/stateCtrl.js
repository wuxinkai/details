define(['scripts/controllers/state/stateState'], function () {
    'use strict';
    return ['$scope', '$location', function ($scope, $location) {
        $scope.showOne = function () {
            $location.path('/main/state/stateOne');
        };
        $scope.showTwo = function () {
            $location.path('/main/state/stateTwo');
        };
        $scope.showThree = function () {
            $location.path('/main/state/stateThree');
        };
    }]
})