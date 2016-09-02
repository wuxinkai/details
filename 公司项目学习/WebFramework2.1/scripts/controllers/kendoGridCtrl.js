/******************************************************************

 * Copyright (C): 北京泰合佳通信息技术有限公司广东分公司

 * 创建人: 何春光

 * 创建时间: 2015年7月31日

 ******************************************************************/

define([
        'js/controllers/areaAddCtrl',
        'js/controllers/areaEditCtrl',
        'js/services/httpService',
        'js/directives/stopEventDirt',
        'js/requireHelper/requireKendo',
        'js/requireHelper/requireNotification',
        'js/requireHelper/requireUiBootstrap',
        'js/requireHelper/requireConfirm'
    ],
    function (areaAddCtrl, areaEditCtrl) {
        'use strict';
        return ["$scope", '$modal', 'httpService', 'Notification', '$confirm', '$location',
            function ($scope, $modal, httpService, Notification, $confirm, $location) {

                $scope.baseUri = httpService.baseUri;

                //动态按钮权限
                httpService.get('Manage', 'PermissionService', 'GetAssignActions', { url: "#" + $location.path(), _: Math.random() }).then(function (data) {
                        $scope.btnPermission = data;
                    },
                    function (errorMessage) {
                        Notification.error({ message: errorMessage, delay: 5000 });
                    });

                //新增按钮
                $scope.btnAdd = function () {
                    var modalInstance = $modal.open({
                        templateUrl: '../../templets/areaAdd.html',
                        controller: areaAddCtrl,
                        //size: 'lg',
                        resolve: {
                            dataModel: function () {
                                return {
                                    Pid: $scope.dataItem == null ? null : $scope.dataItem.Pid

                                };
                            },
                        }
                    });

                    modalInstance.result.then(
                        //保存事件
                        function (dictItem) {
                            if ($scope.dataItem) {
                                dictItem.PID = $scope.dataItem.Id;
                            }
                            var postModel = {
                                model: dictItem,
                                isNew: 1
                            }
                            httpService.post('Manage', 'AreaService', 'Save', postModel).then(function (data) {
                                    Notification.success({ message: "保存成功", delay: 5000 });
                                    $scope.btnRefresh();

                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        },
                        //取消事件
                        function () {

                        });
                }

                //删除按钮
                $scope.btnDelete = function () {
                    if ($scope.dataItem == null) {
                        Notification.error({ message: "请选择需要删除的数据", delay: 5000 });
                        return;
                    }

                    $confirm({ text: '是否确认删除' })
                        .then(function () {
                            var postModel = {
                                id: $scope.dataItem.Id
                            };
                            httpService.post('Manage', 'AreaService', 'Delete', postModel).then(
                                function (data) {
                                    Notification.success({ message: "保存成功", delay: 5000 });
                                    $scope.btnRefresh();
                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        })
                }

                //修改按钮
                $scope.btnUpdate = function () {
                    if ($scope.dataItem == null) {
                        Notification.error({ message: "请选择需要更新的数据", delay: 5000 });
                        return;
                    }

                    var modalInstance = $modal.open({
                        templateUrl: '../../templets/areaEdit.html',
                        controller: areaEditCtrl,
                        //size: 'lg',
                        resolve: {
                            dataModel: function () {
                                return angular.copy($scope.dataItem);
                            }
                        }
                    });

                    modalInstance.result.then(
                        //保存事件
                        function (dictItem) {
                            var postModel = {
                                model: dictItem,
                                isNew: 0
                            }
                            httpService.post('Manage', 'AreaService', 'Save', postModel).then(function (data) {
                                    Notification.success({ message: "保存成功", delay: 5000 });
                                    $scope.btnRefresh();
                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        },
                        //取消事件
                        function () {

                        });
                }

                //刷新按钮
                $scope.btnRefresh = function () {
                    $scope.areaTreeList.select($());
                    $scope.treeListOptions.dataSource.read();
                }

                //字典信息数据源
                $scope.dictTreeLDataSource = new kendo.data.TreeListDataSource({
                    transport: {
                        read: {
                            type: "post",
                            url: httpService.baseUri + "Manage/AreaService/GetAreasByQuery",
                            dataType: "json",
                            cache: false,
                            contentType: "application/json; charset=utf-8"
                        },
                        parameterMap: function (options, operation) {
                            if (operation == "read") {
                                var postModel = {
                                    areaName: $scope.areaName,
                                    pinYin: $scope.pinYin,
                                };
                                return kendo.stringify(postModel);
                            }
                        }
                    },
                    error: function (e) {

                        Notification.error({ message: e.xhr.responseJSON.Message, delay: 5000 });
                    },
                    schema: {
                        model: {
                            id: "Id",
                            fields: {
                                parentId: { field: "Pid", nullable: true },
                                Id: { field: "Id", type: "string" }
                            },
                            //expanded: true
                        }
                    }
                });


                //树形表格初始化
                $scope.treeListOptions = {
                    dataSource: $scope.dictTreeLDataSource,
                    selectable: "row",
                    sortable: true,
                    editable: true,
                    resizable: true,
                    columns:
                        [{
                            field: "Name",
                            title: "区域编码",
                            template: "<div style='display:inline;'>&nbsp;<input type='checkbox' style='display:inline;vertical-align: -9%;' ng-model='dataItem.IsChecked' ng-disabled='dataItem.IsReadOnly' class='checkbox' ng-click='onFuncCheckboxClick($event)' />&nbsp;#: Id #</div>"
                        },
                            {
                                field: "Name",
                                title: "区域名称"
                            },
                            {
                                field: "Order_No",
                                title: "排序号"
                            },
                            {
                                field: "PinYin",
                                title: "拼音首字母"
                            },
                            {
                                field: "Create_Date",
                                title: "创建时间"
                            },
                            {
                                field: "Create_User",
                                title: "创建人员"
                            },
                            {
                                field: "Modify_Date",
                                title: "最后修改时间"
                            },
                            {
                                field: "Modify_User",
                                title: "修改人员"
                            },
                            {
                                title: "操作",
                                template: "<span ng-class='btnPermission.Modify.Icon' ng-show='btnPermission.Modify' title='{{btnPermission.Modify.Name}}' style='cursor:pointer' ng-click='btnUpdate()'></span> <span style='margin-left:10px;cursor:pointer' ng-class='btnPermission.Delete.Icon' ng-show='btnPermission.Delete' title='{{btnPermission.Delete.Name}}' ng-click='btnDelete()'></span>",
                                width: 80
                            }]
                };
                $scope.datasource1={};


                var alldata;
                //向下遍历勾选子节点
                $scope.checkChildNode = function (checkItem) {

                    var funcData = $scope.treeListOptions.dataSource.data();
                    for (var i = 0; i < funcData.length; i++) {
                        if (funcData[i].parentId == checkItem.Id) {
                            funcData[i].IsChecked = checkItem.IsChecked;
                            $scope.checkChildNode(funcData[i]);

                        }
                    }
                    alldata=funcData;

                }
                //功能权限中CheckBox列响应事件  (当前勾选的是哪一行)
                $scope.onFuncCheckboxClick = function (e) {
                    var dataUid = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-uid');
                    var funcData = $scope.treeListOptions.dataSource.getByUid(dataUid);
                    $scope.checkChildNode(funcData);

                };
                $scope.Choice = function () {
                    var alldata11=new Array();
                    for (var i = 0; i < alldata.length; i++) {
                        if (alldata[i].IsChecked == true) {
                            alldata11.push(alldata[i]);

                        }
                    }
                    $scope.datasource1 = alldata11;

                };
                //列表行选择事件   (点击每一行出现的内容)
                $scope.treeListSelectChange = function (kendoEvent) {
                    $scope.dataItem = kendoEvent.sender.dataItem(kendoEvent.sender.select());
                    if ($scope.dataItem) {
                        $scope.dataItem.Pid = $scope.dataItem.parentId;//kendo-ui控件在构造层级关系的时候改变了数据结构(Pid改成了parentId)
                        $scope.dataItem.Id = $scope.dataItem.Id;
                    }

                };
                //批量删除
                $scope.btnBatchDelete = function () {
                    var areaData = $scope.treeListOptions.dataSource.data();
                    var selectedItems = new Array();
                    for (var i = 0; i < areaData.length; i++) {
                        if (areaData[i].IsChecked) {
                            selectedItems.push(areaData[i].Id);
                        }
                    }
                    if (selectedItems.length == 0) {
                        Notification.error({ message: "请选择需要删除的数据", delay: 5000 });
                    } else {
                        $confirm({ text: '是否确认删除' })
                            .then(function () {
                                var entity = { ids: selectedItems };
                                httpService.post('Manage', 'AreaService', 'BatchDelete', entity).then(
                                    function (data) {
                                        Notification.success({ message: "保存成功", delay: 5000 });
                                        $scope.btnRefresh();
                                    },
                                    function (errorMessage) {
                                        Notification.error({ message: errorMessage, delay: 5000 });
                                    });
                            })
                    }
                }

                //查询按钮
                $scope.btnQuery = function () {
                    $scope.btnRefresh();
                }

                //清除按钮
                $scope.btnClear = function () {
                    $scope.areaName = "";
                    $scope.pinYin = "";
                }
            }]
    });