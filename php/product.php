<?php
	$conn=mysqli_connect("127.0.0.1","root","","amx",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$sql="SELECT * FROM product ORDER BY id DESC LIMIT 4";
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while(($row=mysqli_fetch_row($result))!=null){
		Array_push($arr,$row);
	}
	echo JSON_encode($arr);
?>