define(['css!bower_components/Kendo/styles/kendo.common-material.min', 'css!bower_components/Kendo/styles/kendo.material.min', 'ngload!kendo-angular', 'kendo-czh', 'kendo-mzh'], function () {
    'use strict';
    return ['$scope', function ($scope) {

        kendo.culture("zh-CN");  //指定为中文
        $scope.mainGridOptions = {
            dataSource: {
                type: "odata",
                transport: {
                    read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                },
                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },
            sortable: true,
            pageable: true,
            dataBound: function () {
                this.expandRow(this.tbody.find("tr.k-master-row").first());
            },
            columns: [{
                field: "FirstName",
                title: "First Name",
                width: "120px"
            }, {
                field: "LastName",
                title: "Last Name",
                width: "120px"
            }, {
                field: "Country",
                width: "120px"
            }, {
                field: "City",
                width: "120px"
            }, {
                field: "Title"
            }]
        };

        $scope.detailGridOptions = function (dataItem) {
            return {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                    },
                    serverPaging: true,
                    serverSorting: true,
                    serverFiltering: true,
                    pageSize: 5,
                    filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
                },
                scrollable: false,
                sortable: true,
                pageable: true,
                columns: [
                { field: "OrderID", title: "ID", width: "56px" },
                { field: "ShipCountry", title: "Ship Country", width: "110px" },
                { field: "ShipAddress", title: "Ship Address" },
                { field: "ShipName", title: "Ship Name", width: "190px" }
                ]
            };
        };

//天
        var ds = new Date();   //本地日期的  开始时间
        ds.setDate(ds.getDate() + 1); //设置日期
        var de = new Date();
        de.setDate(de.getDate() - 3);
//小时
        var dmin = new Date();
         dmin.setDate(dmin.getDate()+3);
//kendo 日历
        var TimeDay = $("#TimeDay").kendoDatePicker({
            value:  new Date(2000, 10, 1), //当前显示的日期 ，开始时间
            //max: de,

//格式化数据
            //format: "yyyy",   //年
            //format: "yyyy-MM",  //月
            format: "yyyy-MM-dd",  //日

            start: "month",  //头部开始 显示的是  year month  decade年区间[2000-2009] century[十个区间]


            footer: kendo.template($("#footer-template").html()),
           // footer:false    //false 是隐藏底部

           // depth: "century",  //"month"：显示本月所有日期  "year"：显示本年所有月份   "decade"：显示这个区间的十个年头   "century"：显示本世纪的每个十年区间
            //change: endChangeDay

//设置最大日期，和最小日期 ds 和 de 在最上面
            //max:ds,
            //min:de
            //min: new Date(2016, 0, 1),
            //max: new Date(2020, 0, 1),
//事件
            change: function() {
                var value = this.value();//日历值变化时触发
                alert(value)
            },
            //底部按钮
            navigate: function() {
                var view = this.view();//日历导航切换时触发
                alert(view)
            }
        }).data("kendoDatePicker");

//通过ng-options控制显示样式
        $scope.names = [{ Name: "年", ID: 3 }, { Name: "月", ID: 2 }, { Name: "日", ID: 1 }, { Name: "时", ID: 0 }];
//默认显示哪一项
        $scope.datetype = 1;
//设置显示的是哪一个
        $scope.timeChanges = function () {
            if ($scope.datetype == 3) {

            }else if($scope.datetype == 2){

            }else if($scope.datetype == 1){

            }else if($scope.datetype == 0){

            }
        }
    }]
});