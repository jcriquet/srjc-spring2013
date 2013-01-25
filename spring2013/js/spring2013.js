$(document).ready(function() {
	var currentLesson = 1;
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
			if (syllabus.lessons[lessonID].reads[index].title) {
			 lesson += '<p><a href="'+syllabus.lessons[lessonID].reads[index].reading_url+'">'+syllabus.lessons[lessonID].reads[index].title+'&nbsp;'+syllabus.lessons[lessonID].reads[index].description+'</a></p>';
			} else {
				lesson += '<p><a href="'+syllabus.lessons[lessonID].reads[index].reading_url+'">'+syllabus.lessons[lessonID].reads[index].description+'</a></p>';
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
         console.log(data);
         syllabus = data[syllabus_id];
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
			 $("#student-list").append("<p class=student-listing>"+value.first_name+"</p>");
	      });
		 };
		 showLesson($("table#lesson-list tbody tr").eq(currentLesson).attr("data-id"));
		 $("table#lesson-list tbody tr").eq(currentLesson).addClass("info");
      });
   $("#general-info-hdr").click(function() {
	   $("#general-info").slideToggle('slow');
   });
   
});
