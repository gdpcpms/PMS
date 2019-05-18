<?php
$servername = "192.168.102.155";
$username = "root";
$password = "root";
$dbname = "Employee_system";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("连接失败!");
}
 
$sql = "SELECT * FROM Attendance_info";
$result = mysqli_query($conn, $sql);
 
if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["Employee_ID"]." ".$row["Employee_name"]." ".$row["Department_Name"]." ".$row["Post_name"]." ".$row["AttendanceDay"]." ".$row["Situation"]."<br>";
    }
} else {
    echo "";
}
 
mysqli_close($conn);
?>