$(document).ready(function() {
	var syllabus;
	$("#submit-homework").modal("hide");
	$("#write-review").modal("hide");
	var getProfile = function(user) {
		$.ajax({
       type: "GET",
       url: "../lesson-maker/get-profile.php",
       data: { email: user, syllabus_id:syllabus_id },
       datatype: "json"
      }).done(function( data) {
		   data = $.parseJSON(data);
		   console.log(data);
		  $('#fullname').text(data.first_name + " " + data.last_name);
		   $("#mygravatar").attr("src","http://www.gravatar.com/avatar/"+data.gravatar_hash);
		  if (data.gallery_URL) {
			  $('#galleryurl').text(data.gallery_URL);
		  }
		  if (data.github_userid) {
			   $('#githubaccount').text(data.github_userid);
		  }	
		  if (data.project_description) {
			   $('#myproject').val(data.project_description);
		  }		  
	  });
	}
	function listProjects() {
        var projectList = "";
		$("#project-list").html(projectList);
		projectList += '<table class="table table-condensed table-striped"><tbody>';
		$.each(syllabus.students,function(index,value) {
			if (syllabus.students[index].project_description) {
			projectList += '<tr><td>'+syllabus.students[index].first_name+'</td><td>'+syllabus.students[index].project_description+'</td></tr>';			
			} else {
				projectList += '<tr><td>'+syllabus.students[index].first_name+'</td><td></td></tr>';
			}
		});
        projectList += '</tbody></table>';
		$("#project-list").html(projectList);
	}
    function showLesson(lessonID) {
		$.ajax({
       type: "GET",
       url: "../xanthippe/lesson.php",
       data: { lesson_id: lessonID },
       datatype: "json"
      }).done(function( data) {
         data = $.parseJSON(data);
         lesson = data[lessonID];
		 console.log(lesson);
	    $("#lesson-topic").html(lesson.topics);
		 $("#lesson-desc").html(lesson.description);
		var lessoncontent = "";
		if (lesson.blogpost) {
		    lessoncontent += "<div class=blog>"+lesson.blogpost+"</div>";
		};
		// display any reading assignments for this lesson
		if (lesson.reads) {
		lessoncontent += "<h2>Reading</h2>";
		$.each(lesson.reads, function(index, value) {
			if (lesson.reads[index].title && lesson.reads[index].reading_url) {
			 lessoncontent += '<p><a href="'+lesson.reads[index].reading_url+'">'+lesson.reads[index].title+'&nbsp;'+lesson.reads[index].description+'</a></p>';
			} else if (!lesson.reads[index].title && lesson.reads[index].reading_url)  {
				lessoncontent += '<p><a href="'+lesson.reads[index].reading_url+'">'+lesson.reads[index].description+'</a></p>';
			} else if (lesson.reads[index].title && !lesson.reads[index].reading_url) {
				lessoncontent += '<p>'+lesson.reads[index].title+'&nbsp;'+lesson.reads[index].description+'</p>';
			} else {
				lessoncontent += '<p>'+lesson.reads[index].description+'</p>';
			}
	      });
		}
		// display any explore links for this lesson
		if (lesson.explores) {
		lessoncontent += "<h2>Explore </h2>";
		lessoncontent += "<h4>Non-manditory readings and exercises.  Choose the ones that you find interesting.</h4>"; 
		$.each(lesson.explores, function(index, value) {
			 lessoncontent += '<p><a href="'+lesson.explores[index].url+'">'+lesson.explores[index].description+'</a></p>';
	      });
		}
		// display any exercises for this lesson
		if (lesson.exercises) {
		lessoncontent += "<h2>Exercises</h2>";
		$.each(lesson.exercises, function(index, value) {
			if (lesson.exercises[index].url) {
			   lessoncontent += '<p> <a class="btn btn-warning submit-hw" data-exercise="'+lesson.exercises[index].exercise_id+'">Submit</a>&nbsp;<a href="'+lesson.exercises[index].url+'">'+lesson.exercises[index].description+'</a></p>';
			} else {
				lessoncontent += '<p> <a class="btn btn-warning submit-hw" data-exercise="'+lesson.exercises[index].exercise_id+'">Submit</a>&nbsp;'+lesson.exercises[index].description+'</p>';
			}
			//display any homework submissions for this exercise
	      if (lesson.exercises[index].homeworks) {
			  $.each(lesson.exercises[index].homeworks,function(index2,value2) {
				  lessoncontent += '<p class="muted"><a data-reviewee='+ lesson.exercises[index].homeworks[index2].first_name+' data-homeworkid="'+ index2+'" class="btn thumbs thumbsup" href="#write-review"><i class="icon-thumbs-up"></i></a><a  data-reviewee='+ lesson.exercises[index].homeworks[index2].first_name+'  data-homeworkid="'+ index2 +'"  class="btn thumbs thumbsdown" href="#write-review"><i class="icon-thumbs-down"></i></a>&nbsp;&nbsp;';
				  //does the submission have a url link
				  lessoncontent += (lesson.exercises[index].homeworks[index2].URL) ? '<a href="'+lesson.exercises[index].homeworks[index2].URL+'">'+lesson.exercises[index].homeworks[index2].first_name+'</a>' : '+lesson.exercises[index].homeworks[index2].first_name+' ;
				  lessoncontent += '&mdash; '+lesson.exercises[index].homeworks[index2].comment+'&nbsp;';
				  // is this submission by the current logged in user
				  lessoncontent += (value2.student_email === user) ? '<a class="btn btn-mini remove-homework" data-id="'+ index2 +'"><i class="icon-remove"></i></a></p>' : '</p>';				
		// display any reviews of a homework submission		
			  if (lesson.exercises[index].homeworks[index2].reviews) {
				    $.each(lesson.exercises[index].homeworks[index2].reviews,function(index3, value3) {
						lessoncontent += '<p class="muted review">&nbsp;&nbsp;';
						//thumbs up or thumbs dowm
						lessoncontent += (lesson.exercises[index].homeworks[index2].reviews[index3].grade == 1) ?'<i class="icon-thumbs-up"></i>' : '<i class="icon-thumbs-down"></i>';
						lessoncontent += '&nbsp;&nbsp;'+lesson.exercises[index].homeworks[index2].reviews[index3].comment+'&nbsp;&mdash;&nbsp;'+lesson.exercises[index].homeworks[index2].reviews[index3].first_name+'';
						 // is this review by the current logged in user
						lessoncontent += (value3.student_email === user) ? '&nbsp;<a class="btn btn-mini remove-review" data-id="'+ index3 +'"><i class="icon-remove"></i></a></p>' : '</p>';
						
						
				     });   
			   } 
			 });
		  }
		  });
		}		
		$("#lesson-info").html(lessoncontent);	
		// set event to submit homework
		$(".submit-hw").click(function() {
			$("#submit-homework").modal("show");
			$("#submit-exercise").attr("exercise-id",$(this).attr("data-exercise"));			
		});	
		// set event to enter a review of a homework submission
		$(".thumbs").click(function() {
			$("#review-grade").removeClass("icon-thumbs-up").removeClass("icon-thumbs-down");
			if ($(this).hasClass("thumbsup")) {
				$("#review-grade").addClass("icon-thumbs-up");
			} else {
				$("#review-grade").addClass("icon-thumbs-down");
			}
			$("#review-subject").html($(this).attr("data-reviewee"));
			$("#submit-review").attr("homework-id",$(this).attr("data-homeworkid"));		
			$("#write-review").modal("show");		   	
		});	
		$(".remove-homework").click(function() {
			var homeworkID = $(this).attr("data-id");
			$.ajax({
					  type: "POST",
					  url: "../lesson-maker/remove-homework.php", 
					  data: { homework: homeworkID }
					}).done(function(data) {
						alert("Your submission was deleted.");
						showLesson(lessonID);
						syllabus.students[user].homeworks[homeworkID] = {};
					});
		});
		$(".remove-review").click(function() {
			var reviewID = $(this).attr("data-id");
			$.ajax({
					  type: "POST",
					  url: "../lesson-maker/remove-review.php", 
					  data: { review: reviewID }
					}).done(function(data) {
						alert("Your review was deleted.");
						showLesson(lessonID);
					});
		});
	  }); //close ajax done
    }
	
    $.ajax({
       type: "GET",
       url: "../xanthippe/syllabus.php",
       data: { syllabus_id: syllabus_id },
       datatype: "json"
      }).done(function( data) {
         data = $.parseJSON(data);
         syllabus = data[syllabus_id];
		 console.log(syllabus);
		 $("#course-info , title").html(syllabus.course_name+"&nbsp;"+syllabus.semester+"&nbsp;|&nbsp;"+syllabus.srjc_id+"&nbsp;|&nbsp; Section "+syllabus.section_number);
		 $.each(syllabus.lessons, function(index, value) {
			 $("#lesson-list").append("<tr class=lesson-listing data-id="+value.lesson_id+"><td>"+value.lesson_date.substr(0,value.lesson_date.indexOf(","))+"</td><td>"+value.topics+"</td></tr>");
		 });
	$(".lesson-listing").click(function() {
		     currentLesson = $(this).attr("data-id");
			 showLesson(currentLesson);	
			 $(".lesson-listing").removeClass("info");
			 $(this).addClass("info");	
		 });
		 if (syllabus.students) {
		 $.each(syllabus.students, function(index, value) {
			 if (value.type == "instructor") {
			 $("#student-list").append('<p data-id='+value.email+' class="student-listing"><strong>'+value.first_name+'</strong></p>');
			 } else {
			 $("#student-list").append('<p data-id='+value.email+' class="student-listing">'+value.first_name+'</p>');
			 }
	      });
		 $(".student-listing").click(function() {
			  //sylla
			  $("#studentname").text(syllabus.students[$(this).attr("data-id")].first_name);
			  $("#studentavatar").attr("src","http://www.gravatar.com/avatar/"+syllabus.students[$(this).attr('data-id')].gravatar_hash);
			  if (syllabus.students[$(this).attr("data-id")].github_userid) {
			    var githublink = "<a href=http://www.github.com/"+syllabus.students[$(this).attr("data-id")].github_userid+"/"+syllabus.repository+">"+syllabus.students[$(this).attr("data-id")].github_userid+"</a>";
			   $("#studentgithub").html(githublink);
			  } else {
				$("#studentgithub").html("");  
			  }
			  if (syllabus.students[$(this).attr("data-id")].gallery_URL) {
			    var gallerylink = '<a href="'+syllabus.students[$(this).attr("data-id")].gallery_URL+'">'+syllabus.students[$(this).attr("data-id")].gallery_URL+'</a>';
			   $("#studentgalleryurl").html(gallerylink);
			  } else {
				$("#studentgalleryurl").html("");  
			  }
			  if (syllabus.students[$(this).attr("data-id")].project_description) {
			
			   $("#projectdesc").text(syllabus.students[$(this).attr("data-id")].project_description);
			  } else {
				$("#projectdesc").html("");  
			  }
			  // display submissions in student page
			   $("#homeworks").text("");
			  if (syllabus.students[$(this).attr("data-id")].homeworks) {
				 
				  $.each(syllabus.students[$(this).attr("data-id")].homeworks, function(index, value) {
					  if (value.topics) {
				    $("#homeworks").append('<p><a href="'+value.url+'">'+value.topics+'</a>&mdash;'+value.comment+'</p>');
					  }
				  });
			  }
			  
			  $("#viewprofile").modal('show');
		 });
		 };
		 showLesson($("table#lesson-list tbody tr").eq(currentLesson).attr("data-id"));
		 $("table#lesson-list tbody tr").eq(currentLesson).addClass("info");
		 listProjects();
       });
	   $("#general-info").hide();
   $("#general-info-hdr").click(function() {
	   $("#general-info").slideToggle('slow');
   });
   $("#logout").click(function() {
		  navigator.id.logout();
		 
	  });
   navigator.id.watch({
				loggedInUser: null,
				onlogin: function (assertion) {
					},
				// This won't ever fire in the example.
				onlogout: function () {
					 $.ajax({
            type: "GET",
            url: "../xanthippe/service/auth/index.php"
         }).done(function( data) {
			 document.location.reload();
	  });
					}
	});
	$('#studentid').text(user);
	getProfile(user);
	$("#update-profile").click(function() {
		if ($('#galleryurl').text() || $('#githubaccount').text() || $('#myproject').val()) {
			var profile = {email:user,syllabus_id:syllabus_id,gallery_URL:$('#galleryurl').text() , github_userid:$('#githubaccount').text() , project_description: $('#myproject').val()}
	   $.ajax({
              type: "POST",
              url: "../lesson-maker/put-profile.php",
              data: { profile: profile },
              datatype: "json"
               }).done(function( data) {
	     alert("Your Profile Was Updated");
		 getProfile(user);
		 syllabus.students[user].project_description = profile.project_description;
		 syllabus.students[user].gallery_URL = profile.gallery_URL;
		 syllabus.students[user].github_userid = profile.github_userid;
		 $("#myprofile").modal('hide');
		});
		}
	});
	//   submit homework
		
		$("#submit-exercise").click(function() {
			var homework = {student_email:user,exercise_id:$("#submit-exercise").attr("exercise-id"),exerciseLink:$("#exercise-link").text(),exerciseComment:$("#exercise-comment").val()};
			$.ajax({
				type:"POST",
				url:"../lesson-maker/submit-homework.php",
				data: homework,
				datatype:"json"
			}).done(function(data) {
	           alert("Your exercise was submitted");
			   $("#submit-exercise").modal('hide');
               var data = $.parseJSON(data);
		//	   syllabus.lessons[data.lesson_id].exercises[data.exercise_exercise_id].homeworks[data.homework_id] = data;
			   var newsubmission = {comment:data.comment, first_name:data.first_name, homework_id:data.homework_id, student_email:data.student_email, topics: syllabus.lessons[data.lesson_id].topics, url:data.URL};
			    if (!syllabus.students[data.student_email].homeworks) {
					syllabus.students[data.student_email].homeworks = {};
				}
				// update the student record with the new submission
			   syllabus.students[data.student_email].homeworks[data.homework_id] = newsubmission;
			   showLesson(data.lesson_id);
		    });
		});
		$("#submit-review").click(function() {
			var grade;
			if ($("#review-grade").hasClass("icon-thumbs-up")) {
				grade=1;
			} else {
				grade=0;
			}
			var review = {comment:$("#review-comment").val(), student_email: user , homework_id:$("#submit-review").attr("homework-id"), grade:grade};
			$.ajax({
				type:"POST",
				url:"../lesson-maker/put-review.php",
				data: review,
				datatype:"json"
			}).done(function(data) {
				alert("Your comment was entered");
				  var data = $.parseJSON(data);
				 $("#write-review").modal('hide');
				// syllabus.lessons[data.lesson_id].exercises[data.exercise_id].homeworks[data.homework_homework_id].reviews[data.review_id] = data;
				 showLesson(data.lesson_id);
			});
		});
		
});
