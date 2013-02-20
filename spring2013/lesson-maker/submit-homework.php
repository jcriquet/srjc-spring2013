<?php 
require_once('sql-jperetz.php');
if ($_POST['exercise_id']) {
  $newrow = $mysqli->prepare("insert into homework (student_email, exercise_exercise_id, URL, comment) values (?,?,?,?)");
  $newrow->bind_param('siss',$_POST['student_email'],$_POST['exercise_id'],$_POST['exerciseLink'],$_POST['exerciseComment']);
  $newrow->execute();
  $mysqli->close();
} 