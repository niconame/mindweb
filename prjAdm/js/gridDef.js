				 
function setupGrid(cid) {
	var customBts = [];
	var isSubgrid = false;
	var subgridFunc = null;
	var div='mainDiv';
	var queryStr=""
	switch (cid) {
		case 'map':
			cNames=['ID','專案名稱','匿名','啟用狀態','個案狀態','--'];
		    cModel=[
				{name:'ID',index:'ID', width:30, editable: false},
				{name:'mapname',index:'mapname', width:160, editable: true, editrules:{required:true}},
				{name:'isanonymity',index:'isanonymity', width:100, editable: true, edittype:"select", editoptions:{value:"0:具名;1:匿名"}},
				{name:'active',index:'active', width:60, editable: true, edittype:"select", editoptions:{value:"0:停用;1:正常"}},
				{name:'status',index:'status', width:60, editable: true, edittype:"select", editoptions:{value:"0:執行中;1:規劃中;2:結案"}},
				{name:'act',index:'act', width:100, editable: false, sortable: false}
				];
			caption= "專案管理";
			bts='DSE';
			navOptions={search:false};
			isSubgrid = true;
			subgridFunc = initUserList;
			break;

		default:
			alert('參數錯誤!');
			return;
	}
	initGrid(div, cid, queryStr, cNames, cModel, caption, bts, navOptions,customBts, isSubgrid, subgridFunc);
}

// initiate subgrid of producttype
function initUserList(div, row_id) {
	//alert(row_id)
	cid='userList';
	queryStr="&mapid="+row_id;
	cNames=['aclID','userId','--'];
    cModel=[
        {name:'aclID',index:'aclID', width:40, editable: false},
    	{name:'userId',index:'userId', width:160, editable: true, editrules:{required:true}},
		{name:'act',index:'act', width:80, editable: false, sortable: false, searchable: false}
		];
//	caption= "捐獻類別:產品類別";
	bts='DSE';
	navOptions={search:false};
	caption="授權使用者";
	initGrid(div, cid, queryStr, cNames, cModel, caption, bts, navOptions,[], false, null);
return true;
}
