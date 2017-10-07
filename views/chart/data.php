<?php
    $mapid = $_GET["mapid"];

    mysql_connect("localhost", "ben", "1125");
    mysql_select_db("mindweb");
    $sql = "select * from node where MapID = '$mapid'";
    mysql_query("SET NAMES 'UTF8'");
    $res = mysql_query($sql);

    $category = array();
    $category['name'] = 'Content';

    $series1 = array();
    $series1['name'] = 'budget';

    while($r = mysql_fetch_array($res)) {
        $category['data'][] = $r['Content'];
        $series1['data'][] = $r['budget'];
    }

    $result = array();
    array_push($result,$category);
    array_push($result,$series1);

    print json_encode($result, JSON_NUMERIC_CHECK);
?>