
    $(function() { 
    	var BildnrInBug = "";
		  var Hash = window.location.hash;
		//  var Bildnr = Hash.substring(1, 3);
		  var Bildnr = Hash.replace(/\D+/g,"");
		  if (Bildnr == BildnrInBug) {
			  $("#jquery_jplayer_1").jPlayer({
			         ready: function () {
			          $(this).jPlayer("setMedia", {
			             title: "Kein Bild ausgewählt.",
			            mp3: " "
			          });
			        
			        },
			        swfPath: "/js",
			        supplied: "mp3",
			        
			      });
		  } else {
    	var Titel = Bildnr;
    	
  var Quelle = "resources/media/" + Bildnr + ".mp3";
  
       $("#jquery_jplayer_1").jPlayer({
         ready: function () {
          $(this).jPlayer("setMedia", {
             title: "Bild " + Titel,
            mp3: Quelle
          });
        
        },
        swfPath: "/js",
        supplied: "mp3",
        
      });
       $("#playerimg").attr("src", "resources/images/" + Bildnr + ".png");
	   
	}
});

	function Play () {
		$("#jquery_jplayer_1").jPlayer("play", 0);
		
	}
	
	
	$( "#TrackwahlPlay" ).click(function() {
	var BildnrInBug = "";
		  var Hash = window.location.hash;
		//  var Bildnr = Hash.substring(1, 3);
		  var Bildnr = Hash.replace(/\D+/g,"");
		  if (Bildnr == BildnrInBug) {
			  $("#jquery_jplayer_1").jPlayer("play");
		  } else {
		  var Titel = $("#jp_container_1 div div.jp-details ul li span").html();
		  if ("Bild " + Bildnr != Titel) {
			  var Titel = Bildnr;
				
			  var Quelle = "resources/media/" + Bildnr + ".mp3";
			
			 			 
				  $("#jquery_jplayer_1").jPlayer("destroy");
				 
				    $(document).ready(function(){
				       $("#jquery_jplayer_1").jPlayer({
				         ready: function () {
				          $(this).jPlayer("setMedia", {
				             title: "Bild " + Titel,
				            mp3: Quelle
				          });
				          
				        },
				        swfPath: "/js",
				        supplied: "mp3",
				        
				      });
				 $("#playerimg").attr("src", "resources/images/" + Bildnr + ".png");
				    });
				 window.setTimeout("Play ()", 1000);
					}
			  
		   else {
			   
		  }
		  }
	});