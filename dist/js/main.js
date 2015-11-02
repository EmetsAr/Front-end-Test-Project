/* ==========================================================================

    Project: Test Project
    Author: XHTMLized
    Last updated: Mon Nov 02 2015 12:52:28

   ========================================================================== */

(function($) {


  'use strict';

  $('a.js_gallery').colorbox({
      rel: 'js_gallery',
      loop: false,
      width: '500',
      slideshow: true,
      slideshowAuto: false,
      onComplete: function() {}
    })
    .first().trigger("click");




  $(document).bind("cbox_complete", function() {

    setTimeout($.colorbox.next, 2000);

    var opener = $('a.js_gallery'),
      index = $.colorbox.element().index('a.js_gallery');

    if (index == (opener.length - 1)) {
      setTimeout(function() {
        $.colorbox.close()
      }, 2000);
    }
  });


})(jQuery);
