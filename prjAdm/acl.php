<?php
require_once('dbconfig.php');
checkLogin(10,true);

for ($i=80800;$i<80833;$i++) {
	$sql="insert into accessControl (mapid, userId) select mapid, $i from map";
	mysql_query($sql);
}
	$sql="insert into accessControl (mapid, userId) select mapid, 111 from map";
	mysql_query($sql);
	$sql="insert into accessControl (mapid, userId) select mapid, 222 from map";
	mysql_query($sql);
?>

OK
