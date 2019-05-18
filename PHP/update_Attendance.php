<?php
// 主键不允许修改,根据主键来修改对应数据项
include_once('./config.php')

$AttendanceNo=$_POST['AttendanceNo'];
$EmployeeID=$_POST['EmployeeID'];
$AttendanceDay=$_POST['AttendanceDay'];
$Situation=$_POST['Situation'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed");
}
 
$sql = 'update Attendance set EmployeeID='.$EmployeeID.',AttendanceDay='.$AttendanceDay.',Situation="'.$Situation.'" where AttendanceNo='.$AttendanceNo.';';
 
if (mysqli_query($conn, $sql)) {
    echo "更改成功";
} else {
    echo $sql;
}
 
mysqli_close($conn);
?>