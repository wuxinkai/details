(function (win) {
    
    win.app ={
        Id:"Manage"//当前应用的clientID，有授权服务所分配。
        ,Local:"/"//本地请求的相对路径
        ,AuthorizeHost:"/"//授权服务所在的地址；如果与当前应用不在同个端口，则需设置为对应服务地址及端口，e.g.:http://192.168.1.9:10003/
        ,FileServerHost:"/"//文件服务所在的地址，设置如授权服务。
        ,Main:"/index.html"///*登录成功后显示的第一个页面，只需修改参数redirect_uri后对应的内容即可*/
    }
})(window);