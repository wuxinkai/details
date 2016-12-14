angular.module('docsApp', []).controller('docsCtrl', function($scope, $http) {


//下拉列表
        var htmlobj0=$.ajax({url:"data.json",async:false});
        //如果不生效 参考底下内容
        $scope.Interfaces =htmlobj0.responseJSON;
        $scope.currentApp="1"; //显示第一个
     //调用子ajax 让页面信息打开就展示
//请求回来的就是菜单没别的

//选项内容
    $scope.appChange = function(){
        var htmlobj1=$.ajax({url:"data1.json",
            async:false,
            data: {type: $scope.currentApp}, //传递的参数

        }); //false是同步
        $scope.docsMenus=htmlobj1.responseJSON;  //左侧菜单列表和右侧内容
        $scope.appChange()
    };
    $scope.appChange(); //让页面加载的时候显示内容
//    请求回来的是 左侧子导航和右侧第一条内容

//点击左侧菜单右侧表格变化
    $scope.docsContent = function(item){
        var htmlobj2=$.ajax({url:"data2.json",
            async:false,
            type: 'Post',
            data: {
                aid: item.Id
            },});
        $scope.docsMenus=htmlobj2.responseJSON;  //左侧菜单列表和右侧内容
    };
//返回的是表格的信息和右侧内容

//传递参数没有解决


//data.json 里是下拉框所以的数据
//data1.json  是下拉框数据的  某一个子数据的里面数据
// data2.json 是子数据的子数据






















//下拉框
/*
 重点学习
     $scope.$apply 的应用方法
     ng-options 和 ng-repeat 应用场景的区别
     ng-click在option里不能用  所以用ng-change
     as 前面的obj.Code 是我们读取到的数据库的内容， ng-model的currentApp就是obj.Code的值
     页面加载直接调用ajax， 页面直接加载 页面会显示第一个内容
*/

/*
   $.ajax(window.app.AuthorizeHost + 'Open/OAuth/Auth_GetCommDictsByType', {
        type: 'Post',
        data: {
            type: 'ApiType'
        },
        success: function (data) {

            $scope.$apply(function(){  //页面加载进来 我们在外面获取不到内容  angular也不会改变值 所以我们用apply来改变
                $scope.Interfaces =data;
                $scope.currentApp="1"; //输入框默认是空的 我们要赋值
                $scope.appChange();   //页面加载就调用这个方法  页面的内容才会显示完整

            });
        }
        , error: function (xhr, status, error) {

        }, dataType: "json"
    });
//显示文档菜单
    $scope.appChange = function(){
        $.ajax(window.app.AuthorizeHost + 'Open/OAuth/Auth_GetApisByType', {
            type: 'Post',
            data: {
                type: $scope.currentApp
            },
            success: function (data) {

                $scope.$apply(function(){
                    $scope.docsMenus=data;   //这是第二次请求回来的内容
                    $scope.docsContent(data[0]);  //页面执行的时候让右 侧的数据第一条数据展示出来
                    console.log($scope.docsMenus)
                });
            }
            , error: function (xhr, status, error) {

            }, dataType: "json"
        });
    };
//点击子导航显示的内容
    $scope.docsContent = function(item){
    //<!--在ng-clik的时候传递对象是让整个对象都传过去-->
        $.ajax(window.app.AuthorizeHost + 'Open/OAuth/Auth_GetParamByAid', {
            type: 'Post', //请求方式
            data: {       //data传递的是参数
                aid: item.Id
            },
            success: function (data) {
                $scope.$apply(function(){
                    console.log(data);
                    console.log(item);
                    $scope.AllContent= data;  //第三次请求的所以内容 表格里的内容
                    $scope.allitem = item;  // 一共三次请求， 第二次请求的某一条内容，
                    console.log($scope.AllContent)
                });
            }
            , error: function (xhr, status, error) {

            }, dataType: "json"
        })
    }
*/
})
// 第一次是页面加载请求   第二次和第三次是 点击请求