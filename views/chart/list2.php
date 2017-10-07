<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>

<style type="text/css">
<!--
.tabletitle{
	color: #17174A;
	font-weight: bold;
}
#main{
	background-color: #B8B8DB;
	width: 850px;
	margin: auto;   
}
-->
</style>
<body>
<div id="main">
<?PHP 
    $mapid = $_GET["mapid"];
    $keyword = $_GET["keyword"];	
    
    mysql_connect("localhost", "ben", "1125");
    mysql_select_db("mindweb");
    $sql = "select * from node where MapID = '$mapid'"; 
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);
?>

    <title>專案內容</title><p>
	<br/>
    <table  align=center cellpadding=2px frame=hsides> 
	<tr>
	<th width=300 bgcolor="#6D6DBA"><span class="tabletitle">內容
	</span>
	<th width=100 bgcolor="#6D6DBA"><span class="tabletitle">開始時間
	</span>
	<th width=100 bgcolor="#6D6DBA"><span class="tabletitle">結束時間
	</span>
	<th width=100 bgcolor="#6D6DBA"><span class="tabletitle">目前進度
	</span>
<?PHP
	while($row = mysql_fetch_row($res)) {
?>   
        </span>
	    <tr bgcolor="#E0EEFF" align=center>
<?php
	    echo "<td> <font color=#1F1F61>".$row[3]."</font>";
		echo "<td> <font color=#1F1F61>".$row[5]."</font>";
		echo "<td> <font color=#1F1F61>".$row[6]."</font>";
		echo "<td> <font color=#1F1F61>".$row[4]."</font>";
    }
?>
    </table>

<p>

<center>
<?php echo "<a href=list1.PHP?keyword=".$keyword.">返回</a>"; ?><br/>
<a href="search.php">重新查詢</a>
</center>
<br/>
<br/>
</div>

</body>
