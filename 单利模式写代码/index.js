//方法1
var module =(function(){
    function init(){
        console.log("单利");
    }
    return{
        init2:init
    }
})();
module.init2();

//方法2
var mySingleton = function () {
    /* 这里声明私有变量和方法 */
    var privateVariable = '私人的';

    function showPrivate() {
        console.log(privateVariable);
    }

    /* 公有变量和方法（可以访问私有变量和方法） */
    return {
        publicMethod: function () {
            showPrivate();
        },
        publicVar: '公众可以看到这个！'
    };
};

var single = mySingleton();

single.publicMethod();  // 输出 '私人的'

console.log(single.publicVar); // 输出 '公众可以看到这个!'
