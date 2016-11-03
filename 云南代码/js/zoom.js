
var olKey = 0;
var timer2;
function show(){
    //狮子山
    $(".map li.lottery-unit-0").find(".active").animate( {
        width: 356,
        height: 1100,
        left:250,
        zIndex:10
    },{
        speed : 100,
        callback:function(){

        },
        step : function(n,fx){
            if(n == 356 && olKey == 0 && fx.prop == "width"){
                text(278,714,5210);
            }
        }
    });
//新华街
    $(".map li.lottery-unit-1").find(".active").animate( {
        width: 400,
        height: 900,
        zIndex:10
    },{
        speed : 100,
        callback:function(){
        },
        step : function(n,fx){
            if(n == 400 && olKey == 1 && fx.prop == "width"){
                text(216,471,9500);
            }
        }
    });
//新义街
    $(".map li.lottery-unit-2").find(".active").animate( {
        width: 505,
        height: 655,
        left:-160,
        top:30,
        zIndex:10
    },{
        speed : 100,
        callback:function(){
        },
        step : function(n,fx){
            if(n == 505 && olKey == 2 && fx.prop == "width"){
                text(202,250,6000);
            }
        }
    });
//五一街
    $(".map li.lottery-unit-3").find(".active").animate( {
        width: 700,
        height: 630,
        left:-400,
        top:0,
        zIndex:10
    },{
        speed : 100,
        callback:function(){
        },
        step : function(n,fx){
            if(n == 700 && olKey == 3 && fx.prop == "width"){
                text(300,217,5000);
            }
        }
    });
    ////七一街
    $(".map li.lottery-unit-4").find(".active").animate( {
        width: 700,
        height: 600,
        left:-150,
        top:-200,
        zIndex:10
    },{
        speed : 100,
        callback:function(){
        },
        step : function(n,fx){
            if(n == 700 && olKey == 4 && fx.prop == "width"){
                text(409,288,2500);
            }
        }
    });
////南门
    $(".map li.lottery-unit-5").find(".active").animate( {
        width: 800,
        height: 700,
        left:-300,
        top:-300,
        zIndex:10
    },{
        speed : 100,
        callback:function(){
        },
        step : function(n,fx){
            if(n == 800 && olKey == 5 && fx.prop == "width"){
                text(512,344,4000);
            }
        }
    });
    ////光义
    $(".map li.lottery-unit-6").find(".active").animate( {
        width: 600,
        height: 650,
        left:0,
        top:-200,
        zIndex:10
    },{
        speed : 100,
        callback:function(){

        },
        step : function(n,fx){
            if(n >= 600 && olKey == 6 && fx.prop == "width"){
                text(313,321,3000);
            }
        }
    });

}

//第一步先走6秒,在执行动画
var timer_all = setInterval(show,6000);
//timer = setInterval(play,50);
function play(){
    if ($('.map li').eq(olKey).attr('class') != "active") {
        $('.map li').eq(olKey).children().addClass('active');
    }
}

function pause(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
    function contrast(){
       var win0 = $(".bg"+olKey).width();
       var win1 = $(".bg"+(olKey+1)).width();

        if(win1==win0){
            window.location.reload()
        }
    }

function enlargement(counter ){
  $(".map li .bg"+counter).css("background-image",'url("./img/active0'+counter+'.png")');
}
function shrunk(counter){
    $(".map li .bg"+counter).css('background-image','url("./img/bgImg'+counter+'.png")')
}
var num = 0;
var timer;
function text(width,height,n){
    num = 0;
    timer = setInterval(function () {
        if (num <= n) {
            $(".fontwei"+olKey).show();
            enlargement(olKey)
            num = num + 10;
            contrast()
            $(".map li").eq(olKey).children().children().html(num+" 人");
        }else{
            clearInterval(timer);
            $('.map li div').removeClass('active');
            shrunk(olKey)
            $(".bg"+olKey).animate( {
                width: width,
                height: height,
                left:0,
                top:0,
                zIndex:1
            },1000,function(){
                contrast()
                $(".fontwei"+olKey).hide();
                olKey=olKey+1;
                if(olKey == 7){
                    olKey = 0;
                    if(timer_all != null){
                        clearInterval(timer_all);
                        timer_all = setInterval(show,6000)
                    }
                }
                contrast()
                play();
            })
        }
    }, 1)
}


play();