<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" href="styles/css/button.css" />
</head>

<style type="text/css">
<!--
.tablecontent{
	colore:#737373;
}
.tabletitle{
	color: #17174A;
	font-weight: bold;
}
#main {
		font-family: "新細明體";
        width: 850px;   
		height: 405px;
        margin: auto;   
		background-color: #B8B8DB;
        }
-->
</style>
<title>查詢結果</title><center>
<div id="main">
<body>
<br/>
<?PHP 
    ini_set("error_reporting","E_ALL & ~E_NOTICE");
	$keyword = $_GET["keyword"];
	
    mysql_connect("localhost", "ben", "1125");
    mysql_select_db("mindweb");
    $sql = "select * from map where mapname like '%$keyword%'"; 
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);
    $count = mysql_num_rows($res);   

    //每5筆記錄分頁，計算總頁數
    $show = ceil($count / 5); 
   
    //輸出顯示
    if($count == 0) {
        echo "<H2><font color = red>Sorry！</font>專案會議中並無您所查詢的名稱，請重新查詢</h2>";
    } else {	
	    $page = $_GET["page"];
        if($page == NUlL) {$page=1;}
        $start = 5 * ($page - 1);
        $sql = "select * from map where mapname like '%$keyword%' limit $start, 5";
	    $res = mysql_query($sql);
	
   	    echo "<h4>專案名稱包含\"<font color=red>".$keyword."</font>\"，共有 <font color=blue>".$count."</font> 筆記錄　  　目前顯示第 <font color=blue>".$page."</font> 頁<h4>";
         
?>
		<hr />
		<br/>
        <table  align=center cellpadding=2px frame=hsides> 
	    <tr>
		<th colspan=5 width=500 bgcolor="#6D6DBA"><span class="tabletitle">專案名稱
	    </span>

<?PHP
		while($row = mysql_fetch_row($res)) {
?>   
	        <tr  align=center font color="#17174A">
<?php
	        echo "<td> <font color=#1F1F61>".$row[1]."</font>";
			
?>
	        <td><?php echo "<input class=content type=button value=個別進度 onclick=location.href='list2.PHP?mapid=".$row[0]."&keyword=".$keyword."'>"; ?>
			<td><?php echo "<input class=gantt type=button value=甘特圖 onclick=location.href='ganttchart.PHP?mapid=".$row[0]."&keyword=".$keyword."'>"; ?>
			<td><?php echo "<input class=budget type=button value=預算圖 onclick=location.href='barchart.PHP?mapid=".$row[0]."&keyword=".$keyword."'>"; ?>

<?php	  
        }
?>
        </table>
        <H4>
<?php 
        echo "共<font color=#1F1F61>".$show."</font>頁　　前往第 ";
        for($i = 1; $i <= $show; $i++) {
        echo "<a href=456.php?page=".$i."&keyword=".$keyword.">".$i."</a> ";
    }
    echo "頁";
}
?>
</H4>
<p align=center>
<a href="search.PHP">重新查詢</a>
</div>
</body>

