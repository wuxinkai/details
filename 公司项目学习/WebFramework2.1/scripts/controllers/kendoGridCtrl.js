﻿define(['css!bower_components/Kendo/styles/kendo.common-material.min', 'css!bower_components/Kendo/styles/kendo.material.min', 'ngload!kendo-angular', 'kendo-czh', 'kendo-mzh'], function () {
    'use strict';
    return ['$scope', function ($scope) {
        kendo.culture("zh-CN");  //指定为中文
        //天粒度，开始时间初始值
        var ds = new Date();
        ds.setDate(ds.getDate() - 7);
        //天粒度，结束时间初始值
        var de = new Date();
        de.setDate(de.getDate() - 1);
        //天粒度，时间最小值
        var dmin = new Date();
        dmin.setDate(dmin.getDate() - 90);
        //小时粒度，开始时间初始值
        var dhs = new Date();
        dhs.setHours(dhs.getHours() - 8);

        //小时粒度，时间最小值
        var dhmin = new Date();
        dhmin.setHours(dhmin.getHours() - 72);
        //开始 年
        var startTimeYear = $("#startTimeYear").kendoDatePicker({
            value: ds,
            start: "decade",
            depth: "decade",
            format: "yyyy"
        }).data("kendoDatePicker");

        //开始 月
        var startTimeMonth = $("#startTimeMonth").kendoDatePicker({
            value: dhs,
            start: "year",
            depth: "year",
            format: "yyyy-MM"
        }).data("kendoDatePicker");
        //开始 日
        var startTimeDay = $("#startTimeDay").kendoDatePicker({
            value: ds,
            start: "month",
            depth: "month",
            format: "yyyy-MM-dd"
        }).data("kendoDatePicker");

        //开始 时
        //var startTimeHour = $("#startTimeHour").kendoDateTimePicker({
        //    value: dhs,
        //    max: new Date(),
        //    format: "yyyy-MM-dd HH:mm"
        //}).data("kendoDateTimePicker");


        //结束 年
        var endTimeYear = $("#endTimeYear").kendoDatePicker({
            value: de,
            format: "yyyy",
            start: "decade",
            depth: "decade",
        }).data("kendoDatePicker");
        //结束 月
        var endTimeMonth = $("#endTimeMonth").kendoDatePicker({
            value: de,
            max: de,
            format: "yyyy-MM",
            start: "year",
            // defines when the calendar should return date
            depth: "year",
        }).data("kendoDatePicker");
        //结束 日
        var endTimeDay = $("#endTimeDay").kendoDatePicker({
            value: de,
            max: de,
            format: "yyyy-MM-dd",
            start: "month",
            depth: "month",
        }).data("kendoDatePicker");

       // 结束  小时
       // var endTimeHour = $("#endTimeHour").kendoDateTimePicker({
       //     value: new Date(),
       //     max: new Date(),
       //     format: "yyyy-MM-dd HH:mm",
       // }).data("kendoDateTimePicker");


        $scope.names = [{ Name: "年", ID: 3 }, { Name: "月", ID: 2 }, { Name: "日", ID: 1 }, { Name: "时", ID: 0 }];
        $scope.isTimeType1 = false;
        $scope.isTimeType2 = true;
        $scope.isTimeType0 = false;
        $scope.isTimeType3 = false;
        //时间粒度改变
        $scope.timeChanges = function () {

            if ($scope.datetype == 3) {   //年
                $scope.isTimeType0 = true;
                $scope.isTimeType2 = false;
                $scope.isTimeType1 = false;
                $scope.isTimeType3 = false;
            } else if ($scope.datetype == 2) {  //月
                $scope.isTimeType1 = false;
                $scope.isTimeType2 = false;
                $scope.isTimeType0 = false;
                $scope.isTimeType3 = true;
            } else if ($scope.datetype == 1) {  //日
                $scope.isTimeType1 = false;
                $scope.isTimeType2 = true;
                $scope.isTimeType0 = false;
                $scope.isTimeType3 = false;
            } else if ($scope.datetype == 0) {  //时间
                $scope.isTimeType1 = true;
                $scope.isTimeType2 = false;
                $scope.isTimeType0 = false;
                $scope.isTimeType3 = false;
            }
        }

        $scope.timeSearch = function () {
            switch ($scope.datetype) {
                case 3:
                    $scope.dtbegin = $("#startTimeYear").val();
                    $scope.dtend = $("#endTimeYear").val();
                    break;
                case 2:
                    $scope.dtbegin = $("#startTimeMonth").val();
                    $scope.dtend = $("#endTimeMonth").val();
                    break;
                case 1:
                    $scope.dtbegin = $("#startTimeDay").val();
                    $scope.dtend = $("#endTimeDay").val();
                    break;
                case 0:
                    $scope.dtbegin = $("#startTimeHour").val();
                    $scope.dtend = $("#endTimeHour").val();
                    break;
            }
        }

        $scope.dtbegin = $("#startTimeDay").val();
        $scope.dtend = $("#endTimeDay").val();
        $scope.datetype = 1;

    }]
});