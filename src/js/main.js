/* ==========================================================================

    Project: Test Project
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {


  'use strict';
  var autoNav;

  $('a.js_gallery').colorbox({
      rel: "js_gallery",
      loop: false,
      width: "400",
      slideshow: true,
      slideshowAuto: false,
      onComplete: function() {
        autoNav = setTimeout($.colorbox.next, 2000);
      },
      onCleanup: function() {
        clearTimeout(autoNav);
      }
    })
    .first().trigger("click");

  $(document).bind("cbox_complete", function() {

    var opener = $('a.js_gallery'),
        index = $.colorbox.element().index('a.js_gallery');

    if (index == (opener.length - 1)) {
      setTimeout(function() {
        $.colorbox.close();
      }, 2000);
    }
  });

})(jQuery);
