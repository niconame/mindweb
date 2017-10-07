<?php
session_start();
$dbhost = 'localhost';
$dbuser   = 'root';
$dbpassword = 'tg5hv8nb';
$database = 'mindweb';

$db = mysql_connect('localhost', $dbuser, $dbpassword)
or die("Connection Error: " . mysql_error());

mysql_query("SET NAMES utf8");
date_default_timezone_set('Asia/Taipei');
// select the database
mysql_select_db($database) or die("Error conecting to db.");


//-------------------
function readPOST($n) {
	$ret= null;
	if (isset($_POST[$n])) {
		$ret=$_POST[$n];
	} elseif (isset($_GET[$n])) {
		$ret=$_GET[$n];
	} 
	return mysql_real_escape_string(trim($ret));
}

function checkLogin($lvl=0,$failToLogin=false) {
	if(!isset($_SERVER['REQUEST_URI'])){
		$uri = $_SERVER['PHP_SELF']; 
	}else{
		$uri = $_SERVER['REQUEST_URI'];
	}

//	$uri= basename($uri);
	if ( $_SESSION['accessLvl'] < $lvl) {
		if ($failToLogin) {
			header("Location: login.php?ref=" . base64_encode(rand(10000,90000) . $uri));
		}
		return false;
	}
	return true;
}

//
//
function genDependList($fName, $sql, $defVal=NULL,$allowNull=false,$onChange="") {
	if ($onChange>' ') $onChange = "onchange='$onChange'";
	$sign=true;
	$str="";
	if ($sql > ' ') {
		if ($resX=mysql_query($sql)) {
			while ($r=mysql_fetch_row($resX)) {
				if ($defVal === $r[0]) {
					$selected=" selected ";
					$sign=false;
				} else $selected="";
				$str .= "<option value='" . $r[0] . "' $selected >" . $r[1]. "</option>";
			}
			mysql_free_result($resX);
		}
	}
	if ($sign) {
		$selected=" selected ";
	} else $selected="";
	if ($str > ' ') {
		if ($allowNull) $str = "<option value='' $selected >-請選擇-</option>" . $str;
		$str= "<select name='$fName' id='$fName' $onChange >" . $str . "</select>";
	} else {
		$str= "<input type='hidden' name='$fName' value='$defVal' />";
	}
	return $str;
}

function genDependListFromArray($fName, $arr, $defVal=NULL,$allowNull=false,$onChange="") {
	if ($onChange>' ') $onChange = "onchange='$onChange'";
	$sign=true;
	$str="";
	foreach ($arr as $key => $val) {		
		if ($defVal == $key) {
			$selected=" selected ";
			$sign=false;
		} else $selected="";
		$str .= "<option value='" . $key . "' $selected >" . $val. "</option>";
	}

	if ($sign) {
		$selected=" selected ";
	} else $selected="";
	
	if ($allowNull) $str = "<option value='' $selected >-請選擇-</option>" . $str;
	$str= "<select name='$fName' id='$fName' $onChange >" . $str . "</select>";
	return $str;
}


function genEditList($fName, $sql, $defVal=NULL,$allowNull=false,$onChange="") {
	$sign=true;
	$str="";
	if ($sql > ' ') {
		if ($resX=mysql_query($sql)) {
			while ($r=mysql_fetch_row($resX)) {
				if ($defVal === $r[0]) {
					$selected=" selected ";
					$sign=false;
				} else $selected="";
				$str .= "<option value='" . $r[0] . "' $selected >" . $r[1]. "</option>";
			}
			mysql_free_result($resX);
		}
	}
	if ($sign) {
		$selected=" selected ";
	} else $selected="";
	if ($str > ' ') {
		$str= "<select name='$fName' id='$fName'  >" . $str . "</select>";
		$str .= "<script type='text/javascript'>
		alert(11);
		\$(function() {
			\$('#$fName').editableSelect({
				bg_iframe: false,
				onSelect: function(list_item) {
					thisValue=list_item.val();
					alert(thisValue);
					$onChange;
        		}
      		});
		});
	</script>";
	} else {
		$str= "<input type='hidden' name='$fName' id='$fName' value='$defVal' />";
	}
	
	return $str;
}


function dateConvert($date = NULL) {
	if ($date > ' ') {
//		$date = preg_replace("/", "-", $date);
		$timestamp = strtotime($date);
		$date= "'" . date('Y-m-d', $timestamp) . "'"; // returns YYYY-MM-DD
	} else $date='NULL';
	return $date;
}

function ripSpace($str) {
	$str = str_replace("　","",$str);
	$str = str_replace(" ","",$str);
	return $str;
}

function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

?>