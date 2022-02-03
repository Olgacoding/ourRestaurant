
$(document).ready(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    });

});

$(document).ready(function () {
    $('.gallery__item').slice(0, 6).fadeIn();
    $('#loadmore').on('click', function () {
        $('.gallery__item:hidden').slice(0, 3).fadeIn();


        if ($('.gallery__item:hidden').length == 0) {
            $('#loadmore').fadeOut();
        }
    });
})


