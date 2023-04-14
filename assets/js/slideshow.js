jQuery(function($) {
    // Slider
    var $images = $(".slideshow-images").children();
    var $slideshow = $('.slideshow');
    var $slideshowcontrols = $('.slideshow-controls');
    (function () {
        var i = 0
        function changeslides() {
        i++;
        if (i >= $images.length) {
            i = 0;
        $slideshowcontrols.children().eq($images.length - 1).toggleClass('slideshow-button-lit')
        } else {
        $slideshowcontrols.children().eq(i - 1).toggleClass('slideshow-button-lit')
        }
        $slideshow.css('margin-left', (i * -100).toString() + 'vw');
        $slideshowcontrols.children().eq(i).toggleClass('slideshow-button-lit')
        }

        //Buttons
        for (var g = 0; g < $images.length; g++) {
            $slideshowcontrols.append('<span class="slideshow-button"></span>');
            $lastbutton = $slideshowcontrols.children().last()

            $lastbutton.attr('data-index', g);
            $lastbutton.click(function(){
                $slideshow.css('margin-left', ($(this).attr('data-index') * -100) + 'vw');
                clearInterval(interv);
                if (i == $images.length - 1) {
                    $slideshowcontrols.children().eq($images.length - 1).removeClass('slideshow-button-lit')
                } else {
                    $slideshowcontrols.children().eq(i).removeClass('slideshow-button-lit')
                }
                i = $(this).attr('data-index')
                $slideshowcontrols.children().eq(i).addClass('slideshow-button-lit')
                interv = setInterval(changeslides, 6500);
            });
        }

        for (var g = 0; g < $images.length; g++) {
        $images.eq(g).find("span").css('left', 100 * g + 'vw');
        }
        $slideshowcontrols.children().eq(0).toggleClass('slideshow-button-lit')
        var interv = setInterval(changeslides, 6500);
    })();
});