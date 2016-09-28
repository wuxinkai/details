define(['bower_components/less/theme', 'jQuery'], function (theme) {
        //导出功能
        function exportService() {
            this.options = {
                width: 300,
                height: 150,
                bg: '#fff',
                title: '导出',
                minHeight: 150,
                exportExcel: function () { },
                exportCSV: function () { },
            }

        }
        exportService.prototype.showMsg = function () {
            var $this = this;
            var style = 'top:0px;z-index:9999;position:fixed;width:' + $(window).width() + 'px;height:' + $(window).height() + 'px;';
            var contnet = '<div style="width:100%;height:' + (this.options.height - 45) + 'px;padding:5px 10px;"><div style="width:182px;margin:20px auto;"><button id="exportExcelId" class="btn btn-default">导出Excel</button><button id="exportCSVId" style="margin-left:10px;" class="btn btn-default">导出CSV</button></div></div>';
            var title = '<div style="margin:0 auto;height:100%;"><div style="width:100%;padding:0 10px;height:45px;line-height:45px;border-bottom:1px solid #ddd;"><span style="display:block;float:left;font-size:16px;">' + this.options.title + '</span><button style="display:block;float:right;margin-top: 5px;" id="exportCloseId" class="btn btn-default">关闭</button></div>' + contnet + '<div>';
            var html = '<div id="exportMSGID" style="' + style + '"><div style="width:100%;height:100%;background:black;opacity:0.5;"></div><div style="top:50%;left:50%;margin-top:-' + this.options.height / 2 + 'px;margin-left:-' + this.options.width / 2 + 'px;position:absolute;width:' + this.options.width + 'px;min-height:' + this.options.minHeight + ';height:' + this.options.height + 'px;background-color:' + this.options.bg + ';border:1px solid #ddd;border-radius:5px;">' +
                title +
                '</div><div>';

            $(window).resize(function () {
                $('#exportMSGID').css("width", $(window).width() + 'px');
                $('#exportMSGID').css("height", $(window).height() + 'px');
            });
            $('body').append(html);
            $('#exportCloseId').click(function () {
                $('#exportMSGID').remove();
            });
            $('#exportExcelId').click(function () {
                $this.options.exportExcel();
                $this.hideMsg();
            });
            $('#exportCSVId').click(function () {
                $this.options.exportCSV();
                $this.hideMsg();
            });
        }
        exportService.prototype.hideMsg = function () {
            $('#exportMSGID').remove();
        }
        exportService.prototype.setOptions = function (options) {
            if (options != null)
                this.options = $.extend({}, this.options, options);
            return this;
        }
        return new exportService();
});