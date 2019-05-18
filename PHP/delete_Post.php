<?php
include_once('./config.php')
 
$PostID=$_POST['PostID'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("连接失败!");
}
 
$sql = "delete from Post where PostID=".$PostID.";";
if (mysqli_query($conn, $sql)) {
    echo "删除成功";
} else {
    echo $sql;
}

mysqli_close($conn);
?>