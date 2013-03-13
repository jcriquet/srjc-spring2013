$(document).ready(function() {
	var getwiki = function() {
		$.ajax({
	       type: "GET",
           url: "getwiki.php",
           datatype: "json"
	    }).done(function(data) {
		   var terms = $.parseJSON(data);
		   var content = '<dl">';
		   $.each(terms, function(index, value) {			   
			   content += '<dt>'+value.term+'</dt>';
			   if (value.definition) {
	               $.each(value.definition,function(index2,value2) {
			         content += '<dd>'+value2.definition+'&mdash;<small>'+value2.first_name+'</small></dd>';
			       });
			   };
		   });
		    content += '</dl>';
			$("#glossary").html(content);
	    });
	}
	getwiki();
	$("#submit-definition").click(function() {
		$.ajax({
			  type: "POST",
			  url: "new-term.php", 
			  data: { term:$("#enter-term").text(), definition: $("#enter-definition").val(), student_email:user }
			}).done(function(data) {
				alert("Your new definition was entered.");
				getwiki();
			});
	});
	$.ajax({
		type: "GET",
        url: "get-links.php",
        datatype: "json"
	}).done(function(data) {
		 var links = $.parseJSON(data); 
		 console.log(links);
		 var linkcontent = "";
		 $.each(links, function(index, value) {
			linkcontent += '<p><a href="'+value.url+'">'+value.title+'</a></p>';
		 });
		 $("#references").html(linkcontent);
	});
});