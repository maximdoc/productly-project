$(function () {
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.menu_btn').on('click', function (){
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.header_menu-item').toggleClass('header_menu-item--active');
    });

    $('.header_menu-link').on('click', function (){
        $('.menu_btn').removeClass('menu_btn--active');
        $('.header_menu-item').removeClass('menu_list--active');
    });
})