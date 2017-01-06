

var submitObj = {};

/*
原理 id在控制 每个div的的样式
以对象的形式将内容提交到服务器

修改完成后
关闭页面 在打开页面 就是我们修改后的内容



*/

//主题颜色
$("#custom").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj = {}; //清空所有内容之后再写入
        submitObj["@tes-theme"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide(); //关闭按钮
    }
});
//面包导航
$("#breadcrumb").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-breadcrumb-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//头部导航
$("#headerNav").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-nav-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//下拉菜单
$("#dropdown").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-dropdown-hover"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//摸态框
$("#primary").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-modal-head-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//搜索框
$("#inputBor").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-form-border"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//列表组
$("#tesList").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-list-active-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//按钮
$("#tesBtn").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-btn-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//分页
$("#tesPaging").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-pagination-active-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//表格
$("#tesGrid").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-thead-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//  面板
$("#collapse").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-panel-head-bg"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});
//   表单
$("#tesForm").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-form-color"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});

//   切换按钮
$("#tesActive").colpick({
    layout: 'rgbhex',
    color: '000be3',
    onSubmit: function (hsb, hex, rgb, el) {
        submitObj["@tes-active"] = '#' + hex;
        less.modifyVars(submitObj);
        $(el).colpickHide();
    }
});

//写 一个方法将内容写进数据 库再堵回来 关机开机也就保存了
//$scope.generate = function () {
//    httpService.post('Manage', 'ThemeService', 'Save', {
//        theme: JSON.stringify(submitObj) //转化成json格式 存储到数据库
//    }).then(function (data) {
//            $scope.areaItems = data;
//            Notification.success({ message: "保存成功", delay: 5000 });
//        },
//        function (errorMessage) {
//            Notification.error({ message: errorMessage, delay: 5000 });
//        });
////页面加载的时候从数据库把内容度出来
//    $scope.gettheme = function () {
//        httpService.post('Manage', 'ThemeService', 'GetThemeByID', {
//        }).then(function (data) {
//                $scope.areaItems = data;
//                if (data.THEME != undefined) {
//                    submitObj = eval("(" + data.THEME + ")");
//                    less.modifyVars(submitObj);
//                }
//            },
//            function (errorMessage) {
//                Notification.error({ message: errorMessage, delay: 5000 });
//            });
//    };
//$scope.gettheme();



