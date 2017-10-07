<?php
    $mapid = $_GET["mapid"];
	$keyword = $_GET["keyword"];
?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Bar Chart</title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
			var options = {
	            chart: {
	                renderTo: 'container',
	                type: 'bar'
	            },
	            title: {
	                text: '預算直條圖',
	                x: -20 //center
	            },
	            subtitle: {
	                text: '',
	                x: -20
	            },
	            xAxis: {
	                categories: []
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: '預算'
	                },
	                labels: {
	                    overflow: 'justify'
	                }
	            },
	            tooltip: {
	                formatter: function() {
	                        return '<b>'+ this.series.name +'</b><br/>'+
	                        this.x +': '+ this.y;
	                }
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: -10,
	                y: 100,
	                borderWidth: 0
	            }, 
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            series: []
	        }
	        
	        $.getJSON("data.php?mapid="+<?php echo $mapid; ?>, function(json) {
				options.xAxis.categories = json[0]['data'];
	        	options.series[0] = json[1];
		        chart = new Highcharts.Chart(options);
	        });
	    });
		</script>
	    <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
	</head>
	<body>
		<div id="container" style="min-width: 400px; height: 800px; margin: 0 auto"></div>
				
		<center>
		<?php echo "<a href=list1.PHP?keyword=".$keyword.">返回</a>"; ?><br/>
		<a href="search.php">重新查詢</a>
		</center>
	</body>
</html>