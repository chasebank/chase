/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */


$(function() {
  "use strict";
  /* ADDED: make targets focusable */
  $('target[id]').attr('tabindex', '-1');

  $('a[href*=#]:not([href=#])').click(function() {
    var $linkElem = $(this),
        target = $(this.hash);
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          /* ADDED: focus the target */
          target.focus();
          /* end ADDED */
          /* ADDED: update the URL */
          window.location.hash = $linkElem.attr('href').substring(1);
         // window.location.hash = $(this).attr('href').substring(1, $(this).attr('href').length);
          /* end ADDED */
        });
        return false;
      }
    }
  });
});




// Float Label (slightly modified) based on version by Aaron Barker www.codepen.io/aaronbarker/
$( function(){
  "use strict";
  var activeClass = "active",
      showClass = "show";
  
  $("input, textarea").bind("checkval",function(){
    var label = $(this).prevAll("label");
    if(this.value !== ""){
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  })
  .on("keyup",function(){
    $(this).trigger("checkval");
  })
  .on("focus",function(){
    $(this).prevAll("label").addClass("active show");
  })
  .on("blur",function(){
		$(this).prevAll("label").removeClass(activeClass);
  })
  .trigger("checkval");
});


// Helper Label by Chase Whiteside www.codepen.io/chasebank/
$( function(){
  "use strict";
  var hideClass = "hide";
  
  $('.helper').hide().addClass('hide');
  
  $("input, textarea").bind("checkval",function(){
    var label = $(this).prevAll("label"),
        labelMargin = label.width(),
        helper = $(this).nextAll(".helper");
    if(this.value !== ""){
      helper.css("margin-left",labelMargin+10);
    } else {
      helper.removeAttr('style');
    }
  })
  .on("keyup",function(){
    $(this).trigger("checkval");
  })
  .on("focus",function(){
    $(this).trigger("checkval").nextAll(".helper").removeClass(hideClass);
  })
  .on("blur",function(){
		$(this).nextAll(".helper").removeAttr('style').addClass(hideClass);
  }).trigger("checkval");
});


$("#validate").click(function(){
    "use strict";
    $('#name').closest('li').addClass('error');
});


// sidebar toggle scroll

var sidebarToggle = $('#sidebar-toggler');
var $root = $('html, body');

$('#sidebar-toggler').change(function () {
    "use strict";
    if ($(this).is(':checked')) {
        var href = $('#sidebar');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    }
});




/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());


// media query for checkbox

var mqCheckboxStatus = function(mql) {
        "use strict";
        if (mql.matches) {
            // set sidebar toggle as checked
            $("#sidebar-toggler").prop( "checked", true );
        } else {
            // set sidebar toggle as unchecked
            $("#sidebar-toggler").prop( "checked", false );
        }
    },
    mqSidebarPosition = function(mql) {
        "use strict";
        if (mql.matches) {
            // set position to fixed
            $('#sidebar').css('position','fixed');
        } else {
            // set position to absolute
            $('#sidebar').css('position','absolute');
        }
    },
    desktopXL = window.matchMedia('(min-width: 1129px)');
    desktopAndXL = window.matchMedia('(min-width: 769px)');
    mobileTablet = window.matchMedia('(max-width: 768px)');

mqCheckboxStatus(desktopXL);
mqSidebarPosition(desktopAndXL);
desktopXL.addListener(mqCheckboxStatus);
desktopAndXL.addListener(mqSidebarPosition);