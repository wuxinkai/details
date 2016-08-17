define(['scripts/directives/ct-echarts'], function () {
    'use strict'
    return ['$scope', function ($scope) {
        //配置图表参数:样式,加载效果,事件
        $scope.demoConfig = {
            //按需加载图表,根据需要可添加多个
            chartList: ['radar'],
            //样式, theme没有将使用缺省样式
            theme: 'red',
            //数据装载状态, false未加载,true已加载完毕
            dataLoaded: true,
            //绑定事件,允许同时绑定多个事件
            event: [{ click: onClick }],
        };

        function onClick(param) {
            alert(param.name);
        };

        $scope.demoOption1 = {
            title: {
                text: '预算 vs 开销（Budget vs spending）',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'bottom',
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            polar: [
               {
                   indicator: [
                       { text: '销售（sales）', max: 6000 },
                       { text: '管理（Administration）', max: 16000 },
                       { text: '信息技术（Information Techology）', max: 30000 },
                       { text: '客服（Customer Support）', max: 38000 },
                       { text: '研发（Development）', max: 52000 },
                       { text: '市场（Marketing）', max: 25000 }
                   ]
               }
            ],
            calculable: true,
            series: [
                {
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '预算分配（Allocated Budget）'
                        },
                         {
                             value: [5000, 14000, 28000, 31000, 42000, 21000],
                             name: '实际开销（Actual Spending）'
                         }
                    ]
                }
            ]
        };

        $scope.demoOption2 = {
            title: {
                text: '罗纳尔多 vs 舍普琴科',
                subtext: '完全实况球员数据'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'center',
                data: ['罗纳尔多', '舍普琴科']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            polar: [
                {
                    indicator: [
                        { text: '进攻', max: 100 },
                        { text: '防守', max: 100 },
                        { text: '体能', max: 100 },
                        { text: '速度', max: 100 },
                        { text: '力量', max: 100 },
                        { text: '技巧', max: 100 }
                    ],
                    radius: 130
                }
            ],
            series: [
                {
                    name: '完全实况球员数据',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    data: [
                        {
                            value: [97, 42, 88, 94, 90, 86],
                            name: '舍普琴科'
                        },
                        {
                            value: [97, 32, 74, 95, 88, 92],
                            name: '罗纳尔多'
                        }
                    ]
                }
            ]
        };

        $scope.demoOption = $scope.demoOption1;

        var myTheme = new Array("macarons", "infographic", "shine", "dark", "blue", "green", "red", "gray", "helianthus", "default");

        $scope.changeTheme = function () {
            $scope.demoConfig.theme = myTheme[Math.ceil(Math.random() * myTheme.length)];
        }

        var flag = true;
        $scope.changeData = function () {
            flag = !flag;
            if (flag)
                $scope.demoOption = $scope.demoOption1;
            else
                $scope.demoOption = $scope.demoOption2;
        }
    }];

});