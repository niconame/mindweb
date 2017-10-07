

<?php
require_once("dbconfig.php");
//define ("AUTHENTICATE_SALT", "");
				$_SESSION['userName'] = '';
				$_SESSION['userID'] = -1;
				$_SESSION['accessLvl'] = 0;

	$userName = readPOST("username");
	$passWord = readPOST("password");
$msg="請輸入帳號密碼";
	if ($userName > " " && $passWord > " ") {
	// Received Username/Password to authenticate.
		//$passWord = $passWord . AUTHENTICATE_SALT;
		$sql = "SELECT userid, name, level, active FROM user WHERE userid='" . $userName . "' AND pwd= '" . $passWord . "'";

		if ($result = mysql_query($sql)) {
			if ($row=mysql_fetch_array($result)) {
				if ($row['active']>0) {
					$_SESSION['userName'] = $row['name'];
					$_SESSION['userID'] = $row['userid'];
					$_SESSION['accessLvl'] = $row['level'];
					header("Location: admin.php");
					exit(0);
				} else {
					$msg="帳號已被停用，若有問題請洽詢系統管理員<br />";
				}
			} else {
				$msg= "帳號密碼錯誤，請重新登入 <br />";
			}
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  style="height: 100%;">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Signika:400,700' rel='stylesheet' type='text/css'>
</head>
<style type="text/css">

h1{
	color: red;
	font-family: "Signika",Amatic SC;
}
#content {
    width: 300px;
    height: 400px;
    margin: 50px auto;
    padding: 100px;
    border: 1px;
    

}
tr td{
	height:30px;
	font-family: 'Montserrat', sans-serif;
	font-size:20px;
	
}
#loginbutton{
    padding:3px 3px 3px 3px;
	font-family: 'Montserrat', sans-serif;
	font-size :18pt;	
    border-radius: 5px;
	color: #4777BE;
    background:white;
	height :30px;
	width :125px;
	border-style:none;
	
}
#loginbutton:hover {
	font-family: 'Montserrat', sans-serif;
    padding:3px 3px 3px 3px;
	font-size :18pt;
    border-radius: 5px;
    height: 30px;
	width:125px;
    color: white;
    background: #4777BE;
    border-style:none;
}
</style>

<body>
<div id="content" align="center"><h1>MindLinker  Admin</h1>
  <form method="post">
  <div align="center">
   <table id="login" >
		
		<tr><td align="center" colspan="2"><img src="images\group2.png" ></td></tr>
        <tr><td align="left">UserID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<td><input type="text" name="username"></td><td></td></tr>
        <tr><td align="left">Password: <td><input type="password" name="password"></td><td></td></tr>
		<tr><td colspan="2" align="center"><input id="loginbutton" type="submit" value="Login"></td></tr>	   

    <table>
  </form>
   </div>
 </div>
</body>
</html>
