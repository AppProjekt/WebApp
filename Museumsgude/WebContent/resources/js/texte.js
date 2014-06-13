// The root URL for the RESTful services
var rootURL = "http://localhost:8080/Museumsgude/rest/bildtexte";

var currentText;

findById_1(1);
findById_2(2);

//Text 1
function findById_1(id) {
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.text);
			currentText = data;
			renderDetails_1(currentText);
		}
	});
}

function renderDetails_1(bildtexte) {
	/*alert(bildtexte.text);*/
	var Bildtext = bildtexte.text;
	$('#text1').text(Bildtext);
}

//Text 2
function findById_2(id) {
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.text);
			currentText = data;
			renderDetails_2(currentText);
		}
	});
}

function renderDetails_2(bildtexte) {
	$('#text2').val(bildtexte.text);
}