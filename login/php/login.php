<?php
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
?>