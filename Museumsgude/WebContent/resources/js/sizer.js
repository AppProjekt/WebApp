var Bildschirmbreite = window.innerWidth;
var Contentbreite = Bildschirmbreite - 200;
	var HalfContentbreite = (Contentbreite / 2) * -1; 

$("#container").css( "width", Contentbreite );
$(".indexcontent").css( "width", Contentbreite );
$(".indexcontent").css( "margin-left", HalfContentbreite );

$(".bildcontent").css( "width", Contentbreite );
$(".bildcontent").css( "margin-left", HalfContentbreite );

/*Player*/
$("#jp_container_1").css( "width", Bildschirmbreite );

/*Kacheln*/
var Kachelbreite = Contentbreite / 3;
var Bildbreite = Kachelbreite - 7;

$("div#container .item a img").css( "max-width", Bildbreite );