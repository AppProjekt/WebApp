// The root URL for the RESTful services
var rootURL = "http://localhost:8080/Museumsgude/rest/bildtexte";

var currentText;


findById_1_A(1);
findById_2_A(2);

$("#Admin_text_1", "#Admin_text_2", "#Admin_text_3", "#Admin_text_4").click(function()
	{
		$(this).addClass("dotted");
	});

$("#Admin_text_1",  "#Admin_text_2", "#Admin_text_3", "#Admin_text_4").focusout( function()
	{
		$(this).removeClass("dotted");
	});

//Text 1
function findById_1_A(id) {
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.text);
			currentText = data;
			renderDetails_1_A(currentText);
		}
	});
}

function renderDetails_1_A(bildtexte) {
	$('#Admin_text_1').val(bildtexte.text);
}

$('#btnSave1').click(function() {
	updateText_1();
return false;
});

function updateText_1() {
console.log('updateText');
$.ajax({
	type: 'PUT',
	contentType: 'application/json',
	url: rootURL + '/' + 1,
	dataType: "json",
	data: formToJSON_1(),
	success: function(data, textStatus, jqXHR){
		alert('Text updated successfully');
	},
	error: function(jqXHR, textStatus, errorThrown){
		alert('updateText error: ' + textStatus);
	}
});
}

function formToJSON_1() {
var textId = 1;
return JSON.stringify({
	"id": textId == "" ? null : textId, 
	"text": $('#Admin_text_1').val(), 
	});
}

//Text 2
function findById_2_A(id) {
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.text);
			currentText = data;
			renderDetails_2_A(currentText);
		}
	});
}

function renderDetails_2_A(bildtexte) {
	$('#Admin_text_2').val(bildtexte.text);
}

$('#btnSave2').click(function() {
	updateText_2();
return false;
});

function updateText_2() {
console.log('updateText');
$.ajax({
	type: 'PUT',
	contentType: 'application/json',
	url: rootURL + '/' + 2,
	dataType: "json",
	data: formToJSON_2(),
	success: function(data, textStatus, jqXHR){
		alert('Text updated successfully');
	},
	error: function(jqXHR, textStatus, errorThrown){
		alert('updateText error: ' + textStatus);
	}
});
}

function formToJSON_2() {
var textId = 2;
return JSON.stringify({
	"id": textId == "" ? null : textId, 
	"text": $('#Admin_text_2').val(), 
	});
}

//Kommt noch

//Replace broken images with generic wine bottle
$("img").error(function(){
$(this).attr("src", "pics/generic.jpg");

});

function newText() {
	console.log('prishol_new');
	$('#btnDelete').hide();
	currentWine = {};
	renderDetails(currentText); // Display empty form
}

function addText() {
	console.log('addText');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL,
		dataType: "json",
		data: formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Text created successfully');
			$('#btnDelete').show();
			$('#wineId').val(data.id);
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('addText error: ' + textStatus);
		}
	});
}

function deleteText() {
	console.log('deleteText');
	$.ajax({
		type: 'DELETE',
		url: rootURL + '/' + $('#wineId').val(),
		success: function(data, textStatus, jqXHR){
			alert('Text deleted successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deleteText error');
		}
	});
}