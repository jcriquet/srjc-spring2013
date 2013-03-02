<?php 
require_once('sql-jperetz.php');
if ($_POST['homework_id']) {
  $newrow = $mysqli->prepare("insert into review (student_email, homework_homework_id, comment, grade) values (?,?,?,?)");
  $newrow->bind_param('siss',$_POST['student_email'],$_POST['homework_id'],$_POST['comment'],$_POST['grade']);
  $newrow->execute(); 
  $mysqli->close();
} 