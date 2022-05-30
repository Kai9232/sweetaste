$(document).ready(function () {
    //去除連結
    $('.wrap a').click(function (e) { 
        e.preventDefault();
    });
    //icon_heart轉換
    $('.heart').click(function (e) { 
        $(this).toggle();
        $(this).parent().find('.heartclick').toggle();
    });
    $('.heartclick').click(function (e) { 
        $(this).toggle();
        $(this).parent().find('.heart').toggle();
    });
    //動態加入class
    $('.showmenu').click(function () { 
        $('body').toggleClass('menu_show');
    });
    //下拉式選單_第一層
    $('.aside a').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    $('.button li a').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
});