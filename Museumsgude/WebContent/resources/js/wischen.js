$('body').live("swipeleft", function(){
        var nextpage = $("#a").next('div[data-role="page"]');
        $.mobile.changePage(nextpage, 'slide');
      });
      $('body').live("swiperight", function(){
        var prevpage = $("#b").prev('div[data-role="page"]');
        $.mobile.changePage(prevpage, 'slide', true);
      });