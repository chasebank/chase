/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */




// Only show footer if page content requires scroll.
$(window).ready(function(){
    $(this).one('scroll', function(){
        $('footer').css('opacity','1');
    });
});



$('.blog-post--grid').each(function() {
    var blogAccentColor = $(this).find('a').css('color');
    
    $(this).find('.blog-post--read-more > span').css('color',blogAccentColor);
}); 




$(function () {
    'use strict';
    /* ADDED: make targets focusable */
    $('target[id]').attr('tabindex', '-1');

    $('a[href*=#]:not([href=#])').click(function () {
        var $linkElem = $(this),
            target = $(this.hash);
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
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
$(function () {
    'use strict';
    var activeClass = "active",
        showClass = "show";

    $("input, textarea").bind("checkval", function () {
            var label = $(this).prevAll("label");
            if (this.value !== "") {
                label.addClass(showClass);
            } else {
                label.removeClass(showClass);
            }
        })
        .on("keyup", function () {
            $(this).trigger("checkval");
        })
        .on("focus", function () {
            $(this).prevAll("label").addClass("active show");
        })
        .on("blur", function () {
            $(this).prevAll("label").removeClass(activeClass);
        })
        .trigger("checkval");
});


// Helper Label by Chase Whiteside www.codepen.io/chasebank/
$(function () {
    'use strict';
    var hideClass = "hide";

    $('.helper').hide().addClass('hide');

    $("input, textarea").bind("checkval", function () {
            var label = $(this).prevAll("label"),
                labelMargin = label.width(),
                helper = $(this).nextAll(".helper");
            if (this.value !== "") {
                helper.css("margin-left", labelMargin + 10);
            } else {
                helper.removeAttr('style');
            }
        })
        .on("keyup", function () {
            $(this).trigger("checkval");
        })
        .on("focus", function () {
            $(this).trigger("checkval").nextAll(".helper").removeClass(hideClass);
        })
        .on("blur", function () {
            $(this).nextAll(".helper").removeAttr('style').addClass(hideClass);
        }).trigger("checkval");
});


$("#validate").click(function () {
    "use strict";
    $('#name').closest('li').addClass('error');
});




// Sidebar Toggle
$('#toggle-nav').click(function () {
    "use strict";
    $(this).toggleClass('open');
    $('.toggle-text').children('span').toggleClass('hide');

    $('#nav-container').toggleClass('menuOpen');
    $('main').toggleClass('menuOpen');
});


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;
(function ($, window, undefined) {

    'use strict';

    $.HoverDir = function (options, element) {

        this.$el = $(element);
        this._init(options);

    };

    // the options
    $.HoverDir.defaults = {
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false
    };

    $.HoverDir.prototype = {

        _init: function (options) {

            // options
            this.options = $.extend(true, {}, $.HoverDir.defaults, options);
            // transition properties
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            // support for CSS transitions
            this.support = Modernizr.csstransitions;
            // load the events
            this._loadEvents();

        },
        _loadEvents: function () {

            var self = this;

            this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function (event) {

                var $el = $(this),
                    $hoverElem = $el.find('div'),
                    direction = self._getDir($el, {
                        x: event.pageX,
                        y: event.pageY
                    }),
                    styleCSS = self._getStyle(direction);

                if (event.type === 'mouseenter') {

                    $hoverElem.hide().css(styleCSS.from);
                    clearTimeout(self.tmhover);

                    self.tmhover = setTimeout(function () {

                        $hoverElem.show(0, function () {

                            var $el = $(this);
                            if (self.support) {
                                $el.css('transition', self.transitionProp);
                            }
                            self._applyAnimation($el, styleCSS.to, self.options.speed);

                        });


                    }, self.options.hoverDelay);

                } else {

                    if (self.support) {
                        $hoverElem.css('transition', self.transitionProp);
                    }
                    clearTimeout(self.tmhover);
                    self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);

                }

            });

        },
        // credits : http://stackoverflow.com/a/3647634
        _getDir: function ($el, coordinates) {

            // the width and height of the current div
            var w = $el.width(),
                h = $el.height(),

                // calculate the x and y to get an angle to the center of the div from that x and y.
                // gets the x value relative to the center of the DIV and "normalize" it
                x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),

                // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
                // first calculate the angle of the point,
                // add 180 deg to get rid of the negative values
                // divide by 90 to get the quadrant
                // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

            return direction;

        },
        _getStyle: function (direction) {

            var fromStyle, toStyle,
                slideFromTop = {
                    left: '0px',
                    top: '-100%'
                },
                slideFromBottom = {
                    left: '0px',
                    top: '100%'
                },
                slideFromLeft = {
                    left: '-100%',
                    top: '0px'
                },
                slideFromRight = {
                    left: '100%',
                    top: '0px'
                },
                slideTop = {
                    top: '0px'
                },
                slideLeft = {
                    left: '0px'
                };

            switch (direction) {
            case 0:
                // from top
                fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                toStyle = slideTop;
                break;
            case 1:
                // from right
                fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                toStyle = slideLeft;
                break;
            case 2:
                // from bottom
                fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                toStyle = slideTop;
                break;
            case 3:
                // from left
                fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                toStyle = slideLeft;
                break;
            }

            return {
                from: fromStyle,
                to: toStyle
            };

        },
        // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
        _applyAnimation: function (el, styleCSS, speed) {

            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            el.stop().applyStyle(styleCSS, $.extend(true, [], {
                duration: speed + 'ms'
            }));

        }

    };

    var logError = function (message) {

        if (window.console) {

            window.console.error(message);

        }

    };

    $.fn.hoverdir = function (options) {

        var instance = $.data(this, 'hoverdir');

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {

                if (!instance) {

                    logError("cannot call methods on hoverdir prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;

                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

                    logError("no such method '" + options + "' for hoverdir instance");
                    return;

                }

                instance[options].apply(instance, args);

            });

        } else {

            this.each(function () {

                if (instance) {

                    instance._init();

                } else {

                    instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));

                }

            });

        }

        return instance;

    };

})(jQuery, window);

$(function () {
    "use strict";
    $(' #portfolio > li ').each(function () {
        $(this).hoverdir({
            hoverDelay: 75
        });
    });
});



//gallery
$(function () {
    "use strict";
    $("figure > a").each(function () {
        var image = $(this).children().attr('src');

        $(this).css('background-image', 'url(' + image + ')');
    });

    $(".gallery-group:has(.large)")
        .children().not('.large').addClass('small');

    $(".gallery-group:has(.left.large)")
        .children().not('.left').addClass('right');
});




var initPhotoSwipeFromDOM = function (gallerySelector) {
    "use strict";
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.gallery');






$.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({
        opacity: 'toggle',
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        margin: 'toggle'
    }, speed, easing, callback);
};

$('dd').hide();

$('dt').click(function () {

    $(this).toggleClass('toggled')
        .next('dd').slideFadeToggle().toggleClass('toggled');

});




jQuery(document).ready(function ($) {
    'use strict';
    
    // Masonry grid
    var $container = $('.masonry');
    // init
    $container.packery({
        itemSelector: '.masonry > article',
        gutter: $container.find('.masonry-gutter')[0],
    });

});
