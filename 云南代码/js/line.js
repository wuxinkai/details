
var myChart = echarts.init(document.getElementById('mainRight'));
option = {
    title : {
        x: 'center',
        text: '古城一周人流数趋势',
        textStyle:{
            fontSize: 16,
            fontWeight: 'bolder',
            color: '#666',
        },
    },
    tooltip : {
        trigger: 'axis'
    },

    grid: {
        borderWidth: 0,
        y: '50px',
        y2: '20px'
    },
    calculable : true,
    xAxis : [
        {
            splitLine:{
                show: false,
            },
            type : 'category',
            boundaryGap : false,
            axisLabel : {
                textStyle:{
                    color : '#007329',
                }
            },
            axisTick:{
                show:false,
            },
                data : ['7/1','7/2','7/3','7/4','7/5','7/6','7/7']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
                show: true,
                lineStyle:{
                    color: ['#ccc'],
                    width: 1,
                    type: 'dotted'
                }
            },


            axisLabel : {
                formatter: '',

            },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,
            }
        }
    ],
    series : [

        {
            smooth:true,
            name:'人流量',
            type:'line',
            data:[1000, 2000, 2500, 5000, 3555, 2343, 3340],
            //markPoint : {
            //    data : [
            //        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
            //    ]
            //},
            //markLine : {
            //    data : [
            //        {type : 'average', name : '平均值'}
            //    ]
            //}
            symbol:'circle',
            symbolSize:8,
            itemStyle:{
                normal:{
                    color:"#FF1E6D",
                    label:{
                        show:true,
                        //formatter:'{b}:{c}',
                    }
                }

            }
        }

    ]
};
myChart.setOption(option);
window.onresize = myChart.resize;