<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>查詢</title>
<style type="text/css">
<!--
.style1 {
	font-family: "標楷體";
	font-size: 36px;
	color: #CC0000;
	font-weight: bold;
}
.pha {
	font-family: "標楷體";
	font-size: medium;
	color: #000099;
	background-color: #D7FFFF;
	border-top-color: #000099;
	border-right-color: #000099;
	border-bottom-color: #000099;
	border-left-color: #000099;
	font-weight: bold;
}
body {
	background-color: #99FFFF;
}
-->
</style>
</head>

<body>
<p align="center" class="style1">查詢</p>
<hr />
<form id="form1" name="form1" method="get" action="456.php">
  <div align="center">
    <!--<select name="select" class="pha">
      <option value="book_name">書名</option>
      <option value="author">作者</option>
      <option value="publisher">出版者</option>
    </select>-->
    <input name="keyword" type="text" class="pha" style="WIDTH:20%" onFocus="if(this.value.indexOf('關')!=-1) this.value=''" onBlur="if(this.value)=='' this.value='關鍵字'" onKeyDown="if(event.which || event.keyCode){if((event.whick==13 || event.keyCode==13)){document.submit.click();return false;}}else{return true};" value="關鍵字" >
    <input type="submit" name="Submit" value="查詢" />
  </div>
</form>
<p>&nbsp;</p>
<p>&nbsp;</p>
</body>
</html>
