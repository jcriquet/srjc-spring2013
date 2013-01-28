<?php 
require_once('sql-jperetz.php');
$newcontent = $_GET['profile'];
if ($newcontent['email']) {
  $profileupdate = $mysqli->prepare("update student set gallery_URL = ? , github_userid = ? where email = ?");
  $profileupdate->bind_param('sss',$newcontent['gallery_URL'],$newcontent['github_userid'],$newcontent['email']);
  $profileupdate->execute();
  $mysqli->close();
} 