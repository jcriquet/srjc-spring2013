$(document).ready(function() {
	var getwiki = function() {
		$.ajax({
	       type: "GET",
           url: "getwiki.php",
           datatype: "json"
	    }).done(function(data) {
		   terms = $.parseJSON(data);
		   var content = '<dl class="dl-horizontal">';
		   $.each(terms, function(index, value) {			   
			   content += '<dt>'+value.term+'</dt>';
			   if (value.definition) {
	               $.each(value.definition,function(index2,value2) {
					 console.log(value2); 
			         content += '<dd>'+value2.definition+'</dd>';
			       });
			   };
		   });
		    content += '</dl>';
			$("#glossary").html(content);
	    });
	}
	getwiki();
});