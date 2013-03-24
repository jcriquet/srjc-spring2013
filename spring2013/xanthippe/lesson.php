<?php

// load an external JSON library - required for php v5.1
require_once("includes/JSON.php");
//  create a json service
$json = new Services_JSON;
// load an external rest services library
require_once("includes/rest.php");
/* Create a MySQL Connection */
require_once("includes/sql-jperetz.php");
// get the request data object
$data = RestUtils::processRequest();
//get the request variable for the syllabus id
$requestVars = $data->getRequestVars();
$lesson_request =  $requestVars["lesson_id"];
// process request based on the method
switch($data->getMethod()) {
	case 'put':
		if ($lesson_request) {
			
		}
		break;
	case 'post':
		/* no support for GET method yet */
		break;
	case 'get':
		/* check for the syllabus_id POST request variable */
		if ($lesson_request) {
			// select the requested lesson
			if ($lessons = $mysqli->query("SELECT lesson_id, topics, description, lesson.lesson_date as sort_date, DATE_FORMAT(lesson_date,'%M %e, %Y' ) as lesson_date ,blogpost FROM lesson  WHERE lesson_id = ".$lesson_request)) {
				while ($lesson = $lessons->fetch_object()) {
					$lesson_array[$lesson->lesson_id] = $lesson;
					/* Select the reading */
					if ($reads = $mysqli->query("SELECT read_id,description, title, ISDN, author, url, cover_image, optional, reading_url FROM reading LEFT JOIN resource on (resource.resource_id = reading.resource_resource_id) WHERE lesson_lesson_id =".$lesson->lesson_id)) {
						while ($read = $reads->fetch_object()) {
							$lesson_array[$lesson->lesson_id]->reads[$read->read_id] = $read;
						}
					}
					/* Select the explore */
					if ($explores = $mysqli->query("SELECT explore_id, description, resource_type, url FROM explore WHERE lesson_lesson_id =".$lesson->lesson_id)) {
						while ($explore = $explores->fetch_object()) {
							$lesson_array[$lesson->lesson_id]->explores[$explore->explore_id] = $explore;
						}
					}
					/* Select the exercises */
					if ($exercises = $mysqli->query("SELECT exercise_id, type, description, url FROM exercise WHERE lesson_lesson_id =".$lesson->lesson_id)) {
						while ($exercise = $exercises->fetch_object()) {
							$lesson_array[$lesson->lesson_id]->exercises[$exercise->exercise_id] = $exercise;
							if ($exercise->type == "form") {
								if ($questions = $mysqli->query("SELECT question_id, question_num, text FROM question WHERE exercise_exercise_id =".$exercise->exercise_id." ORDER BY question_num")) {
									while ($question = $questions->fetch_object()) {
										$lesson_array[$lesson->lesson_id]->exercises[$exercise->exercise_id]->questions[$question->question_num] = $question;
									}
								}
							}
							if ($homeworks = $mysqli->query("SELECT homework_id, student_email, first_name, comment, URL FROM homework, student WHERE student_email = email and exercise_exercise_id =".$exercise->exercise_id)) {
								while ($homework = $homeworks->fetch_object()) {
									$lesson_array[$lesson->lesson_id]->exercises[$exercise->exercise_id]->homeworks[$homework->homework_id] = $homework;
									if ($reviews = $mysqli->query("SELECT review_id, student_email, first_name, grade,comment FROM review, student WHERE student_email = email and homework_homework_id =".$homework->homework_id)) {
										while ($review = $reviews->fetch_object()) {
											$lesson_array[$lesson->lesson_id]->exercises[$exercise->exercise_id]->homeworks[$homework->homework_id]->reviews[$review->review_id] = $review;
										}
									}
								}
							}
						}
					}
				}
				
				/* free result set */
				//  $syllabi->close();
			}
			/* close SQL connectiot */
			$mysqli->close();
			
			//echo $json->encode($syllabus_array);
			$resultData = $json->encode($lesson_array);
			
			RestUtils::sendResponse(200, $resultData, 'application/json');
		}
		break;
}

?>
