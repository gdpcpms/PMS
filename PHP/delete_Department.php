<?php
include_once('./config.php')
 
$DepartmentID=$_POST['DepartmentID'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("连接失败!");
}
 
$sql = "delete from Department where DepartmentID=".$DepartmentID.";";

if (mysqli_query($conn, $sql)) {
    echo "删除成功";
} else {
    echo $sql;
}

mysqli_close($conn);
?>