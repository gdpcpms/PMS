<?php
// 主键不允许修改,根据主键来修改对应数据项
include_once('./config.php')

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
 
$sql = 'update Employee set DepartmentID='.$DepartmentID.',PostID='.$PostID.',name="'.$Name.'",CardNumber="'.$CardNumber.'",Nation="'.$Nation.'",Sex="'.$Sex.'",Birthday="'.$Birthday.'",Telephone='.$Telephone.',Email="'.$Email.'",SchoolRecord="'.$SchoolRecord.'",GradateSchool="'.$GradateSchool.'" where EmployeeID='.$EmployeeID.';';
 
if (mysqli_query($conn, $sql)) {
    echo "更改成功";
} else {
    echo $sql;
}
 
mysqli_close($conn);
?>
