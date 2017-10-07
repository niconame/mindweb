<?php
require_once('dbconfig.php');
checkLogin(5,false);
$oper =$_REQUEST['oper'];

$id =readPOST('id');
$xid =$_REQUEST['cid'];
$str_test='';// 捕獲參數

switch ($oper) {
case 'add':
	switch ($xid) {
		case 'map':
			$mname =readPOST('mapname');
			$active = (int)readPOST('active');
			$isanonymity =(int)readPOST('isanonymity');
			$status =(int)readPOST('status');
			$sql ="insert into map (mapname, active, status, isanonymity) values ('$mname',$active,$status,$isanonymity)";
			break;
		case 'userList':
		$mid= (int)readPOST("mapid");
			$userid = readPOST('userId');
			$sql ="insert into accessControl (mapid, userId) values ($mid, $userid)";
			break;
		default:
	}
	if ($sql> " ") {
		$res =mysql_query($sql);
		$id = mysql_insert_id();
	} else {
		$res=false;
		$id=0;
	}
//若不知此頁傳過來的參數是什麼，可以如下列印出來：
/*
foreach($_REQUEST as $key=>$vv){
   $str_test .=' key:'.$key.' value:'.$vv . "\n";
}
   $f =fopen("a.txt","a");
    fwrite($f,"$str_test\r\n");
    fwrite($f,$sql);
    fclose($f);
*/
	if($res){
		exit(json_encode(array('success'=>true,'errors'=>'add sucess!', 'id'=> $id)));
	}else{
		exit(json_encode(array('success'=>false,'errors'=>'add no sucess!')));
	}
	break;
case 'edit':
	switch ($xid) {
		case 'map':
			$mname =readPOST('mapname');
			$active = (int)readPOST('active');
			$isanonymity =(int)readPOST('isanonymity');
			$status =(int)readPOST('status');
			$sql ="update map set mapname='$mname', active=$active, status=$status,isanonymity=$isanonymity  where mapid =$id";
			break;
		case 'userList':
			$userid = readPOST('userId');
			$sql ="update accessControl set userId=$userid where aclID=$id";
			break;
		default:
	}

	if ($sql> " ") {
		$res =mysql_query($sql); 
		$res=(mysql_affected_rows($res) > 0);
	} else $res=false;

	if($res ){
		exit(json_encode(array('success'=>true,'errors'=>'edit sucess!')));
	}else{
		exit(json_encode(array('success'=>false,'errors'=>'edit false!')));
	}
	break;
case 'del':
	switch ($xid) {
		case 'map':
			$sql ="update map set active=0 where mapid=$id ";
			break;
		case 'userList':
			$sql ="delete from accessControl where aclID =$id ";
			break;
		default:
	}

	$res =mysql_query($sql);
	if($res){
    	exit(json_encode(array('success'=>true,'errors'=>'del sucess!')));
	}else{
		exit(json_encode(array('success'=>false,'errors'=>'del false!')));
	}
	break;
default:
}
?>
