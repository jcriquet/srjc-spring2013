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
					   if (value2.email === user) {
			         		content += '<dd>'+value2.definition+'&mdash;<small>'+value2.first_name+'</small>&nbsp;<a class="btn btn-mini remove-definition" data-id="'+value2.definition_id+'"><i class="icon-remove"></i></a></dd>';
					   } else {
						   content += '<dd>'+value2.definition+'&mdash;<small>'+value2.first_name+'</small></dd>';
					   }
			       });
			   };
		   });
		    content += '</dl>';
			$("#glossary").html(content);
			$("a.remove-definition").click(function() {
				var definitionID = $(this).attr("data-id");
				$.ajax({
					  type: "POST",
					  url: "remove-definition.php", 
					  data: { definition: definitionID }
					}).done(function(data) {
						alert("Your definition was deleted.");
						getwiki();
					});
	});
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