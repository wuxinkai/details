/******************************************************************

 * Copyright (C): 北京泰合佳通信息技术有限公司广东分公司
 *
 * 描述: 基于AngularJS 封装 Echarts指令
 *
 *      使用ng-echarts指令, 主要配置如下量个变量：
 *      1.ecOption：和echarts中的option一样，因此你直接可以把官网的例子拷进来用;
 *      2.ecConfig：echarts相关的参数的配置项, 具体如下:
 *      2.1 chartList：指定按需加载图形类型, 共有17种类型图表, 要确保图表正确显示必须正确加载图形组件, 注意要确保正确性;
 *          ['bar','line','scatter','pie','radar','venn','treemap','tree','map','k','force','chord','gauge','funnel','eventriver','wordcloud','heatmap']
 *      2.2 theme：图表样式主题,用于控制显示风格,提供了14种风格,根据需要指定一种;
 *          macarons, infographic, shine, dark, blue, green, red, gray, helianthus, roma, mint, macarons2, sakura, default
 *      2.3 event：绑定事件, 用于关联事件进行一些特殊的处理,根据需要指定一个或者多个;
 *          refresh,restore,resize,click,dblclick,hover,mouseout,dataChanged,dataZoom,dataRange,dataRangeHoverLink,legendSelected,legendHoverLink,mapSelected,pieSelected,magicTypeChanged,dataViewChanged,timelineChanged,mapRoam
 *      2.4 dataLoaded：数据是否加载（用于Loading）用于控制是否显示加载提示;
 *      2.5 loadingOption：加载效果配置项同Echarts官网;
 *      2.6 connect:添加联动图表, 如果需要联动,需要给统计图对象指定ID,并且确保设置正确的联动对象ID.

 ******************************************************************/

define(['echarts/echarts', 'angularAMD'],
function (echarts, angularAMD) {
    angularAMD.directive('ctEcharts',
    function () {
        var charts = [];
        var connectList = [];
        return {
            controller: ['$scope', '$element',
            function ($scope, $element) {
                // 图表定义
                echarts.Paths = {
                    line: 'echarts/chart/line',
                    bar: 'echarts/chart/bar',
                    scatter: 'echarts/chart/scatter',
                    pie: 'echarts/chart/pie',
                    radar: 'echarts/chart/radar',
                    venn: 'echarts/chart/venn',
                    treemap: 'echarts/chart/treemap',
                    tree: 'echarts/chart/tree',
                    map: 'echarts/chart/map',
                    k: 'echarts/chart/k',
                    force: 'echarts/chart/force',
                    chord: 'echarts/chart/chord',
                    gauge: 'echarts/chart/gauge',
                    funnel: 'echarts/chart/funnel',
                    eventriver: 'echarts/chart/eventRiver',
                    wordcloud: 'echarts/chart/wordCloud',
                    heatmap: 'echarts/chart/heatmap'
                };
                //图标初始化
                $scope.echart = echarts.init($element[0]);
            }],
            link: function (scope, element, attrs, ctrl) {
                //显示加载
                function showLoading(loadingOption) {
                    var op = loadingOption || {
                        text: '数据加载中',
                        effect: 'bubble',
                        textStyle: {
                            fontSize: 20
                        }
                    };
                    scope.echart.showLoading(op);
                };
                //隐藏加载
                function hideLoading() {
                    scope.echart.hideLoading();
                };
                //设置样式 
                function setTheme() {
                    var themeName = scope.config.theme ? scope.config.theme : 'default';
                    if (scope.echart && themeName) {
                        require(['bower_components/echarts/theme/' + themeName],
                        function (th) {
                            scope.echart.setTheme(th);
                        });
                    }
                }
                //事件绑定
                function bindEvent() {
                    if (angular.isArray(scope.config.event)) {
                        angular.forEach(scope.config.event,
                        function (value, key) {
                            for (var e in value) {
                                scope.echart.on(e, value[e]);
                            }
                        });
                    }
                }
                // 建立联动
                charts[attrs.id] = scope.echart;
                connectList.push({
                    key: attrs.id,
                    value: scope.config.connect
                });
                var connectOk = false;
                function connect() {
                    if (connectList && connectList.length > 0) {
                        for (var i in connectList) {
                            var others = [];
                            for (index in connectList[i]['value']) {
                                others.push(charts[connectList[i]['value'][index]]);
                            }
                            charts[connectList[i]['key']].connect(others);
                        }
                        connectOk = true;
                        console.log('ECharts Connect....');
                    }
                }
                //刷新数据
                function refreshChart() {
                    if (scope.config && scope.config.dataLoaded === false) scope.echart.showLoading(scope.config.loadingOption);

                    if (scope.config && scope.config.dataLoaded) {
                        scope.echart.clear();
                        scope.echart.setOption(scope.option);
                        setTheme();
                        scope.echart.resize();
                        scope.echart.hideLoading();
                        if (!connectOk) connect();
                    }
                }
                // 加载图表JS
                var downList = [];
                if (scope.config.chartList && echarts.Paths) {
                    scope.config.chartList.forEach(function (item) {
                        downList.push(echarts.Paths[item]);
                    });
                    require(downList,
                    function () {
                        if (scope.config) {
                            setTheme();
                            if (scope.config.event) bindEvent();
                        }
                        if (scope.option) scope.echart.setOption(scope.option, true);
                        if (!connectOk) connect();
                    });
                }
                //监听样式文件变化
                scope.$watch(function () {
                    return scope.config;
                },
                function (newValue, oldValue) {
                    if (newValue != oldValue && newValue != null) refreshChart();

                },
                true);
                //监听数据源变化
                scope.$watch(function () {
                    return scope.option;
                },
                function (newValue, oldValue) {
                    if (newValue != oldValue && newValue != null) refreshChart();

                },
                true);
                //销毁时需要清除
                scope.$on("$destroy", function () {
                    delete (charts[attrs.id])
                    if (connectList && connectList.length > 0) {
                        for (var i in connectList) {
                            if (connectList[i].key == attrs.id) {
                                connectList.splice(i, 1);
                                return;
                            }
                        }
                    }
                });
            },
            scope: {
                option: '=ecOption',
                config: '=ecConfig',
                echart: '=?ngEcharts',
            },
            restrict: 'EA'
        }
    })
});