<?php
include_once('./config.php')

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("连接失败!");
}
 
$sql = "SELECT * FROM Logs;";
$result = mysqli_query($conn, $sql);
 
if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["ID"]." ".$row["TableName"]." ".$row["TableID"]." ".$row["Action"]." ".$row["Record"]."<br>";
    }
} else {
    echo "";
}
 
mysqli_close($conn);
?>
