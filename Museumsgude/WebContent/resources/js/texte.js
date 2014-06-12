// The root URL for the RESTful services
var rootURL = "http://localhost:8080/Museumsgude/rest/bildtexte";

var currentText;

$(document).ready(function() {
	$('li').click(function() {
	    var id = $(this).attr('id');
	    findById(id);
		});
	});

//Text 1
function findById(id) {
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.text);
			currentText = data;
			if(id==1)
			renderDetails_1(currentText);
			if(id==2)
			renderDetails_2(currentText);
		}
	});
}

function renderDetails_1(bildtexte) {
	$('#text1').val(bildtexte.text);
}

function renderDetails_2(bildtexte) {
	$('#text2').val(bildtexte.text);
}