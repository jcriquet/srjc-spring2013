$(document).ready(function() {
	var syllabus;
	$("#submit-homework").modal("hide");
	$("#submit-review").modal("hide");
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
    function showLesson(lessonID) {
	    $("#lesson-topic").html(syllabus.lessons[lessonID].topics);
		 $("#lesson-desc").html(syllabus.lessons[lessonID].description);
		var lesson = "";
		if (syllabus.lessons[lessonID].blogpost) {
		    lesson += "<div class=blog>"+syllabus.lessons[lessonID].blogpost+"</div>";
		};
		lesson += "<h2>Reading</h2>";
		if (syllabus.lessons[lessonID].reads) {
		$.each(syllabus.lessons[lessonID].reads, function(index, value) {
			if (syllabus.lessons[lessonID].reads[index].title && syllabus.lessons[lessonID].reads[index].reading_url) {
			 lesson += '<p><a href="'+syllabus.lessons[lessonID].reads[index].reading_url+'">'+syllabus.lessons[lessonID].reads[index].title+'&nbsp;'+syllabus.lessons[lessonID].reads[index].description+'</a></p>';
			} else if (!syllabus.lessons[lessonID].reads[index].title && syllabus.lessons[lessonID].reads[index].reading_url)  {
				lesson += '<p><a href="'+syllabus.lessons[lessonID].reads[index].reading_url+'">'+syllabus.lessons[lessonID].reads[index].description+'</a></p>';
			} else if (syllabus.lessons[lessonID].reads[index].title && !syllabus.lessons[lessonID].reads[index].reading_url) {
				lesson += '<p>'+syllabus.lessons[lessonID].reads[index].title+'&nbsp;'+syllabus.lessons[lessonID].reads[index].description+'</p>';
			} else {
				lesson += '<p>'+syllabus.lessons[lessonID].reads[index].description+'</p>';
			}
	      });
		}
		lesson += "<h2>Explore </h2>";
		lesson += "<h4>Non-manditory readings and exercises.  Choose the ones that you find interesting.</h4>"; 
		if (syllabus.lessons[lessonID].explores) {
		$.each(syllabus.lessons[lessonID].explores, function(index, value) {
			 lesson += '<p><a href="'+syllabus.lessons[lessonID].explores[index].url+'">'+syllabus.lessons[lessonID].explores[index].description+'</a></p>';
	      });
		}
		lesson += "<h2>Exercises</h2>";
		if (syllabus.lessons[lessonID].exercises) {
		$.each(syllabus.lessons[lessonID].exercises, function(index, value) {
			if (syllabus.lessons[lessonID].exercises[index].url) {
			   lesson += '<p> <a class="btn btn-warning submit-hw" data-exercise="'+syllabus.lessons[lessonID].exercises[index].exercise_id+'">Submit</a>&nbsp;<a href="'+syllabus.lessons[lessonID].exercises[index].url+'">'+syllabus.lessons[lessonID].exercises[index].description+'</a></p>';
			} else {
				lesson += '<p> <a class="btn btn-warning submit-hw" data-exercise="'+syllabus.lessons[lessonID].exercises[index].exercise_id+'">Submit</a>&nbsp;'+syllabus.lessons[lessonID].exercises[index].description+'</p>';
			}
	      if (syllabus.lessons[lessonID].exercises[index].homeworks) {
			  $.each(syllabus.lessons[lessonID].exercises[index].homeworks,function(index2,value2) {
				  
				  if (syllabus.lessons[lessonID].exercises[index].homeworks[index2].URL) {
			   lesson += '<p class="muted"><a class="btn thumbs" href="#submit-review"><i class="icon-thumbs-up"></i></a><a class="btn thumbs" href="#submit-review"><i class="icon-thumbs-down"></i></a>&nbsp;&nbsp;<a href="'+syllabus.lessons[lessonID].exercises[index].homeworks[index2].URL+'">'+syllabus.lessons[lessonID].exercises[index].homeworks[index2].first_name+'</a>&mdash; '+syllabus.lessons[lessonID].exercises[index].homeworks[index2].comment+'</p>';
			} else {
				lesson += '<p class="muted"><a class="btn thumbs" href="#submit-review"><i class="icon-thumbs-up"></i></a><a class="btn thumbs" href="#submit-review"><i class="icon-thumbs-down"></i></a>&nbsp;&nbsp;'+syllabus.lessons[lessonID].exercises[index].homeworks[index2].first_name+'&mdash;'+syllabus.lessons[lessonID].exercises[index].homeworks[index2].comment+'</p>';
			}	
						  
			  });
		  }
		  });
		}		
		$("#lesson-info").html(lesson);	
		$(".submit-hw").click(function() {
			$("#submit-homework").modal("show");
			$("#submit-exercise").attr("exercise-id",$(this).attr("data-exercise"));			
		});	
		$(".thumbs").click(function() {
			$("#submit-review").modal("show");
		//	$("#submit-exercise").attr("exercise-id",$(this).attr("data-exercise"));			
		});	
    }
    $.ajax({
       type: "GET",
       url: "../xanthippe/xanthippe.php",
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
			  $("#viewprofile").modal('show');
		 });
		 };
		 showLesson($("table#lesson-list tbody tr").eq(currentLesson).attr("data-id"));
		 $("table#lesson-list tbody tr").eq(currentLesson).addClass("info");
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
			   syllabus.lessons[data.lesson_id].exercises[data.exercise_exercise_id].homeworks[data.homework_id] = data;
			   showLesson(data.lesson_id);
		    });
		});
		$("#submit-rev").click(function() {
		});

});
