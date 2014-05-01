(function(){
  $('.menu .content').append('<span class="close">x</span>');  
  function showContent(elem){
   hideContent();
   elem.find('.content').addClass('expanded');
   elem.addClass('cover'); 
  }
  function hideContent(){
   $('.menu .content').removeClass('expanded');
   $('.menu li').removeClass('cover');  
  }
  $('.menu li').click(function() {
   showContent($(this));
  });  
  
  $('.menu .close').click(function(e) {
   e.stopPropagation();
   hideContent();
  }); 
  $(document).keyup(function(e) {
   if (e.keyCode == 27) { 
     hideContent();
   }
  });
  
   })();