<?php
error_reporting(0);
// Include the information needed for the connection to
// MySQL data base server. 
require_once("dbconfig.php");
checkLogin(5,false);

// get the requested page
$page = (int)$_REQUEST['page'];
// get how many rows we want to have into the grid
// rowNum parameter in the grid
$limit = (int)$_REQUEST['rows'];
// get index row - i.e. user click to sort
// at first time sortname parameter - after that the index from colModel
if ($limit <= 0) $limit=1;
$sidx = $_REQUEST['sidx'];
// sorting order - at first time sortorder
$sord = $_REQUEST['sord']; 
//$mid=999;
// if we not pass at first time index use the first column for the index
if(!$sidx) $sidx =1;
// connect to the MySQL database server

$contentID = readPOST('cid');
// calculate the number of rows for the query. We need this to paging the result
switch ($contentID) {
	case 'map':
		$sqlc="SELECT COUNT(*) AS count FROM map";
		$sql="SELECT mapid as ID, mapname, isanonymity,active,status FROM map";
		$fieldCount=4;
		$reqLvl=1;
		$sidx=" active"; //always sort by active state, active first
		$sord="desc";
		break;
	case 'userList':
		$mid = (int)readPOST('mapid');
		$sqlc="SELECT COUNT(*) AS count FROM accessControl where mapid=$mid";
		$sql="SELECT aclID, userId FROM accessControl where mapid = $mid";
		$fieldCount=2;
		$reqLvl=1;
		break;
	default:
		$sql="";
}


if ($sql > ' ') {
	$result = mysql_query($sqlc) or die ('DB error');
	$row = mysql_fetch_array($result) or die('cannot count.');
	$count = $row['count'];
	mysql_close($result);

// calculation of total pages for the query
	if( $count >0 ) {
		$total_pages = ceil($count/$limit);
	} else {
		$total_pages = 0;
	}

// if for some reasons the requested page is greater than the total
// set the requested page to total page
	if ($page > $total_pages) $page=$total_pages;

// calculate the starting position of the rows
	$start = $limit*$page - $limit; // do not put $limit*($page - 1)
// if for some reasons start position is negative set it to 0
// typical case is that the user type 0 for the requested page
	if($start <0) $start = 0;

// the actual query for the grid data
		$sql .= " ORDER BY $sidx $sord LIMIT $start, $limit";
//echo $SQL;

	$result = mysql_query( $sql ) or die("Couldn t execute query.".mysql_error());

// constructing a JSON
	$responce->page = $page;
	$responce->total = $total_pages;
	$responce->records = $count;

	while($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
		$tempArr=array();
		foreach ($row as $field => $val) {
				$tempArr[] = nl2br($val);
		}
		$responce->rows[]=array('id'=>$tempArr[0],'cell'=>$tempArr);
	}
} 
echo json_encode($responce);

//若不知此頁傳過來的參數是什麼，可以如下列印出來：

/*$f =fopen("a.txt","a");
foreach($_REQUEST as $key=>$vv){
   $str .=' key:'.$key.' value:'.$vv . "\r\n";
}
    fwrite($f,"mid= $mid" );
    fwrite($f,$str );
    fwrite($f,$sqlc."\r\n");
    fwrite($f,$count."\r\n");
    fwrite($f,$sql."\r\n");
	fwrite($f,json_encode($responce)."\r\n");
    fclose($f); 
*/
exit(0);

?>