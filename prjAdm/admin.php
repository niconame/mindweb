<?php
require_once('dbconfig.php');
checkLogin(5,true);
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" -->
<html xmlns="http://www.w3.org/1999/xhtml"  style="height: 100%;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="js/jquery-ui.css" />
<link rel="stylesheet" type="text/css" media="screen" href="js/ui.jqgrid.css" />
<style type="text/css">
.reportTables { border-collapse:collapse; }
.reportTables td{ border: solid 1px; padding:5px; }
.reportTables th{ border: solid 1px; padding:5px; }
.reportTable {
	font-size: 12px;
	background: #fff;
	margin: 45px;
	border-collapse: collapse;
	text-align: left;
}
.reportTable th {
	font-size: 14px;
	font-weight: normal;
/*	color: #039; */
	padding: 10px 8px;
	border-bottom: 2px solid #6678b1;
}
.reportTable td {
	border-bottom: 1px solid #ccc;
/*	color: #669; */
	padding: 6px 8px;
}
/*.reportTable tbody tr:hover td {
	color: #009;
}*/
.hidden { display: none;}

.loading {
   position:absolute;
    width:100%;
    height:100%;
	top: 0;
	left: 0;

    background-color:#000000;
    filter:alpha(opacity=60);
    opacity:0.6;
    -moz-opacity:0.6;
    z-index:1000;
    text-align:center;
    vertical-align:middle;
}
</style>
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery-ui.js" type="text/javascript"></script>
<script src="js/grid.locale-tw.js" type="text/javascript"></script>
<script src="js/jquery.jqGrid.js" type="text/javascript"></script>
<script src="js/jqGridHelper.js" type="text/javascript"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script>
<script src="js/messages_tw.js" type="text/javascript"></script>
<script src="js/gridDef.js" type="text/javascript"></script>
<script type="text/javascript">
var mainDiv='mainDiv';


function initPage() {
	$('#editDiv').dialog({modal: true, autoOpen: false, width: '95%', position: 'top'});
	setupGrid('map')
}



</script>
</head>
<body style="margin:0pt; height:100%; padding:0;z-index:0;"  onload="initPage();">
	<table width="100%"><tr><td align="left"><a href="./"></a></td>
	<td align="center"><h3>MindWeb資料管理</h3></td><td align="right"></td></tr></table>
    <table border="0" width="100%">
	<tr><td> </td></tr></table>
	<hr />
<div id='mainDiv' align="center"></div>
<div id='editDiv'></div>
<div id='waiting' class='loading' style="display: none;"><div style='height: 200px;'></div><img src='images/waiting.gif' /><div></div></div>
</body>
</html>
