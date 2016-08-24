/******************************************************************

* Copyright (C): 北京泰合佳通信息技术有限公司广东分公司

* 创建人: 林俊杰

* 创建时间: 2015年5月21日

******************************************************************/

define(['scripts/services/httpService',
    'scripts/requireHelper/requireKendo',
    'scripts/requireHelper/requireNotification',
    'scripts/requireHelper/requireUiBootstrap',
    'scripts/requireHelper/requireConfirm', 'scripts/requireHelper/angular-sanitize.min'], function () {
        return ['$scope', '$timeout', '$location', 'httpService', '$confirm', 'Notification', '$window', '$state', '$sce',function ($scope, $timeout, $location, httpService, $confirm, Notification, $window, $state, $sce) {
            $(function () {
                $("ul.dropdown-menu").on("click", "[data-stopPropagation]", function (e) {
                    e.stopPropagation();
                });
            });

    //页面加载完成后修复页面布局
            $scope.$on('$viewContentLoaded', function () {
                require(['lteApp'], function (lteApp) {
                    jQuery.AdminLTE.layout.activate();
                });
            });
    //页面跳转刷新
            var path = window.location.hash;
            var pathAry = path.split("/");
            var last = pathAry[pathAry.length - 1];
            $scope.curmenuname = "首页";
            if (document.cookie != "") {
                $scope.curmenuname = getCookie("menuname");
                var ary = getCookie("menuUrl").split(".");
            }
    //点击后的显示异常
            $scope.myVar =false;
            $scope.toggle =function(){
                $scope.myVar = !$scope.myVar;
            };
   // 分页
            $scope.resolveListLengh=0;
            $scope.perItems = 4;    //页码显示的数量
            $scope.totalItems = 0;//总数据量
            $scope.currentPage = 1;//当前页面
            $scope.numPages = 1;//页码
            $scope.maxSize = 5;//页码最多显示个数
            function GetData( name, page1,pagesize1 ) {
                httpService.post("TescommPortal", "MenuInfoService", "GetIndexPageInfo", {
                    menuname:name ,
                    page:page1 , pagesize: pagesize1
                }).then(function (data){
                    $scope.firstPageData = data.Items;
                    $scope.totalItems = data.TotalCount;
                    for(var i=0; i<data.Items.length;i++){
                        var item =data.Items[i];
                        if(item.name==$scope.curmenuname&&item.type=="简介"){
                            $scope.contentText = $sce.trustAsHtml(item.content);
                            $scope.titleimg =item.titleimg
                        }
                    }
                    $.each($scope.firstPageData, function (i,o) {
                        o.content = $sce.trustAsHtml(o.content);
                    });
                }, function (e) {
                    console.log("error:" + e)
                });
            }
            httpService.post("TescommPortal", "MenuInfoService", "GetIndexPageInfo", {
                    menuname:"解决方案" ,
                    page:1 , pagesize: 10
                }).then(function (data){
                    $scope.resolveList = data.Items;
                    $scope.resolveListLengh = data.Items.length;

                    $.each($scope.resolveList, function (i,o) {
                        o.content = $sce.trustAsHtml(o.content);
                    });
                }, function (e) {
                    console.log("error:" + e)
                });
    //左右点击
            var imgKey = 0;
            $scope.leftBtn =function(){
                if(imgKey>$scope.resolveListLengh-5){
                    imgKey=0
                }
                imgKey++;
                var move = imgKey * 265;
                $(".owlWpr").animate({'left':''-+move+'px'},500);
                console.log(imgKey)
            };
            $scope.rightBtn =function(){
                if(imgKey<=0){
                    imgKey=$scope.resolveListLengh-3
                }
                imgKey--;
                var move = imgKey * -265;
                $(".owlWpr").animate({'left':''+move+'px'},500);
            };
            httpService.post("TescommPortal", "MenuInfoService", "GetIndexPageInfo", {
                menuname:"案例" ,
                page:1 , pagesize: 1
            }).then(function (data){
                $scope.caseList = data.Items;
                $.each($scope.caseList, function (i,o) {
                    o.content = $sce.trustAsHtml(o.content);
                });
            }, function (e) {
                console.log("error:" + e)
            });
            httpService.post("TescommPortal", "MenuInfoService", "GetIndexPageInfo", {
                menuname:"产品" ,
                page:1 , pagesize: 3
            }).then(function (data){
                $scope.productList = data.Items;
                $.each($scope.productList, function (i,o) {
                    o.content = $sce.trustAsHtml(o.content);
                });
            }, function (e) {
                console.log("error:" + e)
            });
            GetData($scope.curmenuname, $scope.currentPage, $scope.curmenuname=="首页"?99999:$scope.perItems);
    //实现分页
            $scope.pageChanged = function (page, pageCount) {
                $scope.currentPage = page;
                GetData($scope.curmenuname,$scope.currentPage,$scope.perItems);
            };
    //首页导航循环
            httpService.post("TescommPortal", "MenuInfoService", "GetMenuInfoList", {
            }).then(function (data) {
                $scope.MenuItems = data;
                }), function (e) {
                console.log("error:" + e)
            };
    //其他信息
            $scope.configures="其他配置";
            httpService.post("TescommPortal", "MenuInfoService", "GetIndexPageInfo", {
                menuname: $scope.configures, page:1 , pagesize: 999999
            }).then(
                function (data) {
                    for(var i=0; i<data.Items.length;i++){
                        var cur =data.Items[i];
                       if(cur.title=="顶部LOG"){
                           $scope.logotop = cur.titleimg;
                       }else if(cur.title=="微信二维码"){
                           $scope.QRcode = cur.titleimg;
                        }else if(cur.title=="联系电话"){
                           $scope.telephone =cur.content
                       }else if(cur.title=="QQ号"){
                           $scope.qqHao =cur.content
                       }else if(cur.title=="微博"){
                           $scope.microBlog =cur.content
                       } else if (cur.title == "底部LOG") {
                           $scope.footLogo = cur.titleimg;
                       }else if(cur.title=="底部标注"){
                           $scope.footRegister =cur.content
                       }else if(cur.title=="轮播图3"){
                           $scope.banner3 =cur.titleimg
                       }else if(cur.title=="轮播图2"){
                           $scope.banner2 =cur.titleimg
                       }else if(cur.title=="轮播图1"){
                           $scope.banner1 =cur.titleimg
                       }
                    }
                },
                function (errorMessage) {
            });
    //点击菜单执行的方法
            $scope.btnClick = function(menuname,menuUrl){
                $scope.curmenuname=menuname;
                $scope.menuUrl = menuUrl;
                $scope.currentPage = 1;
                setCookie("menuname", menuname);
                setCookie("menuUrl", menuUrl);
                GetData($scope.curmenuname, $scope.currentPage, $scope.curmenuname=="首页"?99999:$scope.perItems);
            }
    //切换界面
            $scope.changeView = function (strUrl) {
                alert("sadasdads");
                var urltmp = "";
                var array = strUrl.split('/');
                for (var i = 0; i < array.length; i++) {
                    if (i > 0) {
                        if (urltmp == "")
                            urltmp = array[i];
                        else
                            urltmp = urltmp + "." + array[i];
                    }
                }
                $state.go(urltmp);
            }
        //写cookies
            function setCookie(name, value) {
                var Days = 30;
                var exp = new Date();
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
            }
        //读取cookies
            function getCookie(name) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg))
                    return unescape(arr[2]);
                else
                    return null;
            }

        }]
    });