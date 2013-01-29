<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jay Peretz | SRJC Spring 2013 | HTML5 Web Programming</title>
<link href='http://fonts.googleapis.com/css?family=Arapey:400italic,400' rel='stylesheet' type='text/css'>
<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../css/spring2013.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
var syllabus_id = 1;
</script>
<script src="../js/spring2013.js"></script>
</head>

<body>
<header class="jumbotron subhead" id="overview">
  <div class="container">
   <h2 id="course-info"></h2>
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

<div id="viewprofile" class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h1 id="studentname" class="span3"></h1> <img id="studentavatar" class="img-polaroid" />
    <p id="studentemail"></p>
  </div>
  <div class="modal-body"> 
 
  <p class="span5">On Github </p>
  <p id="studentgithub" class="span5"></p>
   <p class="span5">Portfolio </p>
  <p id="studentgalleryurl" class="span5"></p>
    
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Close</a>
  </div>
</div>

  <div class="row">
    
     <div class="span8"> 
      <h1 id="lesson-topic"></h1>
       <p class="lead" id="lesson-desc"></p>
   <div id="lesson-info"> </div>
    </div>
    <div class="span4">  
    <h3>Lessons</h3>
    <table id="lesson-list" class="table table-striped">
  <tr>
    <th scope="col">Date</th>
    <th scope="col">Topic</th>
  </tr>
    </table>   
     <h3>Students</h3>
      <div id="student-list"></div>
    </div>
    </div>  
  
 <div id="general-info-hdr" class="row jumbotron subhead">
 <div class="span12">
  <h2>General Course Information <span style="font-size:80%;font-style:italic">(click to collapse &nbsp; <i class="icon-arrow-up icon-white"></i>&nbsp;<i class="icon-arrow-down icon-white"></i>&nbsp;&nbsp;)</span></h2>
  </div>
  </div>
   <div class="row"  id="general-info">
    <div class="span4">       
          <h3>Lecture/Labs</h3>
          
          
          <p>This is an online class and there is no regularly scheduled lecture or lab associated with this class.   The weekly lessons will consist of some reading materials, supplemental resources such as tutorials or documentation, and coding exercises. Instructor-led video or documented tutorials may be included in weekly lessons as well. </p>
          
<!--<p>Wednesdays 7:00PM-10:00PM<br>
   Petaluma Campus Call Building Room PC643
</p><p>Class attendance is strongly encouraged but not required, all lectures will be broadcast and recorded.</p>
<h3>Live Broadcast</h3>
<p>Visit <a class="label label-info"  href="http://www.cccconfer.org/">www.cccconfer.org</a> <br>
  Click the Student Log-In button under the <strong>Teach & Confer logo</strong><br>
  Locate your meeting and click Go
  Fill out the form and enter the passcode: 882585</p>
  <p>Watch the <a class="label label-info"  href="https://sas.elluminate.com/site/external/recording/playback/link/table/meeting?suid=M.4499381339B7E207E8E6778F438C63">Class Archives</a></p>
   -->
<h3>Office Hours</h3>
<p>Wednesdays 6:00PM-7:00PM<br>
  Petaluma Campus Call Building Room PC643 or Computer Lab
  <br>
</p>
<h3>Class Forum</h3>
<p>The discussion forum below is the appropriate place to post questions and comments about the class materials or process that would pertinent to other students in the class. Please check the discussion board first if you have a question.     Students should  create a profile on <a class="label label-info"  href="http://www.disqus.com/">Disqus</a>  to follow discussions by email.   Exceptional community citizenship on the class discussion board can be worth up to 5 points of extra credit in the class. </p>

<h3>Gradebook</h3>
<p>Check your grades for exams and projects:</p> 
<p>  
<a class="label label-info"  href="http://online.santarosa.edu/gradebook/?5041">Gradebook</a> for  section 5371</a>  
</p>
<!--<p>  
<a class="label label-info"  href="http://online.santarosa.edu/gradebook/?5042">Gradebook</a> for  section 5250</a>  
</p>-->

          
            <h4>Official Course Catalog Description</h4>
          <p>The course covers using HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and Javascript to produce powerful interactive Web content. Topics include the HTML5 structural, semantic and form tags, how to use Canvas to create drawings natively in the browser, how to work with HTML5 audio and video, and how to build web pages that work with mobile devices. Also includes the current state of browser support for HTML5 and the theory behind all the changes that have been made.</p>
          <h4>Student Learning Outcomes</h4>
        
<p>
Students will be able to:<br>
1.  Use HTML5 Markup to create interactive web content.<br>
2.  Evaluate current browser support for the various HTML5 features.<br>
3.  Decide when and why to use HTML5 features and the implications on the architecture.</p>

<h4>Required Materials</h4>
<p>There is NO REQUIRED SOFTWARE, although you will need a good code editor and a webserver account (an SRJC student account is fine, but you may also use your own domain or another host.) You will also need to use a current version of an HTML5 browser with a great element inspector (Chrome, FireFox, Opera or Internet Explorer 9+ will work.)</p>
<p>A webserver account, either on your own domain or <a  class="label label-info" href="https://student.santarosa.edu:85/apply/linux-account.php">free Linux webserver accounts</a> are available through the Santa Rosa Junior College IT services. </p>
<p>You may use the Computer Studies labs in Santa Rosa and Petaluma during regularly scheduled lab hours, or you may also work at your own computer. You MUST be self-sufficient with basic webserver fundamentals and be able to use FTP to deploy a website.</p>
<p>An account on <a  class="label label-info" href="http://www.github.com/">github.com</a> for your project and exercise code repositories.   This will be discussed in class.</p>
     </div>
    <div class="span4"> 
        <h4>Textbook</h4> 
        
          <p>This class is based on <a  class="label label-info" href="http://diveintohtml5.info/">Dive Into HTML5</a> by Mark Pilgrim, which is available online for free. The book is also available as a paperback  published by O'Reilly (ISBN 978-0596806026) under the title of <a  class="label label-info" href="http://www.amazon.com/HTML5-Up-Running-Mark-Pilgrim/dp/0596806027/ref=sr_1_10?ie=UTF8&qid=1357772086&sr=8-10&keywords=html5"> HTML5: Up and Running </a>.</p>
       <!-- <p>This class has no REQUIRED textbooks.   , but  the curriculum is loosely based on these two books . There are many fantastic Javascript books, I highly recomment that you  have at least one or two available as you take this class.</p>-->
       

   
    <p>These optional textbooks may be also be useful to some students based on learning style or focus area.</p>
    <ul>
     
     
      <li><a href="http://www.amazon.com/The-Definitive-Guide-HTML5-ebook/dp/B006LPJZFE/ref=pd_sim_kstore_8">The Definitive Guide to HTML5 by Adam Freeman</a></li>
       <li><a href="http://www.amazon.com/HTML5-Missing-Manual-Manuals-ebook/dp/B005KOJ3MC/ref=pd_sim_kstore_24">HTML5: The Missing Manual by Matthew MacDonald</a></li>
    </ul>
  
  
    <h4>About the Instructor</h4>
<p>Jay Peretz is a part time Adjunct Faculty member in Computer Studies at <a href="http://www.santarosa.edu/">Santa Rosa Junior College</a>.   Jay teaches web development classes in HTML, CSS, Javascript, Dreamweaver, Flash, PHP, SQL, XML and Actionscript.</p>
<p>Phone: (Computer Studies Dept Desk) 707-527-4778</p>
<p>Email: <a href="mailto:jperetz@santarosa.edu">jperetz@santarosa.edu</a></p>
<p>Email policy - questions regarding class material, projects and assignment are best researched and posted on the class forum, where instructors and other students may be of assistance.   Emails sent directly to the instructor will generally be reviewed within 24 hours.   </p>
          
           <h4>Grading Policy </h4>
 <p>Your final grade will be based on the following:</p>
<table width="95%"  class="table table-striped">
  <tr>
    <th scope="col">Assignment</th>
    
    <th scope="col">Points</th>
  </tr>
  <tr>
    <td>Final Project</td>
    
    <td>40</td>
  </tr>
  
  <tr>
    <td>Midterm Exam</td>
  
    <td>20</td>
  </tr>
  <tr>
    <td>Final Exam</td>
  
    <td>20</td>
  </tr>
  <tr>
    <td>Participation and Exercises</td>
  
    <td>20</td>
  </tr>
  <tr>
    <td>Total</td>
    
    <td>100</td>
  </tr>
</table>
<ul><li>91% -100% = A</li>
<li>81% -9 0% = B</li>
<li>71% - 80% = C</li>
<li>65% - 70% = D</li>
<li>&lt;65 = F</li></ul>

  <h4>Exams</h4>
  <p>There will be  online midterm and final
    exams. The material comes from the class lectures and supplemental materials. If any exam is missed, a zero will be recorded as the score. It is your responsibility
    to take the online exams by the due date.</p>
  <h4>Projects</h4>
  <p>You must submit a final project by the posted due date for a passing grade.   The project will be a comprehensive website demonstrating the techniques taught in the class and developed in the class exercises in each weekly lesson.</p>
  <h4>Credit-No Credit</h4>
  <p>This class may be taken for either a grade or the P/NP option.</p>
  <h4>Dropping the Class</h4>
  <p>If you decide to discontinue this course, it is your responsibility to officially drop it to avoid
    getting no refund (after 10% of course length), a W symbol (after 20%), or a grade (after
    60%). Also, for several consecutive, unexplained absences, the instructor may drop a
    student.</p> 
    </div>
    <div class="span4">
    <h4>Semester Schedule</h4>
 	<table class="table table-striped">
                            <tbody><tr>
                                <td align="right" valign="top" class="NormalBold">Day Class Begins:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateBegin" class="Normal">Monday, January 14, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Day Class Ends:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateEnd" class="Normal">Friday, May 17, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Day/Time of Final Exam:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblFinalExam" class="Normal">To be Arranged</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Add<br>
                                    without instructor's approval:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastAdd" class="Normal">Sunday, January 20, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Add<br>
                                    with instructor's approval:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastAddWithApproval" class="Normal">Sunday, February 03, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Drop<br>
                                    and be eligible for enrollment/course fee refund:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastRefund" class="Normal">Sunday, January 27, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Drop<br>
                                    without a 'W' symbol:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastDropWithoutW" class="Normal">Sunday, February 10, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Drop<br>
                                    with a 'W' symbol:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastDropWithW" class="Normal">Sunday, April 28, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">Last Day to Opt<br>
                                    for Pass/No Pass:</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateLastOptCRNC" class="Normal">Sunday, February 24, 2013</span></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" class="NormalBold">First Census Date</td>
                                <td align="left" valign="top" style="white-space: nowrap"><span id="lblDateFirstCensus" class="Normal">Monday, February 04, 2013</span></td>
                            </tr>
                        </tbody></table>	 	
 	
 		<!-- <table  class="table table-striped" >
		<tbody><tr>
			<td>Date Class Begins: </td><td>1/16/2013</td><td>Date Class Ends: </td><td>5/15/2013</td>
		</tr><tr>
			<td>Last Day Add w/o add code: </td><td>1/20/2013</td><td>Last Day Add with add code: </td><td>2/3/2013</td>
		</tr><tr>
			<td>Last Day Drop for Refund: </td><td>1/27/2013</td><td>Last Day for P/NP option: </td><td>2/24/2013</td>
		</tr><tr>
			<td>Last Day Drop w/o W: </td><td>2/3/2013</td><td>Last Day Drop with W: </td><td>4/21/2013</td>
		</tr><tr>
			<td class="NormalBold">FIRST CENSUS DATE: </td><td>2/4/2013</td><td>Date Final Exam: </td><td>5/22/2013</td>
		</tr>
	</tbody></table>	-->
	
	 	
	
 	 	



<h4>Cell Phones and Text Messaging</h4>

<p>Calls or text messaging are not permitted in classroom or lab. See instructor if you have an
emergency situation.</p>
<h4>Standards of Conduct</h4>
<p>Students shall conduct themselves in a manner that reflects their awareness of common
standards of decency and the rights of others. Interference with SRJC's educational
objectives is a cause for disciplinary action. All members of the college community are
expected to refrain from such interference, including the following types of conduct:</p>
<ul>
<li>Disruption of teaching</li>
<li>Dishonesty, cheating, plagiarism</li>
<li>Physical or verbal abuse</li>
<li>Disorderly, lewd, indecent, or obscene conduct</li>
</ul>


<h4>Email Etiquette</h4>

<p>Here is a list of some basic guidelines for using the class forum or emailing directly to the
instructor or a classmate:</p>

<ul><li>Email can easily be misinterpreted; be brief, polite, never send email when angry.</li>
<li>Always include a pertinent subject title for the message.</li>
<li>Capitalize words only to highlight an important point or to distinguish a title or
heading. Capitalizing whole words is termed as SHOUTING!</li>
<li>It is rude to forward personal email without the author's permission</li></ul>


<h4>Special Needs</h4>
<p>Students with disabilities who believe they need accommodations in this class are
encouraged to contact Disability Resources (527-4278), Analy Village - C, as soon as
possible to better ensure such accommodations are implemented in a timely fashion.</p>
</div>
</div>
<div class="row comments">
        <div class="span12">
        <h3 class="jumbotron subhead">Discussion Forum</h3>
        <p>Please use this discussion form appropriately to ask questions of the instructor or to share information that is of interest to the class.</p>
        <div id="disqus_thread"></div>
        <script type="text/javascript">
            /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
            var disqus_shortname = 'javascriptcs5511'; // required: replace example with your forum shortname

            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
        
        </div>
        </div>
</div>
</body>
</html>
