define(['scripts/directives/ct-echarts','scripts/services/httpService', 'scripts/requireHelper/requireKendo', 'scripts/requireHelper/requireNotification', 'scripts/requireHelper/requireUiBootstrap', 'scripts/requireHelper/requireConfirm', 'jQuery', 'bower_components/echarts/ng-echarts'], function (ec) {
    'use strict'

    return ['$scope', '$location', "httpService", 'Notification', function ($scope, $location, httpService, Notification) {

        var ignores = ['台湾', '香港', '澳门', '南海诸岛'];
        var seriesdata = [{
            value: 0,
            itemStyle: {
                normal: { label: { show: true }, color: "#FECB3C" },
                emphasis: { label: { show: true } }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: { label: { show: true }, color: "#77C8FF" },
                emphasis: { label: { show: true } }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: { label: { show: true }, color: "#FE8D89" },
                emphasis: { label: { show: true } }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: { label: { show: true }, color: "#91E96E" },
                emphasis: { label: { show: true } }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: { label: { show: true }, color: "#C791F1" },
                emphasis: { label: { show: true } }
            }
        }];
        $scope.pieOptionbar = {
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [
                {
                    type: 'value',
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    data: ['金融', '航班', '酒店', '旅游', '地产']
                }
            ],
            series: [
                {
                    "name": "销量",
                    "type": "bar",
                    "data": seriesdata
                }

            ]
        }
        // 1.配置数据加载提示文本和动态效果
        var loadText = "'数据加载中...";
        var effects = "whirling";
        $scope.floatTabStatus = false;
        // 2.配置图表参数:样式,加载效果,事件
        $scope.pieConfig = {
            // 按需加载图表,根据需要可添加多个
            chartList: ['map'],
            //样式, theme没有将使用缺省样式
            theme: 'red',
            loadingOption: {
                text: loadText,
                effect: effects,
                textStyle: {
                    fontSize: 20
                },
            },
            // 数据装载状态, false未加载,true已加载完毕
            dataLoaded: true,
            // 绑定事件,允许同时绑定多个事件
            event: [{
                click: onClick,
                mouseout: function () {
                    $('#floatTab').hide();
                }
            }, {
                hover: function (a) {
                    if (ignores.indexOf(a.name) != -1) return;
                    var xAxisData = ['金融', '航班', '酒店', '旅游', '地产'];
                    //console.log(seriesdata);
                    var defaultData = [
                        {
                            value: 0,
                            itemStyle: {
                                normal: { label: { show: true }, color: "#FECB3C" },
                                emphasis: { label: { show: true } }
                            }
                        }, {
                            value: 0,
                            itemStyle: {
                                normal: { label: { show: true }, color: "#77C8FF" },
                                emphasis: { label: { show: true } }
                            }
                        }, {
                            value: 0,
                            itemStyle: {
                                normal: { label: { show: true }, color: "#FE8D89" },
                                emphasis: { label: { show: true } }
                            }
                        }, {
                            value: 0,
                            itemStyle: {
                                normal: { label: { show: true }, color: "#91E96E" },
                                emphasis: { label: { show: true } }
                            }
                        }, {
                            value: 0,
                            itemStyle: {
                                normal: { label: { show: true }, color: "#C791F1" },
                                emphasis: { label: { show: true } }
                            }
                        }
                    ];
                    if (a.seriesName.length>0) {
                        for (var o in a.data.valueMap) {
                            defaultData[o].value = a.data.valueMap[o]
                        }
                    }
                    $('#floatTab').show();
                    $scope.floatTabStatus = true;
                    $scope.screenY = a.event.offsetY + 20;
                    var screenX = a.event.offsetX + 50;
                    $('#floatTab').css("left", screenX + 'px');
                    $scope.$apply(function () {
                        $scope.pieOptionbar.xAxis[0].data = xAxisData;
                        $scope.pieOptionbar.series[0].data = defaultData;

                    });
                }
            }],
        };
        function getCookie(li) {
            var strCookie = document.cookie;
            //S alert(strCookie);
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (arr[0] == "li") return arr[1];
            }
            return "";
        }
        //var index = Number(getCookie("li"));
        // 3.绑定事件
        function onClick(param) {
            if (ignores.indexOf(param.name) != -1) {
                Notification.info({message:param.name+"没有数据，请更换省份重新尝试",delay: 5000});
                return;
            }
            $scope.$apply(function () {
                localStorage.provinceId = param.data.provinceId;
                localStorage.provinceName = param.name;
                localStorage.seriesName = param.seriesName;
                $scope.$emit("to-parent", param);
                //$state.go("main.provinceData");

                if (Number(getCookie("li")) == 0) {
                    $state.go("main.provinceData.financial");
                }
                else if (Number(getCookie("li")) == 1) {
                    $state.go("main.provinceData.house");
                }
                else if (Number(getCookie("li")) == 2) {
                    $state.go("main.provinceData.airline");
                }
                else if (Number(getCookie("li")) == 3) {
                    $state.go("main.provinceData.hotel");
                }
                else if (Number(getCookie("li")) == 4) {
                    $state.go("main.provinceData.travel");
                }

                //window.open("/index.html#/main/provinceData");
            });
        };
        httpService.get("HNA", "MapDataService", "getIndexMapData").then(function (data) {
            var seriesData = dealData(data);

            $scope.pieOption = {
                //legend: {
                //    orient: 'vertical',
                //    x: 'right',
                //    y: "bottom",
                //    data: ['金融', '航班', '酒店', '旅游', '地产']
                //},
                dataRange: {
                    min: 0,
                    max: 20000,
                    x: 'left',
                    y: 'bottom',
                    text: ['高', '低'],           // 文本，默认为数值文本
                    calculable: true,
                    textStyle: {

                        fontSize: 12
                    },


                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    feature: {
                        dataView: {
                            title:"数据表格",
                            show: true, readOnly: false, optionToContent: function () {
                                // location.href = "index.html#";
                                $state.go('main.chinaData')
                                //window.open("/index.html#/main/chinaData");
                            }
                        },
                        saveAsImage: { show: true }
                    }
                },
                roamController: {
                    show: true,
                    x: 'left',
                    y: 'top',
                    handleColor: "#9B9B9B",
                    mapTypeControl: {
                        'china': true
                    }
                },
                series: [
                    {

                        name: '金融',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        mapLocation: { x: '5%', y: 'center' },

                        scaleLimit: { min: 0.5, max: 2 },
                        itemStyle: {
                            normal: { label: { show: true }, color: '#FECB3C' },
                            emphasis: { label: { show: true } },
                        },
                        data:seriesData.finance_usr_cnt
                    },
                    {
                        name: '航班',
                        type: 'map',
                        mapType: 'china',
                        scaleLimit: { max: 2, min: 0.5 },
                        mapLocation: { x: '5%', y: 'center' },
                        itemStyle: {
                            normal: { label: { show: true }, color: "#77C8FF" },
                            emphasis: { label: { show: true } }
                        },
                        data: seriesData.airline_usr_cnt
                    },
                    {
                        name: '酒店',
                        type: 'map',
                        mapType: 'china',
                        scaleLimit: { max: 2, min: 0.5},
                        mapLocation: { x: '5%', y: 'center' },
                        itemStyle: {
                            normal: { label: { show: true }, color: "#FE8D89" },
                            emphasis: { label: { show: true } }
                        },
                        data:seriesData.hotel_usr_cnt
                    },
                    {
                        name: '旅游',
                        type: 'map',
                        mapType: 'china',
                        scaleLimit: { max: 2, min: 0.5},
                        mapLocation: { x: '5%', y: 'center' },
                        itemStyle: {
                            normal: { label: { show: true }, color: "#91E96E" },
                            emphasis: { label: { show: true } }
                        },
                        data: seriesData.travel_usr_cnt
                    },
                    {
                        name: '地产',
                        type: 'map',
                        mapType: 'china',
                        scaleLimit: { max: 2, min: 0.5 },
                        mapLocation: { x: '5%', y: 'center' },
                        itemStyle: {
                            normal: { label: { show: true }, color: "#C791F1" },
                            emphasis: { label: { show: true } }
                        },
                        data: seriesData.house_usr_cnt
                    }
                ]
            };
        }, function (e) {
            console.log(e);
        });
        function dealData(data) {
            var seriesData = {};
            seriesData.finance_usr_cnt = [];
            seriesData.airline_usr_cnt = [];
            seriesData.hotel_usr_cnt = [];
            seriesData.travel_usr_cnt = [];
            seriesData.house_usr_cnt = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].finance_usr_cnt != null) {
                    seriesData.finance_usr_cnt.push({
                        name: data[i].usr_province_desc, value: data[i].finance_usr_cnt, provinceId: data[i].usr_province_id
                    });
                }
                if (data[i].airline_usr_cnt != null) {
                    seriesData.airline_usr_cnt.push({
                        name: data[i].usr_province_desc, value: data[i].airline_usr_cnt, provinceId: data[i].usr_province_id
                    });
                }
                if (data[i].hotel_usr_cnt != null) {
                    seriesData.hotel_usr_cnt.push({
                        name: data[i].usr_province_desc, value: data[i].hotel_usr_cnt, provinceId: data[i].usr_province_id
                    });
                }
                if (data[i].travel_usr_cnt != null) {
                    seriesData.travel_usr_cnt.push({
                        name: data[i].usr_province_desc, value: data[i].travel_usr_cnt, provinceId: data[i].usr_province_id
                    });
                }
                if (data[i].house_usr_cnt != null) {
                    seriesData.house_usr_cnt.push({
                        name: data[i].usr_province_desc, value: data[i].house_usr_cnt, provinceId: data[i].usr_province_id
                    });
                }
            }
            return seriesData;
        }

        $scope.pieConfigbar = {
            // 按需加载图表,根据需要可添加多个
            chartList: ['bar'],
            //样式, theme没有将使用缺省样式
            theme: 'red',
            loadingOption: {
                text: loadText,
                effect: effects,
                textStyle: {
                    fontSize: 20
                },
            },
            // 数据装载状态, false未加载,true已加载完毕
            dataLoaded: true,
            // 绑定事件,允许同时绑定多个事件
            //event: [{ click: onClick }],
        }
    }];

});