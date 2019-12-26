import $ from 'jquery';

$(document).ready(function () {

    /// Moving Background image
    // var FollowX = 0, FollowY = 0, x = 0, y = 0, friction = 1 / 30;
    //
    // function moveBackground() {
    //     x += (FollowX - x) * friction;
    //     y += (FollowY - y) * friction;
    //
    //     var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    //
    //     $('.img-move').css({
    //         '-webit-transform': translate,
    //         '-moz-transform': translate,
    //         'transform': translate
    //     });
    //
    //     window.requestAnimationFrame(moveBackground);
    // }
    //
    // $('.hero').on('mousemove click', function (e) {
    //
    //     var MouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    //     var MouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    //     FollowX = (20 * -MouseX) / 100;
    //     FollowY = (10 * -MouseY) / 100;
    //
    // });
    //
    // moveBackground();

    /// Smooth Scroll Down
    $('.content-scroll').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

});
