/*
Standardanimation 'pop' direkt im jQuery mobile Script festgelegt.
*/
//Einblendungen ausblenden
$('.einbwischen').live('click', function() {
	$('.einbwischen').css('display', 'none');
});
//Wird auch in Wischbefehlen bei Index ausgeblendet

$('.einbinfo').live('click', function() {
	$('.einbinfo').css('display', 'none');
});
$('audio').live('click', function() {
	$('.einbinfo').css('display', 'none');
});

$('.einbtippen').live('click', function() {
	$('.einbtippen').css('display', 'none');
});
$('#grid > li').live('click', function() {
	$('.einbtippen').css('display', 'none');
});

$('.einbuebers').live('click', function() {
	$('.einbuebers').css('display', 'none');
});
$('.zuruebersicht').live('click', function() {
	$('.einbuebers').css('display', 'none');
});
//Auch bei Zur Startseite

$('.einbhoeren').live('click', function() {
	$('.einbhoeren').css('display', 'none');
});
$('#TrackwahlPlay').live('click', function() {
	$('.einbhoeren').css('display', 'none');
});

function einbggb () {
	$('.einbggb').css('display', 'none');
};
//=================
//$(function() {
	//var spanbreite = $('.uebersichtsspan').css('width');
	//$('.uebersichtsspan').css('height', spanbreite);
	//$('.uebersichtsspan').css('background-size', '100% 100%');
//});
/*Anfang Index*/
/*==Auf Seite A==*/
$('body #indexa').live("swipeleft", function(){
        $.mobile.changePage('#indexb');
        $('.einbwischen').css('display', 'none');
      });
	$("#indexa > div.indexheader > span.rechtsbuendig").live('click', function() {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexb');
	});
$('body #indexa').live("swiperight", function(){
       $('.einbwischen').css('display', 'none');
        $.mobile.changePage('#indexc');
      });
	$("#indexa > div.indexheader > span.linksbuendig").live('click', function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexc');
	});
/*==Auf Seite B==*/

$('body #indexb').live("swiperight", function(){
       $('.einbwischen').css('display', 'none');
        $.mobile.changePage('#indexa');
      });
	$("#indexb > div.indexheader > span.linksbuendig").live('click', function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexa');
	});
/*==Auf Seite C==*/

$('body #indexc').live("swipeleft", function(){
        $('.einbwischen').css('display', 'none');
        $.mobile.changePage('#indexa');
      });
	$("#indexc > div.indexheader > span.rechtsbuendig").live('click', function() {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexa');
	});
/*Ende Index*/

/* ===================
	Anfang Bilder
 		======================*/
function Bildnummer () {
	Hash = window.location.hash;
	Bildnr = Hash.replace(/\D+/g,"");
	A = "#" + Bildnr + "a";
	B = "#" + Bildnr + "b";
	C = "#" + Bildnr + "c";
	ggbQuelle = "resources/animationVideo/" + Bildnr + ".html";
	ggbZiel = "#ggb" + Bildnr;
};
$('#grid > li').live('click', function() {
	setTimeout(Bildnummer, 500);
	setTimeout(Bildnummer, 2000);
	setTimeout(Text, 3000);
	setTimeout(Bildnummer, 5000);
});
/*==Auf Seite A==*/
$(".bilda > div.bildheader > span.rechtsbuendig").live('click', function() {
	        $.mobile.changePage(B);
});
$(".bilda > div.bildheader > span.linksbuendig").live('click', function() {
	       $(ggbZiel).load(ggbQuelle);
	        $.mobile.changePage($(C));
	        setTimeout(einbggb, 10000);
});
$(".bilda").live("swipeleft", function(){
        $.mobile.changePage(B);
      });
$('.bilda').live("swiperight", function(){
	 $(ggbZiel).load(ggbQuelle);
        $.mobile.changePage($(C));
        setTimeout(einbggb, 10000);
});
/*==Auf Seite B==*/
	$(".bildb > div.bildheader > span.linksbuendig").live('click', function() {
	        $.mobile.changePage(A);
	});
$(".bildb").live("swiperight", function(){
      $.mobile.changePage(A);
      });
/*==Auf Seite C==*/
	$(".bildc > div.bildheader > span.rechtsbuendig").live('click', function() {
	       $('.bildcontent_ggb').html('<p style="margin: 80px; text-align: center; padding: 10px; border: 5px solid #333;">Zu diesem Werk ist leider keine Animation vorhanden.<br><br>Tippen Sie auf <i>Bild</i>, um zur&uuml;ckzukehren.</p>');
	        $.mobile.changePage(A);
	});
$(".bildc .bildheader").live("swipeleft", function(){
      $('.bildcontent_ggb').html('<p style="margin: 80px; text-align: center; padding: 10px; border: 5px solid #333;">Zu diesem Werk ist leider keine Animation vorhanden.<br><br>Tippen Sie auf <i>Bild</i>, um zur&uuml;ckzukehren.</p>');
        $.mobile.changePage(A);
      });

/*==Zur Startseite==*/

$(".zuruebersicht").live('click', function() {
		$.mobile.changePage('#indexa');
		$('.textfeld').html("");
		$('.speicher').html("");
});
//$('.bilda').live('pagecreate', function(){
	$('.bilda').live('swipedown', function() {
		$.mobile.changePage('#indexa');
		$('.textfeld').html("");
		$('.speicher').html("");
		$('.einbuebers').css('display', 'none');
	});
	$('.bilda').live('swipeup', function() {
		$.mobile.changePage('#indexa');
		$('.textfeld').html("");
		$('.speicher').html("");
		$('.einbuebers').css('display', 'none');
	});
/*Mediaplayer erst nach erstem Bildaufruf anzeigen*/
	$('#grid > li').live('click', function() {
		$('#footer').css('display', 'block');
});
	
//Texte
	function Text ()  {
			  var txtQuelle = "resources/texte/" + Bildnr + ".txt";
			  var txtZiel = ".bildcontent_text p#text" + Bildnr;
			  var txtSpeicher = ".bildcontent_text p#speicher" + Bildnr;
				    
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