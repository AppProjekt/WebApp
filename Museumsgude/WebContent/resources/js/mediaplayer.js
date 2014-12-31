$(function() { 
    	var BildnrInBug = "";
		  var plHash = window.location.hash;
		  //  var Bildnr = Hash.substring(1, 3);
		  var plBildnr = plHash.replace(/\D+/g,"");
		  var plimg = plBildnr.replace(/^0/,"");
		  if (plBildnr == BildnrInBug) {
				$("#jquery_jplayer_1").jPlayer({
						ready: function () {
							$(this).jPlayer("setMedia", {
								title: "Kein Bild ausgewaehlt.",
								m4a: " "
							});
						},
						swfPath: "../../js",
						supplied: "m4a"
					});
				
		  } else {
    	var plTitel = plBildnr;
    	
    	var plQuelle = "resources/musikstuecke/" + plBildnr + ".mp3";
    	$("#jquery_jplayer_1").jPlayer({
    	  ready: function () {
          $(this).jPlayer("setMedia", {
             title: "Bild " + plTitel,
             m4a: plQuelle				
          });
        
        },
        swfPath: "/js",
        supplied: "m4a"
        
      });
    	
       $("#playerimg").attr("src", "resources/bilder/" + plimg + ".jpg");

	}
});

	function Play () {
		$("#jquery_jplayer_1").jPlayer("play", 0);

	}


	$("#TrackwahlPlay").click(function() {
		  var BildnrInBug = "";
		  var plHash = window.location.hash;
		  //  var Bildnr = Hash.substring(1, 3);
		  var plBildnr = plHash.replace(/\D+/g,"");
		  var plimg = plBildnr.replace(/^0/,"");
		  if (plBildnr == BildnrInBug) {
			  $("#jquery_jplayer_1").jPlayer("play");
		  } 
		  else {
		  var plTitel = $("#jp_container_1 div div.jp-details ul li span").html();
		  if ("Bild " + plBildnr != plTitel) {
			  var plTitel = plBildnr;
			  
			  var plQuelle = "resources/musikstuecke/" + plBildnr + ".mp3";


				    $("#jquery_jplayer_1").jPlayer("destroy");

				    $(document).ready(function(){
				       $("#jquery_jplayer_1").jPlayer({
				          ready: function () {
				          $(this).jPlayer("setMedia", {
				             title: "Bild " + plTitel,
				             m4a: plQuelle
				          	 });

				          },
				        swfPath: "/js",
				        supplied: "m4a"
				       });
				      $("#playerimg").attr("src", "resources/bilder/" + plimg + ".jpg");
				    });
				 window.setTimeout("Play ()", 1000);
		   } else {

		   }
	}
	});