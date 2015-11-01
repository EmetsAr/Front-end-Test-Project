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
  onComplete:function(){

  }
});

$(window).load(function(){
  $('a.js_gallery').first().trigger("click");
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
