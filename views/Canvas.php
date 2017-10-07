<?php
//Canvas
if(isset($_POST['html_canvas'])){
	$order_id = $_POST['order_id'];
	$type_id = $_POST['type_id'];
	$html_canvas = $_POST['html_canvas'];
	$image = base64_decode(substr($html_canvas, 22));
	header('Content-Type: image/png');
	$filename =  $order_id.'-'.$type_id.".png";
	$fp = fopen($filename, 'w');
	fwrite($fp, $image);
	fclose($fp);
}
?>