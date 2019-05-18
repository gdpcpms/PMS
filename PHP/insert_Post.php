<?php
$servername = "192.168.102.155";
$username = "root";
$password = "root";
$dbname = "Employee_system";

$PostID=$_POST['PostID'];
$PostName=$_POST['PostName'];
$BasicWage=$_POST['BasicWage'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed");
}
 
$sql = 'INSERT INTO Post VALUES('.$PostID.',"'.$PostName.'","'.$BasicWage.'";');
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo $sql;
}
 
mysqli_close($conn);
?>