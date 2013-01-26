<?php 
require_once('sql-jperetz.php');
$selectprofile = $mysqli->query('select * from student where email ="'.$_GET['email'].'"');
$profile = $selectprofile->fetch_object();
$mysqli->close();
require_once('JSON.php');
$json = new Services_JSON;
$profile = $json->encode($profile);
echo $profile;