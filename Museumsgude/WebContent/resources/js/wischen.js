//Einblendungen ausblenden
$('.einbwischen').live('click', function() {
	$('.einbwischen').css('display', 'none');
});
//Wird auch in Wischbefehlen bei Index ausgeblendet. Zeile 50 - 91

$('.einbinfo').live('click', function() {
	$('.einbinfo').css('display', 'none');
});
$('audio').live('click', function() {
	$('.einbinfo').css('display', 'none');
});

$('.einbtippen').live('click', function() {
	$('.einbtippen').css('display', 'none');
});
$('.uebersichtsspan').live('click', function() {
	$('.einbtippen').css('display', 'none');
});

$('.einbuebers').live('click', function() {
	$('.einbuebers').css('display', 'none');
});
$('.zuruebersicht').live('click', function() {
	$('.einbuebers').css('display', 'none');
});

$('.einbhoeren').live('click', function() {
	$('.einbhoeren').css('display', 'none');
});
$('#TrackwahlPlay').live('click', function() {
	$('.einbhoeren').css('display', 'none');
});
//=================
$(function() {
	var spanbreite = $('.uebersichtsspan').css('width');
	$('.uebersichtsspan').css('height', spanbreite);
	$('.uebersichtsspan').css('background-size', '100% 100%');
});
$(function() {
	
	var calcleftInnerwidth = $(document).width();
	var calcleft = calcleftInnerwidth / 2 - 65;
	$('span.aktiv').css('left', calcleft + 'px');
	$('span.zuruebersicht').css('left', calcleft + 'px');
	
	var bildaheight = screen.availHeight;
	var bildaimgheight = bildaheight * 0.7;
	var bildaimgleft = (calcleftInnerwidth / 2) - (bildaimgheight / 2);
	$('.bildcontent > img').css('left', bildaimgleft + 'px');
});
/*Anfang Index*/
/*==Auf Seite A==*/

$('body #indexa').live("swipeleft", function(){
        var nextpage = $("#indexb");
        $.mobile.changePage(nextpage, 'pop');
        $('.einbwischen').css('display', 'none');
      });
$('#indexa').live('pagecreate', function(r){
	$("#indexa > div.indexheader > span.rechtsbuendig").click(function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexb', 'pop');
	});
});
$('body #indexa').live("swiperight", function(){
       var prevpage = $("#indexc");
       $('.einbwischen').css('display', 'none');
        $.mobile.changePage(prevpage, 'pop');
      });
$('#indexa').live('pagecreate', function(r){
	$("#indexa > div.indexheader > span.linksbuendig").click(function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexc', 'pop');
	});
});
/*==Auf Seite B==*/

$('body #indexb').live("swiperight", function(){
       var prevpage = $("#indexa");
       $('.einbwischen').css('display', 'none');
        $.mobile.changePage(prevpage, 'pop', true);
      });
$('#indexb').live('pagecreate', function(r){
	$("#indexb > div.indexheader > span.linksbuendig").click(function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexa', 'pop');
	});
});
/*==Auf Seite C==*/

$('body #indexc').live("swipeleft", function(){
        var nextpage = $("#indexa");
        $('.einbwischen').css('display', 'none');
        $.mobile.changePage(nextpage, 'pop');
      });
$('#indexc').live('pagecreate', function(r){
	$("#indexc > div.indexheader > span.rechtsbuendig").click(function(r) {
		$('.einbwischen').css('display', 'none');
		$.mobile.changePage('#indexa', 'pop');
	});
});
/*Ende Index*/

/* ===================
	Anfang Bilder
 		======================*/

/*==Auf Seite A==*/

$(".bilda").live("swipeleft", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var B = "#" + wischBildnr + "b";
        var nextpage = $(B);
        $.mobile.changePage(nextpage, 'pop');
        
      });
$('.bilda').live('pagecreate', function(r){
	$(".bilda > div.bildheader > span.rechtsbuendig").click(function(r) {
		$('.bilda').die('pagecreate');
		var clickHash = window.location.hash;
		var clickBildnr = clickHash.replace(/\D+/g,"");
		var B = "#" + clickBildnr + "b";
	        var nextpage = $(B);
	        $.mobile.changePage(nextpage, 'pop');
	});
});
$('.bilda').live("swiperight", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var ggbQuelle = "resources/animationVideo/" + wischBildnr + ".html";
	var ggbZiel = "#ggb" + wischBildnr;
	var C = "#" + wischBildnr + "c";
       var prevpage = $(C);
        $.mobile.changePage(prevpage, 'pop');
        $(ggbZiel).load(ggbQuelle);
       
      });
$('.bilda').live('pagecreate', function(r){
	$(".bilda > div.bildheader > span.linksbuendig").click(function(r) {
		var clickHash = window.location.hash;
		var clickBildnr = clickHash.replace(/\D+/g,"");
		var ggbQuelle = "resources/animationVideo/" + clickBildnr + ".html";
		var ggbZiel = "#ggb" + clickBildnr;
		var C = "#" + clickBildnr + "c";
	       var prevpage = $(C);
	        $.mobile.changePage(prevpage, 'pop');
	        $(ggbZiel).load(ggbQuelle);
	});
	$('.bilda').die('pagecreate');
});
/*==Auf Seite B==*/

$(".bildb").live("swiperight", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var A = "#" + wischBildnr + "a";
       var prevpage = $(A);
        $.mobile.changePage(prevpage, 'pop');
       
      });
$('.bildb').live('pagecreate', function(r){
	$(".bildb > div.bildheader > span.linksbuendig").click(function(r) {
		$('.bildb').die('pagecreate');
		var clickHash = window.location.hash;
		var clickBildnr = clickHash.replace(/\D+/g,"");
		var A = "#" + clickBildnr + "a";
	        var nextpage = $(A);
	        $.mobile.changePage(nextpage, 'pop');
	});
});
/*==Auf Seite C==*/

$(".bildc .bildheader").live("swipeleft", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var A = "#" + wischBildnr + "a";

        var nextpage = $(A);
        $.mobile.changePage(nextpage, 'pop');
        $('.bildcontent_ggb').html('<p style="margin: 80px; text-align: center; padding: 10px; border: 5px solid #333;">Zu diesem Werk ist leider keine Animation vorhanden.<br><br>Tippen Sie auf <i>Bild</i>, um zur&uuml;ckzukehren.</p>');

      });
$('.bildc').live('pagecreate', function(r){
	$(".bildc > div.bildheader > span.rechtsbuendig").click(function(r) {
		$('.bildc').die('pagecreate');
		var clickHash = window.location.hash;
		var clickBildnr = clickHash.replace(/\D+/g,"");
		var A = "#" + clickBildnr + "a";
	        var nextpage = $(A);
	        $.mobile.changePage(nextpage, 'pop');
	        $('.bildcontent_ggb').html('<p style="margin: 80px; text-align: center; padding: 10px; border: 5px solid #333;">Zu diesem Werk ist leider keine Animation vorhanden.<br><br>Tippen Sie auf <i>Bild</i>, um zur&uuml;ckzukehren.</p>');
	        
	});
});
/*==Zur Startseite==*/

$('.bilda').live('pagecreate', function(e){
	$(".zuruebersicht").click(function(e) {
		$.mobile.changePage('#indexa', 'pop');
		$('.textfeld').html("");
		$('.speicher').html("");
	});
});
$('.bilda').live('pagecreate', function(){
	$('.bilda').on('swipedown', function() {
		$.mobile.changePage('#indexa', 'pop');
		$('.textfeld').html("");
		$('.speicher').html("");
	});
	$('.bilda').on('swipeup', function() {
		$.mobile.changePage('#indexa', 'pop');
		$('.textfeld').html("");
		$('.speicher').html("");
	});

	});

/*Mediaplayer erst nach erstem Bildaufruf anzeigen*/
$('body #indexa').live('pagecreate', function (g) {
	$('.uebersichtsspan').click(function(g) {
		$('#footer').css('display', 'block');
	});
});
/*==Bilder==*/
$("body #indexa").live('pagecreate', function(e){
	$("#1").click(function(e) {
		$.mobile.changePage('#01a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#2").click(function(e) {
		$.mobile.changePage('#02a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#3").click(function(e) {
		$.mobile.changePage('#03a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#4").click(function(e) {
		$.mobile.changePage('#04a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#5").click(function(e) {
		$.mobile.changePage('#05a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#6").click(function(e) {
		$.mobile.changePage('#06a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#7").click(function(e) {
		$.mobile.changePage('#07a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#8").click(function(e) {
		$.mobile.changePage('#08a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#9").click(function(e) {
		$.mobile.changePage('#09a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#10").click(function(e) {
		$.mobile.changePage('#10a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#11").click(function(e) {
		$.mobile.changePage('#11a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#12").click(function(e) {
		$.mobile.changePage('#12a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#13").click(function(e) {
		$.mobile.changePage('#13a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#14").click(function(e) {
		$.mobile.changePage('#14a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#15").click(function(e) {
		$.mobile.changePage('#15a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#16").click(function(e) {
		$.mobile.changePage('#16a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#17").click(function(e) {
		$.mobile.changePage('#17a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#18").click(function(e) {
		$.mobile.changePage('#18a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#19").click(function(e) {
		$.mobile.changePage('#19a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#20").click(function(e) {
		$.mobile.changePage('#20a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#21").click(function(e) {
		$.mobile.changePage('#21a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#22").click(function(e) {
		$.mobile.changePage('#22a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#23").click(function(e) {
		$.mobile.changePage('#23a', 'pop');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#24").click(function(e) {
		$.mobile.changePage('#24a', 'pop');
	});
});
$('body #indexa').live('pagecreate', function(e){
	$("#25").click(function(e) {
		$.mobile.changePage('#25a', 'pop');
	});
});