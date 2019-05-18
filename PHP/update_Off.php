<?php
// 主键不允许修改,根据主键来修改对应数据项
include_once('./config.php')

$OffNo=$_POST['OffNo'];
$EmployeeID=$_POST['EmployeeID'];
$OffReason=$_POST['OffReason'];
$OffTime=$_POST['OffTime'];
$OffDay=$_POST['OffDay'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed");
}
 
$sql = 'update Off set EmployeeID='.$EmployeeID.',OffReason="'.$OffReason.'",Offtime="'.$OffTime.'",OffDay='.$OffDay.' where OffNo='.$OffNo.';';

if (mysqli_query($conn, $sql)) {
    echo "更改成功";
} else {
    echo $sql;
}

mysqli_close($conn);
?>
