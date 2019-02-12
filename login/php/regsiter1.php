
  <?php
  //获取用户名
  $phone = $_GET['phone'];
  $password=$_GET['password'];
  //连接数据库
  $coon = new mysqli('localhost','root','','db_student_admin',3306);
  //查询数据
   $sql = "SELECT*FROM info WHERE phone = '$phone'";
   //添加数据
  $inserting =  "INSERT INTO info(phone, password) VALUES('$phone','$password');";
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
      echo "alert("已经注册")";
  }else{
      //没有查到
      $arr = array("code" => "0","data" => "");
      echo "alert("注册成功")";
  
  }
  echo json_encode($arr);
  ?>
  
