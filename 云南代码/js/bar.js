
var myChart = echarts.init(document.getElementById('mainleft'));
option = {
    title: {
        x: 'center',
        text: '古城各区域人群分布(景区当前人数58000人)',
        textStyle:{
            fontSize: 16,
            fontWeight: 'bolder',
            color: '#666',
        },
    },
    tooltip: {
        trigger: 'item'
    },

    calculable: true,
    grid: {
        borderWidth: 0,
        y: '50px',
        y2: '20px'
    },
    xAxis: [
        {
            splitLine:{show: false},
            axisTick:{
                show:false,
            },
            type: 'category',
            show: true,
            data : ['狮子山','七一街','新华街','南门','五一街','光义街','新义街']
        }
    ],
    yAxis: [
        {
            splitLine:{
                show: true,
                lineStyle:{
                    color: ['#F7F7F7'],
                    width: 1,
                    type: 'solid'
                }
            },
            type: 'value',
            show: true,
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,
            },
            axisLabel : {
                formatter: '',

            },
        }
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#9ed1e8','#87bc94','#aed59c','#f1e0b6','#f1c570',
                            '#da9082','#da9082'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [5220,2510,9510,4010,5010,3010,6010],
        }
    ]
};




myChart.setOption(option);
window.onresize = myChart.resize;