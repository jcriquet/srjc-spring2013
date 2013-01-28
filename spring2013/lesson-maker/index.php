<?php 
require('../authenticate_instructor.php');
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jay Peretz | SRJC Spring 2013 | HTML5 Web Programming</title>
<link href='http://fonts.googleapis.com/css?family=Arapey:400italic,400' rel='stylesheet' type='text/css'>
<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../tinymce/jscripts/tiny_mce/jquery.tinymce.js"></script>
<script src="https://login.persona.org/include.js"></script>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../css/spring2013.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
var user = '<?php print $_SESSION['user']['email'] ?>';
var syllabus_id = 1;
</script>
<script src="lesson-maker.js"></script>
</head>

<body>
<header class="jumbotron subhead" id="overview">
  <div class="container">
   <div class="row">
   <button class="btn span2 btn-info" type="button" id="profile" data-toggle="modal" data-target="#myprofile">Profile</button> <button class="btn span2 btn-success" type="button" id="logout">Logout</button> 
   </div>
  <div class="row">
   <div class="span7"><h2 id="course-info"></h2></div><div class="span5" id="syllabus-menu"></div>
   </div>
  </div>
</header>

 <div class="container">
 
 <div id="myprofile" class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h1 id="fullname"></h1>
    <p id="studentid"></p>
  </div>
  <div class="modal-body"> 
  <p class="span5">Your github.com userid </p>
  <p id="githubaccount" class="span5" contenteditable=true></p>
   <p class="span5"> Your student gallery URL </p>
  <p id="galleryurl" class="span5" contenteditable=true></p>
    
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Close</a>
    <a class="btn btn-primary" id="update-profile">Save changes</a>
  </div>
</div>
 
  <div class="row">
    
     
    <div class="span4"> 
   
     <div class="span3">  
    <h3>Lessons</h3>
    <table id="lesson-list" class="table table-striped">
  <tr>
    <th scope="col">Date</th>
    <th scope="col">Topic</th>
  </tr>
    </table>   
    </div>
    </div>
    
    <div class="span8"> 
    <div class="row">
      <h3  contenteditable="true" id="lesson-topic"></h3>
       <p  contenteditable="true" class="lead" id="lesson-desc"></p>
       <textarea columns=200 rows=20 id="inputBlog" name="inputBlog" class="blog tinymce" ></textarea>
       </div>
     <div class="row">
       <div class="span8"><h4>Reading</h4></div>
       </div>
       <div class="row">
        <div class="span2"><h5>Text</h5></div><div class="span2"><h5>Description</h5></div><div class="span2"><h5>Link</h5></div>
       </div>
       <div id="readingList"></div>
        <div class="row">
      <div class="span8"><h4>Exercises</h4> </div>
      </div>
       <div class="row">
        <div class="span3"><h5>Description</h5></div><div class="span4"><h5>Link</h5></div>
       </div>
       <div  id="exerciseList"></div>
        <div class="row">
        <div class="span8"><h4>Explore</h4></div>
        </div>
        <div class="row">
        <div class="span3"><h5>Description</h5></div><div class="span4"><h5>Link</h5></div>
       </div>
       <div id="exploreList"></div>
  </div>
    </div>
    </div>  
 <div class="row"><div class="span12"><h3 style="text-align:center;">Jay Peretz &mdash; Spring 2013  &mdash; Santa Rosa Junior College &mdash; Computer Studies</h3></div></div>
</div>
</body>
</html>
