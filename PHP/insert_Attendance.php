<?php
$servername = "192.168.102.155";
$username = "root";
$password = "root";
$dbname = "Employee_system";

$EmployeeID=$_POST['EmployeeID'];
$AttendanceDay=$_POST['AttendanceDay'];
$Situation=$_POST['Situation'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed");
}
 
$sql = 'INSERT INTO Attendance (EmployeeID,AttendanceDay,Situation) VALUES('.$EmployeeID.',"'.$AttendanceDay.'","'.$Situation.'";)';
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo $sql;
}
 
mysqli_close($conn);
?>