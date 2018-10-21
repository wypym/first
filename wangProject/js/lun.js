
var slideY = {
    thisUl: jQuery('#imglist'),
    btnUp: jQuery('#sjt'),
    btnDown: jQuery('#xjt'),
    thisLi: jQuery('#imglist li'),
    init: function () {
        /* if (slideY.thisLi.length <= 1) {
             slideY.thisUl.width(slideY.thisLi.length * 92);
         } else if (slideY.thisLi.length == 2) {
             slideY.thisUl.width(slideY.thisLi.length * 46);
         } else if (slideY.thisLi.length == 3) {
             slideY.thisUl.width(slideY.thisLi.length * 31);
         } else if (slideY.thisLi.length == 4) {
             slideY.thisUl.width(slideY.thisLi.length * 23);
         } else if (slideY.thisLi.length >= 5) {
             slideY.thisUl.width(slideY.thisLi.length * 19);
         }*/
        slideY.thisUl.width(92);

        slideY.slideAuto();
        slideY.btnUp.click(slideY.slideTop).hover(slideY.slideStop, slideY.slideAuto);
        slideY.btnDown.click(slideY.slideDown).hover(slideY.slideStop, slideY.slideAuto);
        slideY.thisUl.hover(slideY.slideStop, slideY.slideAuto);
    },
    slideTop: function () {
        slideY.btnUp.unbind('click', slideY.slideTop);
        slideY.thisUl.find('li:last').prependTo(slideY.thisUl);
        slideY.thisUl.css('marginTop', -51);
        slideY.thisUl.animate({ 'marginTop': 0 }, 350, function () {
            slideY.btnUp.bind('click', slideY.slideTop);
        });
        return false;
    },
    slideDown: function () {
        slideY.btnDown.unbind('click', slideY.slideDown);
        slideY.thisUl.animate({ 'marginTop': -51 }, 350, function () {
            slideY.thisUl.css('marginTop', '0');
            slideY.thisUl.find('li:first').appendTo(slideY.thisUl);
            slideY.btnDown.bind('click', slideY.slideDown);
        });
        return false;
    },
    slideAuto: function () {
        slideY.intervalId = window.setInterval(slideY.slideDown, 300000);
    },
    slideStop: function () {
        window.clearInterval(slideY.intervalId);
    }
}

jQuery(document).ready(function () {
    slideY.init();
})
