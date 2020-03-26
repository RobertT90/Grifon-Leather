import $ from 'jquery';

$(document).ready(function () {

    /// Smooth Scroll Down
    $('.content-scroll').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

});
