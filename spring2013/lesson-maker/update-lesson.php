<?php 
require_once('sql-jperetz.php');
require_once('JSON.php');
$json = new Services_JSON;
if ($_GET['lesson_id']) {
$newcontent = $_GET['lesson_id'];
$lessonupdate = $mysqli->prepare("update lesson set topics = ?, description = ?, blogpost = ? where lesson_id = ?");
$lessonupdate->bind_param('sssi',$newcontent['topics'],$newcontent['description'],$newcontent['blogpost'],$newcontent['lesson_id']);
$lessonupdate->execute();
$lmysqli->close();
} else {
	$newlesson = $mysqli->prepare("insert into lesson (syllabus_syllabus_id, lesson_date, topics ) values (? , ? , ?) ");
	$newlesson->bind_param('iss',$_GET['syllabus_id'],$_GET['lesson_date'],$_GET['topics']);
	$newlesson->execute();
	
	$selectnewlesson = $mysqli->query("select max(lesson_id) as lesson_id , topics, DATE_FORMAT(lesson_date,'%M %e, %Y' ) as lesson_date from lesson group by topics order by lesson_id desc limit 1;");
	$newlessonback = $selectnewlesson->fetch_object();
	$mysqli->close();
	$insertedLesson = $json->encode($newlessonback);
	echo $insertedLesson;
}