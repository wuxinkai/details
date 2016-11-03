window.onload = function() {
    showTime();
};

function showTime(){
    var myDate = new Date();
    var myyear = myDate.getFullYear();
    var mymonth = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var d = myDate.getDay();
    var weekday = new Array(7);
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    weekday[0] = "星期日";
    document.getElementById('show').innerHTML = myyear + '-' + mymonth + '-' + date;
    document.getElementById('week').innerHTML = weekday[d];
    //setTimeout(showTime, 500)


}