/*Anfang Index*/
/*==Auf Seite A==*/

$('body #indexa').live("swipeleft", function(){
        var nextpage = $("#indexb");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #indexa').live("swiperight", function(){
       var prevpage = $("#indexc");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite B==*/

$('body #indexb').live("swiperight", function(){
       var prevpage = $("#indexa");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite C==*/

$('body #indexc').live("swipeleft", function(){
        var nextpage = $("#indexa");
        $.mobile.changePage(nextpage, 'slide');
      });

/*Ende Index*/


/* ===================
	Anfang Bilder
 		======================*/
/*Bild 1*/
/*==Auf Seite A==*/

$('body #01a').live("swipeleft", function(){
        var nextpage = $("#01b");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #01a').live("swiperight", function(){
       var prevpage = $("#01c");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite B==*/

$('body #01b').live("swiperight", function(){
       var prevpage = $("#01a");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite C==*/

$('body #01c').live("swipeleft", function(){
        var nextpage = $("#01a");
        $.mobile.changePage(nextpage, 'slide');
      });

/*Bild 2*/
/*==Auf Seite A==*/

$('body #02a').live("swipeleft", function(){
        var nextpage = $("#02b");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #02a').live("swiperight", function(){
       var prevpage = $("#02c");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite B==*/

$('body #02b').live("swiperight", function(){
       var prevpage = $("#02a");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite C==*/

$('body #02c').live("swipeleft", function(){
        var nextpage = $("#02a");
        $.mobile.changePage(nextpage, 'slide');
      });
/*=========================*/

$('.bilda').live('pagecreate', function(e){
	$(".zurübersicht").click(function(e) {
		$.mobile.changePage('#indexa', 'slideup');
	});
});
/*=========================*/

$('body #indexa').live('pagecreate', function(e){
	$("#Bild1").click(function(e) {
		$.mobile.changePage('#01a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#Bild2").click(function(e) {
		$.mobile.changePage('#02a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild3").click(function(e) {
		$.mobile.changePage('#03a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild4").click(function(e) {
		$.mobile.changePage('#04a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild5").click(function(e) {
		$.mobile.changePage('#05a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild6").click(function(e) {
		$.mobile.changePage('#06a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild7").click(function(e) {
		$.mobile.changePage('#07b', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild8").click(function(e) {
		$.mobile.changePage('#08b', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild9").click(function(e) {
		$.mobile.changePage('#09b', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild10").click(function(e) {
		$.mobile.changePage('#10a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild11").click(function(e) {
		$.mobile.changePage('#11a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild12").click(function(e) {
		$.mobile.changePage('#12a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild13").click(function(e) {
		$.mobile.changePage('#13a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild14").click(function(e) {
		$.mobile.changePage('#14a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild15").click(function(e) {
		$.mobile.changePage('#15a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild16").click(function(e) {
		$.mobile.changePage('#16a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild17").click(function(e) {
		$.mobile.changePage('#17a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild18").click(function(e) {
		$.mobile.changePage('#18a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild19").click(function(e) {
		$.mobile.changePage('#19a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild20").click(function(e) {
		$.mobile.changePage('#20a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild21").click(function(e) {
		$.mobile.changePage('#21a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild22").click(function(e) {
		$.mobile.changePage('#22a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild23").click(function(e) {
		$.mobile.changePage('#23a', 'slidedown');
	});
});


$('body #indexa').live('pagecreate', function(e){
	$("#Bild24").click(function(e) {
		$.mobile.changePage('#24a', 'slidedown');
	});
});