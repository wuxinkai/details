//

//RequireJS的基本思想是，通过define方法，将代码定义为模块； 通过require方法，实现代码的模块加载。

//(1)独立模块的应用
//define(function () {
//    return {
//        eat: function() {},
//        walk: function() {},
//    };
//});

//（2）独立模块的应用    这个函数的第一个参数m1对应module1模块，第二个参数m2对应module2模块。 这个函数必须返回一个对象，供其他模块调用。
//define(['module1', 'module2'], function(m1, m2) {
//
//    return {
//        method: function() {  //该对象的method方法就是外部调用的接口，menthod方法内部调用了m1模块的methodA方法和m2模块的methodB方法。
//            m1.methodA();
//            m2.methodB();
//        }
//    };
//
//});




//define方法的第一个参数是一个数组，它的成员是当前模块所依赖的模块。只有先加载这两个模块，新模块才能正常运行
//当前目录下的bootstrap.js文件和scripts/controllers/mainState.js文件，

//define方法的第二个参数是一个函数function，当前面数组的所有成员加载成功后，它将被调用
define(['bootstrap','scripts/controllers/mainState'], function () {
    'use strict';
    return ['$scope', function ($scope) {
        //页面加载完成后修复页面布局
        $scope.$on('$viewContentLoaded',
        function () {
            require(['lteApp'],   //方法用于调用模块 lteApp模块加载后执行一个回调函数 ，该回调函数就用来完成具体的任务。
            function (lteApp, fixUI) {
                jQuery.AdminLTE.layout.activate();
            });
        });
    }]
})

//如果依赖的模块很多，参数与模块一一对应的写法非常麻烦。
//define(
//    [       'dep1', 'dep2', 'dep3', 'dep4', 'dep5', 'dep6', 'dep7', 'dep8'],  //模块
//    function(dep1,   dep2,   dep3,   dep4,   dep5,   dep6,   dep7,   dep8){  //参数
//        ...
//    }
//);



//二、require方法：调用模块
//require方法用于调用模块。它的参数与define方法类似。


