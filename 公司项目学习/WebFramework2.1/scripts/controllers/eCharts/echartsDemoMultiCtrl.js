define(['scripts/directives/ct-echarts'], function () {
    'use strict'
    return ['$scope', function ($scope) {
        //配置图表参数:样式,加载效果,事件
        $scope.chart1Config = {
            //按需加载图表,根据需要可添加多个
            chartList: ['bar', 'line'],
            //样式, theme没有将使用缺省样式
            theme: 'red',
            //数据装载状态, false未加载,true已加载完毕
            dataLoaded: true
        };

        //配置图表参数:样式,加载效果,事件
        $scope.chart2Config = {
            //按需加载图表,根据需要可添加多个
            chartList: ['pie', 'funnel'],
            //样式, theme没有将使用缺省样式
            theme: 'blue',
            //数据装载状态, false未加载,true已加载完毕
            dataLoaded: true
        };

        $scope.chart1Option = {
            title: {
                text: "纵向柱状图示例",
                subtext: "北京泰合佳通_广东分公司_彭文超",
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高', '最低']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    magicType: { show: true, type: ['stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            dataZoom: {
                show: true,
                realtime: true,
                start: 45,
                end: 55
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 30; i++) {
                            list.push('2013-03-' + i);
                        }
                        return list;
                    }()
                }
            ],
            yAxis: [
                {
                    type: 'value',

                }
            ],
            series: [
                {
                    name: '最高',
                    type: 'bar',
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 30; i++) {
                            list.push(Math.round(Math.random() * 30) + 30);
                        }
                        return list;
                    }()
                },
                {
                    name: '最低',
                    type: 'bar',
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 30; i++) {
                            list.push(Math.round(Math.random() * 10));
                        }
                        return list;
                    }()
                }
            ]
        };

        var idx = 1;
        $scope.chart2Option = {
            timeline: {
                data: [
                    '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
                    { name: '2013-06-01', symbol: 'emptyStar6', symbolSize: 8 },
                    '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
                    { name: '2013-12-01', symbol: 'star6', symbolSize: 8 }
                ],
                label: {
                    formatter: function (s) {
                        return s.slice(0, 7);
                    }
                }
            },
            options: [
                {
                    title: {
                        text: '浏览器占比变化',
                        subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1700
                                    }
                                }
                            },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            center: ['50%', '45%'],
                            radius: '50%',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Chrome' },
                                { value: idx * 64 + 160, name: 'Firefox' },
                                { value: idx * 32 + 320, name: 'Safari' },
                                { value: idx * 16 + 640, name: 'IE9+' },
                                { value: idx++ * 8 + 1280, name: 'IE8-' }
                            ]
                        }
                    ]
                }
            ]
        };
    }];

});