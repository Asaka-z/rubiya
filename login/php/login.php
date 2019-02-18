<?php
	
	//连接数据库
	include 'connect.php';
	//接收数据
	//isset — 检测变量是否已设置并且非 NULL
	$name=isset($_POST['username']) ? $_POST['username'] : '18249956530';
	$psw=isset($_POST['psw']) ? $_POST['psw'] : 'zx123456';

	//写查询语句
	$sql="SELECT * FROM info WHERE `phone`='$name' and `password`='$psw'";
	//执行：内部编译
	$res=$conn->query($sql);//结果集
	// $result = $row -> fetch_assoc();
	// var_dump();

	//num_rows函数返回结果集中行的数目。
	if($res->num_rows>0){
		echo 'yes';//用户名密码都正确，可以登陆
	}else{
		echo 'no';//不正确，不可以登陆
	}
?>