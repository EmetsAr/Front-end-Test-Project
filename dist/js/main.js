/* ==========================================================================

    Project: Test Project
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {


  'use strict';

$('a.js_gallery').colorbox({
  rel:'js_gallery',
  loop:false,
  width:'500',
  slideshow:true,
  slideshowAuto:false,
  onComplete:function(){
  }
});

$(window).load(function(){
  $('a.js_gallery').first().trigger("click");

  $(document).bind("cbox_complete", function(){
    setTimeout($.colorbox.next, 2000);
    var opener=$('a.js_gallery'),
        index= $.colorbox.element().index('a.js_gallery')
    if(index==(opener.length-1)){
      setTimeout(function() {
             $.colorbox.close()
      }, 2000);
     }
  });
})


  var App = {

    /**
     * Init Function
     */
    init: function() {
      // App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {

    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
