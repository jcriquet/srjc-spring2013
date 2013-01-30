$(document).ready(function() {
	var currentLesson = 2;
	var syllabus;
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
		lesson += "<h2>Exercises</h2>";
		if (syllabus.lessons[lessonID].exercises) {
		$.each(syllabus.lessons[lessonID].exercises, function(index, value) {
			if (syllabus.lessons[lessonID].exercises[index].url) {
			   lesson += '<p><a href="'+syllabus.lessons[lessonID].exercises[index].url+'">'+syllabus.lessons[lessonID].exercises[index].description+'</a></p>';
			} else {
				lesson += '<p>'+syllabus.lessons[lessonID].exercises[index].description+'</p>';
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
		$("#lesson-info").html(lesson);
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
		 $("#course-info").html(syllabus.course_name+"&nbsp;&mdash;&nbsp;"+syllabus.semester+"&nbsp;|&nbsp;"+syllabus.srjc_id+"&nbsp;|&nbsp; Section "+syllabus.section_number);
		 $.each(syllabus.lessons, function(index, value) {
			 $("#lesson-list").append("<tr class=lesson-listing data-id="+value.lesson_id+"><td>"+value.lesson_date.substr(0,value.lesson_date.indexOf(","))+"</td><td>"+value.topics+"</td></tr>");
		 });
		 $(".lesson-listing").click(function() {
			 showLesson($(this).attr("data-id"));	
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
			    var gallerylink = "<a href="+syllabus.students[$(this).attr("data-id")].gallery_URL+">"+syllabus.students[$(this).attr("data-id")].gallery_URL+"</a>";
			   $("#studentgalleryurl").html(gallerylink);
			  } else {
				$("#studentgalleryurl").html("");  
			  }
			  $("#viewprofile").modal('show');
		 });
		 };
		 showLesson($("table#lesson-list tbody tr").eq(currentLesson).attr("data-id"));
		 $("table#lesson-list tbody tr").eq(currentLesson).addClass("info");
      });
   $("#general-info-hdr").click(function() {
	   $("#general-info").slideToggle('slow');
   });
   
});
