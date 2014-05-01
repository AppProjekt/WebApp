/*==Auf Seite A==*/

$('body #a').live("swipeleft", function(){
        var nextpage = $("#b");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #a').live("swiperight", function(){
       var prevpage = $("#c");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite B==*/

$('body #b').live("swipeleft", function(){
        /*var nextpage = $("#a").next('div[data-role="page"]');
        $.mobile.changePage(nextpage, 'slide');*/
      });

$('body #b').live("swiperight", function(){
       var prevpage = $("#a");
        $.mobile.changePage(prevpage, 'slide', true);
      });

/*==Auf Seite C==*/

$('body #c').live("swipeleft", function(){
        var nextpage = $("#a");
        $.mobile.changePage(nextpage, 'slide');
      });

$('body #c').live("swiperight", function(){
       /* var prevpage = $("#b").prev('div[data-role="page"]');
        $.mobile.changePage(prevpage, 'slide', true);*/
      });