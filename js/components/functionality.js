import $ from 'jquery';


$(document).ready(function () {

    // Scroll down adn section link hover effects

    $('.section-link, .scroll-down').mouseenter(function () {
        $(this).addClass('hovered');
    });
    $('.section-link, .scroll-down').mouseleave(function () {
        $(this).removeClass('hovered');
    });


    // Toggle Main menu

    $(document).mousedown(e => {
        if (!$('.main-menu').is(e.target)
            && $('.main-menu').has(e.target).length === 0
            && !$('.menu-toggle').is(e.target)) {
            $('.header').removeClass('open');
            $('.menu-toggle').removeClass('open');
        }
    });

    $('.menu-toggle').on('click', () => {
        $('.header').toggleClass('open');
        $('.menu-toggle').toggleClass('open');
    });

    // Toggle Catalogue Filter

    $(document).mousedown(e => {
        if (!$('.catalogue-menu__links').is(e.target)
            && $('.catalogue-menu__links').has(e.target).length === 0
            && !$('.catalogue-menu__toggle').is(e.target)) {
            $('.catalogue-menu__links').removeClass('open');
            $('.catalogue-menu').removeClass('open');
            $('.catalogue-menu__toggle').removeClass('open');
            $('body').removeClass('open');
        }
    });

    $('.catalogue-menu__toggle').on('click', function () {
        $(this).parent().toggleClass('open');
        $(this).siblings().toggleClass('open');
        $(this).toggleClass('open');
        $('body').toggleClass('open')
    })

    // Content height calculator
    var contentHeight = $('.content').height();
    var haederHeight = $('#header').height();
    var footerHeight = $('#footer').height();
    var windowHeight = $(window).height() - haederHeight - footerHeight;
    if (windowHeight > contentHeight) {
        $(window).resize(function () {
            var height = $(window).height() - haederHeight - footerHeight;
            $('.content').css('height', height);
            console.log(height);
        })

        $(window).resize();
    } else {
        $('.content').css('height', 100 + '%');
    }

})


