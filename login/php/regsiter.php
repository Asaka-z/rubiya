<<<<<<< HEAD

  <?php
  //获取用户名
  $phone = $_GET['phone'];
  $password=$_GET['password'];
  //连接数据库
  $coon = new mysqli('localhost','root','','db_student_admin',3306);
  //查询数据
   $sql = "SELECT*FROM info WHERE phone = '$phone'";
   //添加数据
  $inserting =  "INSERT INTO info(phone, password) VALUES('18249956530','123456');";
  //执行语句
  //$row1 = $coon -> query($inserting);
  $row = $coon -> query($sql);
  $row1 = $coon -> query($inserting);
  //var_dump($row);
  //获取返回的第一条数据
  $result = $row -> fetch_assoc();
  //var_dump($result);
  
  //如果查询到数据，返回一个对象，为关联数组
  //查不到数返回null
  if($result){
      //查到数据
      $arr = array("code" => "1000","data" => "");
      
  }else{
      //没有查到
      $arr = array("code" => "0","data" => "");
  
  }
  echo json_encode($arr)  ;
  ?>
  
=======
<?php
    /*
        接收前端传过来的用户名和密码,将两个数据插入到数据表里面
    
     */
    //连接数据库
    include 'connect.php';
    
    //接收数据
    $name=isset($_POST['username']) ? $_POST['username'] :'';
    $psw=isset($_POST['psw']) ? $_POST['psw'] :'';
 
    //  echo $name;//成功接收了

    //写sql语句
    $sql="INSERT INTO info (phone,password) VALUES('$name','$psw')";
    
    //执行语句
    $res=$conn->query($sql);//返回布尔值，插入成功返回true，否则返回false
    // var_dump(res);
    
    if($res){
        //注册成功返回yes否则返回no
        echo 'yes';
    }else{
        echo 'no';
    }
    
    //关闭数据库
    $conn->close();
?>
>>>>>>> 7367fc770f754c1dd8aa92fea07f0356615c71b8
