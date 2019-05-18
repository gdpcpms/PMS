<?php
$servername = "192.168.102.155";
$username = "root";
$password = "root";
$dbname = "Employee_system";

$EmployeeID=$_POST['EmployeeID'];
$DepartmentID=$_POST['DepartmentID'];
$PostID=$_POST['PostID'];
$Name=$_POST['Name'];
$CardNumber=$_POST['CardNumber'];
$Nation=$_POST['Nation'];
$Sex=$_POST['Sex'];
$Birthday=$_POST['Birthday'];
$Telephone=$_POST['Telephone'];
$Email=$_POST['Email'];
$SchoolRecord=$_POST['SchoolRecord'];
$GradateSchool=$_POST['GradateSchool'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed");
}
 
$sql = 'INSERT INTO Employee VALUES('.$EmployeeID.','.$DepartmentID.','.$PostID.',"'.$Name.'","'.$CardNumber.'","'.$Nation.'","'.$Sex.'","'.$Birthday.'",'.$Telephone.',"'.$Email.'","'.$SchoolRecord.'","'.$GradateSchool.'";)';
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo $sql;
}
 
mysqli_close($conn);
?>
