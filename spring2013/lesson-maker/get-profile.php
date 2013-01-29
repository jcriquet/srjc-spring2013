<?php 
require_once('sql-jperetz.php');
$selectprofile = $mysqli->query('select * from student where email ="'.$_GET['email'].'"');
$profile = $selectprofile->fetch_object();
$profile->gravatar_hash = md5( strtolower( trim($profile->email) ) );
$mysqli->close();
require_once('JSON.php');
$json = new Services_JSON;
$profile = $json->encode($profile);
echo $profile;