$(document).ready(function () {


    //Dot is clicked on the left navigation bar
    $('.linkToPageBtn').click(function () {
        navigationDotChange($(this).children());
    });


    //Scroll header style
    $(window).scroll(function () {
        $('.headerNav').removeClass('scrollHeaderStyle').fadeIn('fast');
        $('.accordionPoint').css('color', 'white');
        if ($(this).scrollTop() > 5) {
            $('.headerNav').addClass('scrollHeaderStyle').fadeIn('fast');
            $('.accordionPoint').css('color', '#707070');
        } else {
            $('.headerNav').removeClass('scrollHeaderStyle').fadeIn('fast');
            $('.accordionPoint').css('color', 'white');
        }
    });

    $("a.scrollToAnchor").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 800);
        return false;
    });


    //Navigation menu
    function hideallDropdowns() {
        $(".dropped .drop-menu-main-sub").hide();
        $(".dropped").removeClass('dropped');
        $(".dropped .drop-menu-main-sub .title").unbind("click");
    }

    function showDropdown(element) {
        var option = $(element).parent().addClass('dropped');
        option.find('.title').click(function () {
            hideallDropdowns();
        }).html($(element).html());
        option.find('.drop-menu-main-sub').show();
    }

    $(".drop-down").click(function () {
        showDropdown(this);
    });

    $(document).mouseup(function () {
        hideallDropdowns();
    });







    //Play youtube video with button
    $(document).on('click', '.playButtonVideo', function () {
        var $video = $('#video'),
            src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
        $('#video').css({
            'filter': 'grayscale(0%)',
            'opacity': '1'
        });
        $(".videoContent, .videoImgBg, .videoBgSeparator, .videoBgLetter, .playButtonVideo").fadeOut("slow", function () {});
    });







});

//Scrollify plugin settings
//$(function() {
//    $.scrollify( {
//        section : ".siteNavigation",
//    });
//    $.scrollify( {
//    section : ".siteNavigation",
//    scrollSpeed: 800,
//    offset : 100,
//        after:function() {
//            var hash = window.location.hash.substr(1);
//            var element =  $('[data-id="page-'+ hash +'"]');            
//            navigationDotChange(element);
//        },
//    });
//});




//Left navigation bar
function navigationDotChange(element) {
    for (var i = 0; i < $('.linkToPageBtn').length; i++) {
        $($('.linkToPageBtn')[i]).children().removeClass('linkToPageBtnActive');
    };
    element.addClass('linkToPageBtnActive');
    var pageNumber = element.attr('data-number');
    $('.navigationPageNumber').text(pageNumber);
}
