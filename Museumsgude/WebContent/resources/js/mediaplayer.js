$(function() { 
				$("#jquery_jplayer_1").jPlayer({
						ready: function () {
							$(this).jPlayer("setMedia", {
								title: " ",
								m4a: " "
							});
						},
						swfPath: "../../js",
						supplied: "m4a"
					});
});

	function Play () {
		$("#jquery_jplayer_1").jPlayer("play", 0);

	}


	$("#TrackwahlPlay").click(function() {
		  var BildnrInBug = "";
		  var plHash = window.location.hash;
		  var plBildnr = plHash.replace(/\D+/g,"");
		  var plimg = plBildnr.replace(/^0/,"");
		  if (plBildnr == BildnrInBug) {
			  $("#jquery_jplayer_1").jPlayer("play");
		  } 
		  else {
			  var plQuelle = "resources/musikstuecke/" + plBildnr + ".mp3";
			  
				    $("#jquery_jplayer_1").jPlayer("destroy");

				    $(function(){
				       $("#jquery_jplayer_1").jPlayer({
				          ready: function () {
				          $(this).jPlayer("setMedia", {
				             title: " ",
				             m4a: plQuelle
				          	 });

				          },
				        swfPath: "../../js",
				        supplied: "m4a"
				       });
				      $("#playerimg").attr("src", "resources/bilder/" + plimg + ".jpg");
				    });
				 window.setTimeout("Play ()", 1000);
	}
	});