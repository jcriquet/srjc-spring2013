<?php 
require('../authenticate.php');
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Glossary Essay | Jay Peretz | Santa Rosa Junior College</title>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script src="https://login.persona.org/include.js"></script>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../css/spring2013.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
var user = '<?php print $_SESSION['user']['email'] ?>';
</script>
<script src="glossary.js"></script>
</head>

<body>
<header class="jumbotron subhead" id="overview">
  <div class="container">
  
   <h2 class="page-header">Glossary Essay Question</h2>
  </div>
</header>
<div class="container">
<nav class="row">
<div class="span12">
<ul class="nav nav-pills">
   <li><a href="../html5/">CS 52.10</a></li>
    <li><a href="../web-programming/">CS 53.11B</a></li>
</ul>
</div>
</nav>

  <div class="row">
         <div class="span12">
         <div class="row">
            <h3 class="span12">Glossary of Terms</h3> 
         </div>
         
          <div class="row"> 
            <div class="span4">
          		<select id="openterms">
                </select>
                </div>
                  <div class="span4">
          		<textarea rows="3" id="enter-definition"></textarea>
                </div>
                 <div class="span4">
          		<button class="btn btn-large btn-warning" type="button" id="add-definition">Submit</button>
                </div>
        
         </div>
         </div>
   
  </div>  
  
         <footer class="row well well-large">
        <h4>This page requires Javascript and is best viewed in the  <a href="https://www.google.com/intl/en/chrome/browser/">latest version of Google Chrome
       <img src="../images/chrome.png" alt="Download Google Chrome" height="100" width="100" /></a></h4>
        </footer>
</div>
</body>
</html>
