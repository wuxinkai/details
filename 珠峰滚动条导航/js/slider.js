var receptacle = document.getElementById('receptacle');  //最外层的div
var mid = document.getElementById('mid');  //第二层的div
var oDivs = DOM.children(mid, "div");  //获取mid底下的儿子叫div的 利用的是tween里的内容
(function () {
    //设置外层高度
    receptacle.style.height = window.innerHeight-600+'px';

    function fn(e) {
        e = e || window.event;  //利用事件绑定
//鼠标滚轮事件
        if (e.wheelDelta) {
            var n = e.wheelDelta;
        } else if (e.detail) {
            var n = e.detail * -1;

        }
        if (n > 0) {
            receptacle.scrollTop -= 12;
        } else if (n < 0) {
            receptacle.scrollTop += 12;
        }
        //     滚动条距离顶部的位置      滚动条滚动距离          外层盒子高                除以  里面盒子的高度
        slider.style.top = receptacle.scrollTop * receptacle.offsetHeight / mid.offsetHeight + "px";
//            滚动条的位置  *  里面盒子高度 除以   外层盒子高度
        slider.offsetTop * (mid.offsetHeight / receptacle.offsetHeight);
        var st = receptacle.scrollTop; //滚动的距离
    }
    receptacle.onmousewheel = fn;
    slider = document.createElement('span');
    slider.id = "slider";
    slider.style.height = receptacle.offsetHeight * (receptacle.offsetHeight / mid.offsetHeight) + "px";
    sliderParent.appendChild(slider);
    on(slider, "mousedown", down);
})();


