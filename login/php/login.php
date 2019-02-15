<?php
<<<<<<< HEAD
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    // 获取用户名
    $username = $json -> username;
    // 获取密码
    $pwd = $json -> pwd;

    $coon = new Mysqli("localhost", "root", "", "db_student_admin", 3306);
    $sql = "select * from info where phone='$phone'and password=$password";

    $coon->query("SET CHARACTER SET 'utf8'");//读库   
    $coon->query("SET NAMES 'utf8'");//写库  
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();
    if($result) {
        // 登录成功
        $arr = array("code" => "200", "msg" => "", "data" => array("phone" => $result['phone']));
    } else {
        // 登录失败
        $arr = array("code" => "1000", "msg" => "用户名或者密码输入错误", "data" => array());
    }
    echo json_encode($arr);
=======
	
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
>>>>>>> 7367fc770f754c1dd8aa92fea07f0356615c71b8
?>