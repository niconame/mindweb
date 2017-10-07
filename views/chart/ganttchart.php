<?php
    require('lib/gantti.php');

    $mapid = $_GET["mapid"];
    $keyword = $_GET["keyword"];	
    mysql_connect("localhost", "ben", "1125");
    mysql_select_db("mindweb");
    $sql = "select * from node where MapID = '$mapid'"; 
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);
	$count = mysql_num_rows($res);
	
	$data = array();
	
	while($row = mysql_fetch_row($res)) {
	    $data[] = array(
        'label' => $row[3],
        'start' => $row[5], 
        'end'   => $row[6]
        );
	}

    date_default_timezone_set('UTC');
    setlocale(LC_ALL, 'en_US');

    $gantti = new Gantti($data, array(
        'title'      => '專案名稱',
        'cellwidth'  => 25,
        'cellheight' => 35,
        'today'      => true
    ));
?>

<!DOCTYPE html>
<html lang="en">
<head>
  
<title>Gantt Chart</title>
<meta charset="utf-8" />

<link rel="stylesheet" href="styles/css/screen.css" />
<link rel="stylesheet" href="styles/css/gantti.css" />

<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>

<body>

<header>

<h1>日程甘特圖</h1>

</header>

<?php echo $gantti; ?>

<center>
<?php echo "<a href=list1.PHP?keyword=".$keyword.">返回</a>"; ?><br/>
<a href="search.php">重新查詢</a>
</center>
</body>

</html>