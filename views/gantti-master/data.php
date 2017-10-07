<?php

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
	$count = mysql_num_rows($res);
	while($row = mysql_fetch_row($res)) {
   
	    $time1 = strtotime($row[5]);
	    $newformat1 = date('Y-m-d',$time1);
		$Y = date('Y',$time1);
		$m = date('m',$time1);
		$d = date('d',$time1);
		//echo $Y;
	    $time2 = strtotime($row[6]);
	    //$newformat2 = date('Y-m-d',$time2);
	    //echo $newformat2;

        
		$data = array();		
		
		//echo $newformat1."<br/>";
		//echo $Y."-".$m."-".$d."<br/>";
		
		//echo $newformat1;
        
        	
        
        //echo $row[3]."<br>";
		


        	
		for($j = 1; $j <= $count; $j++) {
		
		$data[] = array(
        'label' => '1234',
        'start' => '2012-03-01', 
        'end'   => '2012-04-01'
        );
				
	    }
		
		
    }
?>