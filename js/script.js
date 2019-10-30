$(document).ready(function () {
    if($(window).width() < 1200){
        var btn = $('.step-block__left').html();
        $('.step-block__right').append(btn);
    }
    /*MOBILE MENU*/
    var menu = $('.header__navigation').html();
    $('.mobile-menu').append(menu);
    $('.header__burger').click(function () {
        $('body').addClass('overflow');
        $('.mobile-menu').addClass('open');
        $('.overlay').fadeIn().addClass('menu-open');
        $('.menu-close').fadeIn();
    });
    $('.menu-close').click(function () {
        $('body').removeClass('overflow');
        $('.overlay').fadeOut(0);
        $('.mobile-menu').removeClass('open');
        $('.menu-close').fadeOut();
    });
    /*MODAL WIDDOWS*/
    $('.btn--green,.btn--link,.header__btn,.policy').click(function () {
        event.preventDefault();
        $('.overlay').fadeIn().css('display','flex');
        $('.modal').fadeIn();
    });
    $('.close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
    });
    /*PINNED/UNPINNED HEADER*/
    var now_pos = 0,
        header_height = $('header').height();
    $(document).scroll(function () {
        var position = $(this).scrollTop();
        if (now_pos < position ){
            if(position > header_height) {
                $('header').addClass('unpinned');
            }
        }
        else if (now_pos > position ){
            $('header').removeClass('unpinned');
            $('header').addClass('pinned');
            if(position < header_height) {
                $('header').removeClass('pinned');
            }
        }
        now_pos = position;
    });
});