/*Anfang Index*/
/*==Auf Seite A==*/

/*$('body #indexa').live("swipeleft", function(){
        var nextpage = $("#indexb");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #indexa').live("swiperight", function(){
       var prevpage = $("#indexc");
        $.mobile.changePage(prevpage, 'slide', true);
      });*/

/*==Auf Seite B==*/

/*$('body #indexb').live("swiperight", function(){
       var prevpage = $("#indexa");
        $.mobile.changePage(prevpage, 'slide', true);
      });*/

/*==Auf Seite C==*/

/*$('body #indexc').live("swipeleft", function(){
        var nextpage = $("#indexa");
        $.mobile.changePage(nextpage, 'slide');
      });*/

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
        $.mobile.changePage(nextpage, 'slide');
      });

$(".bilda").live("swiperight", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var ggbQuelle = "resources/animationVideo/" + wischBildnr + ".html";
	var C = "#" + wischBildnr + "c";
       var prevpage = $(C);
        $.mobile.changePage(prevpage, 'slide', true);
        $(".bildcontent_ggb").load(ggbQuelle);
        /*$("#ggb01").load("resources/animationVideo/animation_alt.html");*/
        /*$("#ggb02").load("resources/animationVideo/Gerstner Karl Fraktal.htm");
        $("#ggb03").load("resources/animationVideo/Max Bill Farbfeld.htm");
        $("#ggb04").load("resources/animationVideo/Gerstner Karl Fraktal.htm");
        $("#ggb05").load("resources/animationVideo/Gerstner Karl Fraktal.htm");*/
      });

/*==Auf Seite B==*/

$(".bildb").live("swiperight", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var A = "#" + wischBildnr + "a";
       var prevpage = $(A);
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite C==*/

$(".bildc").live("swipeleft", function(){
	var Hash = window.location.hash;
	var wischBildnr = Hash.replace(/\D+/g,"");
	var A = "#" + wischBildnr + "a";

        var nextpage = $(A);
        $.mobile.changePage(nextpage, 'slide');
        $.each($('audio.textaudio'), function () {
        	 this.pause();
        	 this.currentTime = 0;
        	 });
      });

/*==Zur Startseite==*/

$('.bilda').live('pagecreate', function(e){
	$(".zuruebersicht").click(function(e) {
		$.mobile.changePage('#indexa', 'slideup');
	});
});
/*==Bilder==*/

$("body #indexa").live('pagecreate', function(e){
	$("#1").click(function(e) {
		$.mobile.changePage('#01a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#2").click(function(e) {
		$.mobile.changePage('#02a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#3").click(function(e) {
		$.mobile.changePage('#03a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#4").click(function(e) {
		$.mobile.changePage('#04a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#5").click(function(e) {
		$.mobile.changePage('#05a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#6").click(function(e) {
		$.mobile.changePage('#06a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#7").click(function(e) {
		$.mobile.changePage('#07a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#8").click(function(e) {
		$.mobile.changePage('#08a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#9").click(function(e) {
		$.mobile.changePage('#09a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#10").click(function(e) {
		$.mobile.changePage('#10a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#11").click(function(e) {
		$.mobile.changePage('#11a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#12").click(function(e) {
		$.mobile.changePage('#12a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#13").click(function(e) {
		$.mobile.changePage('#13a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#14").click(function(e) {
		$.mobile.changePage('#14a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#15").click(function(e) {
		$.mobile.changePage('#15a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#16").click(function(e) {
		$.mobile.changePage('#16a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#17").click(function(e) {
		$.mobile.changePage('#17a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#18").click(function(e) {
		$.mobile.changePage('#18a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#19").click(function(e) {
		$.mobile.changePage('#19a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#20").click(function(e) {
		$.mobile.changePage('#20a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#21").click(function(e) {
		$.mobile.changePage('#21a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#22").click(function(e) {
		$.mobile.changePage('#22a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#23").click(function(e) {
		$.mobile.changePage('#23a', 'slidedown');
	});
});

$('body #indexa').live('pagecreate', function(e){
	$("#24").click(function(e) {
		$.mobile.changePage('#24a', 'slidedown');
	});
});