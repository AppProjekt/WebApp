	
function Text ()  {
		var Hash = window.location.hash;
		  var Bildnr = Hash.substring(1, 3);
		  var Quelle = "resources/texte/" + Bildnr + ".txt";
		  var Ziel = ".bildcontent_text p#text" + Bildnr;
		  var Speicher = ".bildcontent_text p#speicher" + Bildnr;
			    
			    $(Speicher).load(Quelle, function(msg)  {
			       	var myArray = msg.split("\n");
					var Bildtext = "";
			        for(var i=0;i<myArray.length;i++)
			        {
			        	var Bildtext = Bildtext + myArray[i] + "<br>";
			        }
				    $(Ziel).html(Bildtext);
			    });
			   
			  }

$("li").click(function() {
	window.setTimeout("Text ()", 1000);
	});
$(function () {
	Text ();
});

  	if (window.location.hash == "") {
  		window.location.hash = "#indexa";
  	}
/*
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
/*
function renderDetails_1(bildtexte) {
	var Bildtext = bildtexte.text;
	var Bildtextsplit = Bildtext.split("/n");
	alert(Bildtextsplit);
	$('#text1').html(Bildtextsplit);
}

function renderDetails_2(bildtexte) {
	$('#text2').html(bildtexte.text);
}*/