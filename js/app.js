


$('#ajaxButton1').click( function() {
	$("#ajaxDiv").load("content.html #div1");
});

$('#ajaxButton2').click(function() {
	$.get("wrong.html", function(data) {
		$('#ajaxDiv').html(data);
	}).fail(function() {
		$('#ajaxDiv').html("<p>There Was An Error, This Was Meant To Happen</p>");
	});
});

$('#ajaxButton3').click( function() {
	$("#ajaxDiv").load("content.html #div2");
});