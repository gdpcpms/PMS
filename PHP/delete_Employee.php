<?php
include_once('./config.php')
 
$EmployeeID=$_POST['EmployeeID'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("连接失败!");
}
 
$sql = "delete from Employee where EmployeeID=".$EmployeeID.";";
if (mysqli_query($conn, $sql)) {
    echo "删除成功";
} else {
    echo $sql;
}

mysqli_close($conn);
?>