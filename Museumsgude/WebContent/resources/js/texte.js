	
function Text ()  {
		  var txtHash = window.location.hash;
		  var txtBildnr = txtHash.substring(1, 3);
		  var txtQuelle = "resources/texte/" + txtBildnr + ".txt";
		  var txtZiel = ".bildcontent_text p#text" + txtBildnr;
		  var txtSpeicher = ".bildcontent_text p#speicher" + txtBildnr;
			    
			    $(txtSpeicher).load(txtQuelle, function(msg)  {
			       	var myArray = msg.split("\n");
					var Bildtext = "";
			        for(var i=0;i<myArray.length;i++)
			        {
			        	var Bildtext = Bildtext + myArray[i] + "<br>";
			        }
				    $(txtZiel).html(Bildtext);
			    });
}

$(".uebersichtsspan").click(function() {
	window.setTimeout("Text ()", 1000);
});