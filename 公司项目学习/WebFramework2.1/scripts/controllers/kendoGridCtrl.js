/******************************************************************

 * Copyright (C): ����̩�ϼ�ͨ��Ϣ�������޹�˾�㶫�ֹ�˾

 * ������: �δ���

 * ����ʱ��: 2015��7��31��

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

                //��̬��ťȨ��
                httpService.get('Manage', 'PermissionService', 'GetAssignActions', { url: "#" + $location.path(), _: Math.random() }).then(function (data) {
                        $scope.btnPermission = data;
                    },
                    function (errorMessage) {
                        Notification.error({ message: errorMessage, delay: 5000 });
                    });

                //������ť
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
                        //�����¼�
                        function (dictItem) {
                            if ($scope.dataItem) {
                                dictItem.PID = $scope.dataItem.Id;
                            }
                            var postModel = {
                                model: dictItem,
                                isNew: 1
                            }
                            httpService.post('Manage', 'AreaService', 'Save', postModel).then(function (data) {
                                    Notification.success({ message: "����ɹ�", delay: 5000 });
                                    $scope.btnRefresh();

                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        },
                        //ȡ���¼�
                        function () {

                        });
                }

                //ɾ����ť
                $scope.btnDelete = function () {
                    if ($scope.dataItem == null) {
                        Notification.error({ message: "��ѡ����Ҫɾ��������", delay: 5000 });
                        return;
                    }

                    $confirm({ text: '�Ƿ�ȷ��ɾ��' })
                        .then(function () {
                            var postModel = {
                                id: $scope.dataItem.Id
                            };
                            httpService.post('Manage', 'AreaService', 'Delete', postModel).then(
                                function (data) {
                                    Notification.success({ message: "����ɹ�", delay: 5000 });
                                    $scope.btnRefresh();
                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        })
                }

                //�޸İ�ť
                $scope.btnUpdate = function () {
                    if ($scope.dataItem == null) {
                        Notification.error({ message: "��ѡ����Ҫ���µ�����", delay: 5000 });
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
                        //�����¼�
                        function (dictItem) {
                            var postModel = {
                                model: dictItem,
                                isNew: 0
                            }
                            httpService.post('Manage', 'AreaService', 'Save', postModel).then(function (data) {
                                    Notification.success({ message: "����ɹ�", delay: 5000 });
                                    $scope.btnRefresh();
                                },
                                function (errorMessage) {
                                    Notification.error({ message: errorMessage, delay: 5000 });
                                });
                        },
                        //ȡ���¼�
                        function () {

                        });
                }

                //ˢ�°�ť
                $scope.btnRefresh = function () {
                    $scope.areaTreeList.select($());
                    $scope.treeListOptions.dataSource.read();
                }

                //�ֵ���Ϣ����Դ
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


                //���α���ʼ��
                $scope.treeListOptions = {
                    dataSource: $scope.dictTreeLDataSource,
                    selectable: "row",
                    sortable: true,
                    editable: true,
                    resizable: true,
                    columns:
                        [{
                            field: "Name",
                            title: "�������",
                            template: "<div style='display:inline;'>&nbsp;<input type='checkbox' style='display:inline;vertical-align: -9%;' ng-model='dataItem.IsChecked' ng-disabled='dataItem.IsReadOnly' class='checkbox' ng-click='onFuncCheckboxClick($event)' />&nbsp;#: Id #</div>"
                        },
                            {
                                field: "Name",
                                title: "��������"
                            },
                            {
                                field: "Order_No",
                                title: "�����"
                            },
                            {
                                field: "PinYin",
                                title: "ƴ������ĸ"
                            },
                            {
                                field: "Create_Date",
                                title: "����ʱ��"
                            },
                            {
                                field: "Create_User",
                                title: "������Ա"
                            },
                            {
                                field: "Modify_Date",
                                title: "����޸�ʱ��"
                            },
                            {
                                field: "Modify_User",
                                title: "�޸���Ա"
                            },
                            {
                                title: "����",
                                template: "<span ng-class='btnPermission.Modify.Icon' ng-show='btnPermission.Modify' title='{{btnPermission.Modify.Name}}' style='cursor:pointer' ng-click='btnUpdate()'></span> <span style='margin-left:10px;cursor:pointer' ng-class='btnPermission.Delete.Icon' ng-show='btnPermission.Delete' title='{{btnPermission.Delete.Name}}' ng-click='btnDelete()'></span>",
                                width: 80
                            }]
                };
                $scope.datasource1={};


                var alldata;
                //���±�����ѡ�ӽڵ�
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
                //����Ȩ����CheckBox����Ӧ�¼�  (��ǰ��ѡ������һ��)
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
                //�б���ѡ���¼�   (���ÿһ�г��ֵ�����)
                $scope.treeListSelectChange = function (kendoEvent) {
                    $scope.dataItem = kendoEvent.sender.dataItem(kendoEvent.sender.select());
                    if ($scope.dataItem) {
                        $scope.dataItem.Pid = $scope.dataItem.parentId;//kendo-ui�ؼ��ڹ���㼶��ϵ��ʱ��ı������ݽṹ(Pid�ĳ���parentId)
                        $scope.dataItem.Id = $scope.dataItem.Id;
                    }

                };
                //����ɾ��
                $scope.btnBatchDelete = function () {
                    var areaData = $scope.treeListOptions.dataSource.data();
                    var selectedItems = new Array();
                    for (var i = 0; i < areaData.length; i++) {
                        if (areaData[i].IsChecked) {
                            selectedItems.push(areaData[i].Id);
                        }
                    }
                    if (selectedItems.length == 0) {
                        Notification.error({ message: "��ѡ����Ҫɾ��������", delay: 5000 });
                    } else {
                        $confirm({ text: '�Ƿ�ȷ��ɾ��' })
                            .then(function () {
                                var entity = { ids: selectedItems };
                                httpService.post('Manage', 'AreaService', 'BatchDelete', entity).then(
                                    function (data) {
                                        Notification.success({ message: "����ɹ�", delay: 5000 });
                                        $scope.btnRefresh();
                                    },
                                    function (errorMessage) {
                                        Notification.error({ message: errorMessage, delay: 5000 });
                                    });
                            })
                    }
                }

                //��ѯ��ť
                $scope.btnQuery = function () {
                    $scope.btnRefresh();
                }

                //�����ť
                $scope.btnClear = function () {
                    $scope.areaName = "";
                    $scope.pinYin = "";
                }
            }]
    });