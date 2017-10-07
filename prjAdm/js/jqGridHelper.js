function genImgButton(bts,id,gridx) {
	var str='';
	for (var i=bts.length-1;i>=0;i--) { //use the buttons parameter buttons
		var ch=bts.charAt(i);
		switch (ch) {
			case 'E':
		str = str + "<img src='images/icon_edit.gif' title='編輯' onClick=\"jQuery('#" + gridx + "').editRow('" + id + "')\">";
				break;
			case 'G':
		str = str + "<img src='images/icon_edit.gif' title='編輯' onClick=\"jQuery('#" + gridx + "').editGridRow('" + id + "')\">";
				break;
			case 'D':
		str = str + "<img src='images/icon_delete.gif' title='刪除' onClick=\"$('#" + gridx + "').delGridRow('" + id + "')\">";
				break;
			case 'C':
		str = str + "<img src='images/icon_reload.gif' title='取消修改' onClick=\"$('#" + gridx + "').restoreRow('" + id + "')\">";
				break;
			case 'S':
		str = str + "<img src='images/icon_save.gif' title='儲存修改' onClick=\"$('#" + gridx + "').saveRow('" + id + "')\">";
				break;
			case 'F':
				var pos = getLeftLowerStrPos(bts,i-1);
				if (pos < i) {
					var func = bts.substring(pos,i);
		str = str + "<img src='images/icon_edit1.gif' title='修改' onClick=\"" + func + "('" + id + "')\">";
				}
				break;
			case 'V':
				var pos = getLeftLowerStrPos(bts,i-1);
				if (pos < i) {
					var func = bts.substring(pos,i);
		str = str + "<img src='images/icon_view.gif' title='查看' onClick=\"" + func + "('" + id + "')\">";
				}
				break;
			case 'P':
				var pos = getLeftLowerStrPos(bts,i-1);
				if (pos < i) {
					var func = bts.substring(pos,i);
		str = str + "<img src='images/icon_print.gif' title='列印' onClick=\"" + func + "('" + id + "')\">";
				}
				break;

	default: //ignore any unrecognized chars
		}
	}
//	alert(str);
	return str;
}

function getLeftLowerStrPos(str, startAt) {
	for (i=startAt;i>=0;i--) {
		if (! isLower(str.charAt(i))) return i+1;
	}
	return i+1;
}

function isLower(ch) {
	return (ch >='a' && ch <='z');
}

function initGrid(div, cid, queryStr, cNames, cModel, caption, buttons, navOptions,customBt, isSubgrid, subgridFunc) {
	var gridx='jggdtbl'+ Math.round(Math.random()*10000);
	var pager='jqgdpgr'+ Math.round(Math.random()*10000);
$('#'+div).html("<table id='" + gridx +"'></table><div id='" + pager + "'></div>");
jQuery('#'+gridx).jqGrid({
    // the url parameter tells from where to get the data from server
    // adding ?nd='+new Date().getTime() prevent IE caching
    url:'jqGridJSON.php?cid='+cid + queryStr,
    // datatype parameter defines the format of data returned from the server
    // in this case we use a JSON data
    datatype: "json",
    // colNames parameter is a array in which we describe the names
    // in the columns. This is the text that apper in the head of the grid.
    colNames: cNames,
    // colModel array describes the model of the column.
    // name is the name of the column,
    // index is the name passed to the server to sort data
    // note that we can pass here nubers too.
    // width is the width of the column
    // align is the align of the column (default is left)
    // sortable defines if this column can be sorted (default true)
    colModel: cModel,
    // pager parameter define that we want to use a pager bar
    // in this case this must be a valid html element.
    // note that the pager can have a position where you want
    pager: jQuery('#'+pager),
//	toppager:true,
    // rowNum parameter describes how many records we want to
    // view in the grid. We use this in example.php to return
    // the needed data.
    rowNum:10,
    // rowList parameter construct a select box element in the pager
    //in wich we can change the number of the visible rows
//    rowList:[10,20,30],
    // sortname sets the initial sorting column. Can be a name or number.
    // this parameter is added to the url
//    sortname: 'zip',
    //viewrecords defines the view the total records from the query in the pager
    //bar. The related tag is: records in xml or json definitions.
    viewrecords: true,
	gridview: false,
    //sets the sorting order. Default is asc. This parameter is added to the url
//	sortname: sortName,
    sortorder: "desc",
    caption: caption,
//	width: 600,
	height: "100%",
	editurl: "jqGridUpdater.php?cid="+cid+queryStr,
/*	onSelectRow: function(id){
		if(id){
			if (id!==lastsel){
			jQuery('#list2').jqGrid('restoreRow',lastsel);
			jQuery('#list2').jqGrid('editRow',id,true);
			}
			lastsel=id;
		}
	},*/
//	reloadAfterSubmit: true,
	subGrid: isSubgrid,
	subGridRowExpanded: function (div, row_id) {
		if ($.isFunction(subgridFunc)) subgridFunc(div, row_id);
	},
gridComplete: function() {
		var ids = jQuery('#'+gridx).jqGrid('getDataIDs');
		for(var i=0;i < ids.length;i++){ 
			var cl = ids[i];
			var be="";
			be = genImgButton(buttons,cl,gridx);
			jQuery('#'+gridx).jqGrid('setRowData',cl,{act:be}); 
		}
	},
loadComplete: function(data){
	if (cid == 'visitList' || cid== 'noteList') { //hard coded here, ugly but... by JC
		//mark the text with red color if it is TODAY
		var now = new Date();
		var nowStr=now.getFullYear() + "-" + pad2(now.getMonth()+1) + "-" + pad2(now.getDate()); 
//				$("#" + data.rows[i].id).find("tr").addClass("color", "red");
		$.each(data.rows,function(i,itemx){
			if(itemx.cell[1] == nowStr || itemx.cell[3] == nowStr){ //field position hard coded, corresponding to the position in SQL statement in jqGridJSON.php..... by JC
				$("#" + gridx + ' tr:nth-child(' + (i+2) + ')').css("color", "red"); // set the CSS
			}
		});
	}
}
});

	jQuery("#"+gridx).jqGrid('navGrid','#'+pager,navOptions,
		{}, // edit options
		{ //parameters for Add
			closeAfterAdd: true,
			reloadAfterSubmit: false,
			afterSubmit: function (response,postdata) {
				id=$.parseJSON(response.responseText).id;
				return [true, '', id];
			}
		},
		{}, //del options
		{ closeOnEscape: true, multipleSearch: true, 
         closeAfterSearch: true, multipleGroup:false },//search options
		{} // view options
	); //prm pagerID, NavOptions, prmEdit, prmAdd, prmDel, prmSearch, prmView);
	
	//add custom buttons in the navigation bar
	for(var i in customBt){
//		alert(customBt[i]);
		jQuery("#"+gridx).jqGrid('navButtonAdd',"#"+pager,customBt[i]);
	}
	return gridx;
}


function showDiv(div) {
	$('#'+div).show();
}

function hideDiv(div) {
	$('#'+div).hide();
}

function toggleDiv(div) {
	$('#' +div).toggle();
}


function pad2(number) {
	return (number < 10 ? '0' : '') + number  
}



function setCookie(c_name,value)   // c_name: cookie name, value: cookie value, expiredays: cookie 有效天數 
{
//var exdate=new Date()                        // 宣告 exdate
//exdate.setDate(exdate.getDate()+expiredays)  // 將 exdate 設成今天加上過期天數
document.cookie=c_name+ "=" +escape(value);
//document.cookie="test=0";
//+  // 產生 cookie 內容  c_name=escape(value);expires=exdate
//((expiredays==null) ? "" : ";expires="+exdate)
}

function getCookie(c_name)
{
   if (document.cookie.length>0) {
     var c_list = document.cookie.split("\;");
	for ( i in c_list ) {
		var cook = c_list[i].split("=");
		cook[0]=cook[0].replace(/^\s+|\s+$/g,"");
		if (cook[0] == c_name) {
			return unescape(cook[1]);
		}
	} 
  }
  return null
}
