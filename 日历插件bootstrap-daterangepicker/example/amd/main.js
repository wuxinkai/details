requirejs.config({
    "paths": {
      "jquery": "https://code.jquery.com/jquery-1.11.3.min",
      "moment": "../../moment",
      "daterangepicker": "../../daterangepicker"
    }
});

requirejs(['jquery', 'moment', 'daterangepicker'] , function ($, moment) {
$(document).ready(function() {
  console.log( moment().subtract(6, 'days')) ; //是获取时间的插件
  $('#config-text').keyup(function() {
    eval($(this).val());
  });

  $('.configurator input, .configurator select').change(function() {
    updateConfig();
  });

  $('.demo i').click(function() {
    $(this).parent().find('input').click();
  });

  $('#startDate').daterangepicker({
    language:  'zh-CN', //en 中文
    singleDatePicker: true,
    startDate: moment().subtract(6, 'days'),  //GMT+0800 (中国标准时间)  设置开始时间
    locale:{
      format: 'MM/DD/YYYY', // 日期格式  此属性是显示顺序，还有显示顺序是mm-dd-yyyy  ， p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy 的任意组合。
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      firstDay: 1
    }
  });

  $('#endDate').daterangepicker({
    autoclose:true,//自动关闭
    language:  'zh-CN', //en 中文
    singleDatePicker: true, //单一日期选择
    //startDate: moment(),  // 默认值：开始时间
    //endDate: moment(),  //  默认值：结束时间
    daysOfWeekDisabled: '0,6',  //一周禁用的日期  String, Array. 默认值: '', []
    autoclose:false,//当选择一个日期之后是否立即关闭此日期时间选择器。
    startView: 2,  //日期时间选择器打开之后首先显示的视图。 可接受的值：
    minView:0,   //日期时间选择器所能够提供的最精确的时间选择视图。
    maxView:4,  //  日期时间选择器最高能展示的选择范围视图。
    todayBtn:false, //如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。如果是true的话，"Today" 按钮仅仅将视图转到当天的日期，如果是"linked"，当天日期将会被选中。
    todayHighlight:false,//如果为true, 高亮当前日期。
    keyboardNavigation:true,//是否允许通过方向键改变日期。
    forceParse:true,//当选择器关闭的时候，是否强制解析输入框中的值。也就是说，当用户在输入框中输入了不正确的日期，选择器将会尽量解析输入的值，并将解析后的正确值按照给定的格式format设置到输入框中。
    minuteStep:5, //此数值被当做步进值用于构建小时视图。对于每个 minuteStep 都会生成一组预设时间（分钟）用于选择。
    pickerPosition: 'bottom-left',//此选项当前只在组件实现中提供支持。通过设置选项可以讲选择器放倒输入框下方。
    locale:{
      format: 'MM/DD/YYYY', // 日期格式  此属性是显示顺序，还有显示顺序是mm-dd-yyyy  ， p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy 的任意组合。
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      firstDay: 1
    }
  })

  updateConfig();

  function updateConfig() {
    var options = {};

    if ($('#singleDatePicker').is(':checked'))
      options.singleDatePicker = true;

    if ($('#showDropdowns').is(':checked'))
      options.showDropdowns = true;

    if ($('#showWeekNumbers').is(':checked'))
      options.showWeekNumbers = true;

    if ($('#showISOWeekNumbers').is(':checked'))
      options.showISOWeekNumbers = true;

    if ($('#timePicker').is(':checked'))
      options.timePicker = true;

    if ($('#timePicker24Hour').is(':checked'))
      options.timePicker24Hour = true;

    if ($('#timePickerIncrement').val().length && $('#timePickerIncrement').val() != 1)  //timePickerIncrement  时间选择容量
      options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 10);

    if ($('#timePickerSeconds').is(':checked'))
      options.timePickerSeconds = true;

    if ($('#autoApply').is(':checked'))
      options.autoApply = true;

    if ($('#dateLimit').is(':checked'))
      options.dateLimit = { days: 7 };

    if ($('#ranges').is(':checked')) {
      options.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      };
    }

    if ($('#locale').is(':checked')) {
      options.locale = {
        format: 'MM/DD/YYYY HH:mm',
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        firstDay: 1
      };
    }

    if (!$('#linkedCalendars').is(':checked'))
      options.linkedCalendars = false;

    if (!$('#autoUpdateInput').is(':checked'))
      options.autoUpdateInput = false;

    if ($('#alwaysShowCalendars').is(':checked'))
      options.alwaysShowCalendars = true;

    if ($('#parentEl').val().length)
      options.parentEl = $('#parentEl').val();

    if ($('#startDate').val().length)
      options.startDate = $('#startDate').val();

    if ($('#endDate').val().length)
      options.endDate = $('#endDate').val();

    if ($('#minDate').val().length)
      options.minDate = $('#minDate').val();

    if ($('#maxDate').val().length)
      options.maxDate = $('#maxDate').val();

    if ($('#opens').val().length && $('#opens').val() != 'right')
      options.opens = $('#opens').val();

    if ($('#drops').val().length && $('#drops').val() != 'down')
      options.drops = $('#drops').val();

    if ($('#buttonClasses').val().length && $('#buttonClasses').val() != 'btn btn-sm')
      options.buttonClasses = $('#buttonClasses').val();

    if ($('#applyClass').val().length && $('#applyClass').val() != 'btn-success')
      options.applyClass = $('#applyClass').val();

    if ($('#cancelClass').val().length && $('#cancelClass').val() != 'btn-default')
      options.cancelClass = $('#cancelClass').val();

    $('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");

    $('#config-demo').daterangepicker(options,
        function(start, end, label) {
          //console.log('选择的新日期范围: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });

  }

});
});
