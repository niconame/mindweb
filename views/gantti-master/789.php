<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>

<style type="text/css">
<!--
.style12 {font-family: "標楷體"; font-size: 24px; color: #FFFFFF; }
.style14 {
	color: #000099;
	font-size: 24px;
	font-family: "標楷體";
	font-weight: bold;
}
body {
	background-color: #CCFFFF;
}
-->
</style>

<?PHP 
    //擷取URL參數
    $mapid = $_GET["mapid"];
    //$select=$_GET["select"];
    $keyword = $_GET["keyword"];	
    //連結資料庫,進行查詢
    mysql_connect("localhost", "root", "1234");
    mysql_select_db("mindweb");
    $sql = "select * from node where MapID like '$mapid'"; 
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);
?>

    <title>查詢結果</title><p>
    <table border=1 align=center> 
	<tr>
	<th width=300 bgcolor="#F4FA58"><span class="style1">內容
	</span>
	<th width=100 bgcolor="#F4FA58"><span class="style1">開始時間
	</span>
	<th width=100 bgcolor="#F4FA58"><span class="style1">結束時間
	</span>
	<!--<th width=60 bgcolor="#F4FA58"><span class="style1">內容-->
<?PHP
	while($row = mysql_fetch_row($res)) {
?>   
        </span>
	    <tr bgcolor="#CCFF99" align=center>
<?php
	    echo "<td>".$row[3];
		echo "<td>".$row[5];
		echo "<td>".$row[6];
    }
?>
    </table>

<p>

<center>
<?php echo "<a href=456.PHP?keyword=".$keyword.">返回</a>"; ?>
　　<a href="123.php">重新查詢</a>
</center>
