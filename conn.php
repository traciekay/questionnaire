<?php
$database="localhost";
$user="root";
$pass="";
$db="question";

$sql= mysql_connect($database, $user, $pass);


// Check connection
if (!$sql) {
    die("Connection failed:". mysql_error());
}

mysql_close($sql);
?>
