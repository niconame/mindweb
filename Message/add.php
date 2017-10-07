<?header("location:view.php");?>       //重新導向到view.php檔案
<?php
include("db.php");                    //匯入db.php檔案
/* 接收表單資料 */
$name=$_POST["name"];
$mail=$_POST["mail"];
$subject=$_POST["subject"];
$content=$_POST["content"];
/* 將欄位資料加入資料庫 */
$sql="INSERT guestbook (name,mail,subject,content,putdate)
VALUES ('$name','$mail','$subject','$content',now())";
mysql_query($sql);
?>