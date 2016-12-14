var http = require("http"),
    url = require("url"),
    fs = require("fs");
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;

    //->静态资源文件(HTML/CSS/JS/图片...)的处理
    var reg = /\.(HTML|JS|CSS|TXT|JSON|PNG|JPG|BMP|GIF|ICO)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = "text/plain";
        switch (suffix) {
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
            case "JSON":
                suffixMIME = "application/json";
                break;
        }
        try {
            var conFile = fs.readFileSync("." + pathname, "utf-8");
            res.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
            res.end(conFile);
        } catch (e) {
            res.writeHead(404);
            res.end();
        }
        return;
    }

    //->数据处理
    var customInfoPath = "./json/customInfo.json",
        resObj,
        allData;

    //1)获取所有的客户信息
    if (pathname === "/getAllData") {
        allData = fs.readFileSync(customInfoPath, "utf-8");
        allData === "" ? allData = "[]" : null;
        allData = JSON.parse(allData);

        resObj = {};
        resObj.code = allData.length > 0 ? 0 : 1;
        resObj.message = allData.length > 0 ? "获取成功!" : "没有任何的客户信息";
        resObj.data = allData;
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(resObj));
        return;
    }
});
server.listen(8001);