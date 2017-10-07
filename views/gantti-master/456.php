<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>

<style type="text/css">
<!--
.style1 {color: #FFFFFF}
body {
	background-color: #FFFFCC;
}
-->
</style>
<title>關鍵字查詢</title><center>
<?PHP 
    ini_set("error_reporting","E_ALL & ~E_NOTICE");
	//擷取表單資料
	//$select=$_GET["select"];
	$keyword=$_GET["keyword"];
   
	//判斷查詢項目名稱
	/*if($select=="book_name") {
	    $select_name="書名";
	}
	if($select=="author") {
	    $select_name="作者";
	}
	if($select=="publisher") {
	    $select_name="出版者";
	}
	
	switch($select){
	    case "book_name":
		    $select_name="書名";
		break;
		case "author":
		    $select_name="作者";
		break;
		case "publisher":
		    $select_name="出版者";
		break;
	 
	}*/
     	
	
    //連結資料庫, 進行關鍵字查詢	
    mysql_connect("localhost", "root", "1234");
    mysql_select_db("mindweb");
    $sql = "select * from map where mapname like '%$keyword%'"; 
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);
    $count = mysql_num_rows($res);   

    //每5筆記錄分頁，計算總頁數
    $show=ceil($count/5); 
    //echo $count;
   
   //輸出顯示
    if($count == 0) {
        echo "<H2><font color=red>Sorry！</font>系統資料中並無您所查詢圖書資料</h2>";
    } else {	
	    $page = $_GET["page"];
        if($page == NUlL) {$page=1;}
        $start = 5 * ($page - 1);
        $sql = "select * from map where mapname like '%$keyword%' limit $start, 5";
		//mysql_query("SET NAMES 'big5'");
	    $res = mysql_query($sql);
	
   	    echo "<h4>標題包含\"<font color=red>".$keyword."</font>\"，共有 <font color=blue>".$count."</font> 筆記錄　  　目前顯示第 <font color=blue>".$page."</font> 頁<h4>";
         
?>
        <table border=1 align=center> 
	    <tr>
		<th width=300 bgcolor="#000033"><span class="style1">會議名稱
	    </span>
	    <!--<th width=60 bgcolor="#000033"><span class="style1">出版者
	    </span>-->
	    <th width=100 bgcolor="#000033"><span class="style1">內容
	    </span>
	    <th width=100 bgcolor="#000033"><span class="style1">甘特圖
<?PHP
		while($row = mysql_fetch_row($res)) {
?>   
            </span>
	        <tr bgcolor="#CCFF99" align=center>
<?php
	        echo "<td>".$row[1];
			//echo "<td>".$row[2];
			//echo "<td>".$row[3];
?>
	        <td><?php echo "<a href=789.PHP?mapid=".$row[0]."&keyword=".$keyword.">資料</a>"; ?>
			<td><?php echo "<a href=test1.PHP?mapid=".$row[0]."&keyword=".$keyword.">資料</a>"; ?>
<?php	  
        }
?>
        </table>
        <H4>
<?php 
        echo "共<font color=red>".$show."</font>頁　　選擇第 ";
        for($i = 1; $i <= $show; $i++) {
        echo "<a href=456.php?page=".$i."&keyword=".$keyword.">".$i."</a> ";
    }
    echo "頁";
}
?>
</H4>
<p align=center><a href="123.PHP">重新查詢</a>

