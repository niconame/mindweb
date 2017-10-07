<html>
<head>
<title>列出所有留言</title>
</head>
<body>
<a href="board.php">寫寫留言</a><p>
<?php
include("db.php");
/* 查詢欄位資料 */
$sql="select * from guestbook order by no desc";  //從guestbook讀取資料並依no欄位做遞減排序
$result=mysql_query($sql);
/* 顯示資料庫資料 */
while (list($no,$name,$mail,$subject,$content,$putdate)
      =mysql_fetch_row($result))
{
echo "留言主題:".$subject;
echo "<br>留言內容:".nl2br($content);
echo "<br>留言時間:".$putdate;
echo "<hr>";
}
echo "共".mysql_num_rows($result)."筆留言";
?>
</body>
</html>