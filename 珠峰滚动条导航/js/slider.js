var receptacle = document.getElementById('receptacle');  //������div
var mid = document.getElementById('mid');  //�ڶ����div
var oDivs = DOM.children(mid, "div");  //��ȡmid���µĶ��ӽ�div�� ���õ���tween�������
(function () {
    //�������߶�
    receptacle.style.height = window.innerHeight-600+'px';

    function fn(e) {
        e = e || window.event;  //�����¼���
//�������¼�
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
        //     ���������붥����λ��      ��������������          �����Ӹ�                ����  ������ӵĸ߶�
        slider.style.top = receptacle.scrollTop * receptacle.offsetHeight / mid.offsetHeight + "px";
//            ��������λ��  *  ������Ӹ߶� ����   �����Ӹ߶�
        slider.offsetTop * (mid.offsetHeight / receptacle.offsetHeight);
        var st = receptacle.scrollTop; //�����ľ���
    }
    receptacle.onmousewheel = fn;
    slider = document.createElement('span');
    slider.id = "slider";
    slider.style.height = receptacle.offsetHeight * (receptacle.offsetHeight / mid.offsetHeight) + "px";
    sliderParent.appendChild(slider);
    on(slider, "mousedown", down);
})();


