$(document).ready(function () {
    let scrollSens = 100;
    let menuOpen = false;

    setTimeout(function () {
        $('#loadingScreen').addClass('fadeOut');
    }, 1150);
    setTimeout(function () {
        $('#loadingScreen').remove();
        $('#selfBody').removeClass('noScroll');
    }, 1600);

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollSens) {
            $('#go-top').addClass('show');
        } else {
            $('#go-top').removeClass('show');;
        }
    });

    $('#open-menu').click(function () {
        if (!menuOpen) {
            $('#menu').removeClass('fadeOut');
            $('#menu').addClass('show');
            $('#menu').addClass('fadeIn');
            $('#selfBody').addClass('noScroll');
        } else if (menuOpen) {
            $('#menu').removeClass('fadeIn');
            $('#menu').addClass('fadeOut');
            $('#selfBody').removeClass('noScroll');
            setTimeout(function () {
                $('#menu').removeClass('show');
                $('#projectFrame').attr("src", "");
            }, 800);
        }
        menuOpen = !menuOpen;
    });

    $(document).on('click', 'a[href^="#top"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.menu-element').click(function () {
        $('#projectFrame').attr("src", "https://axwelyorkmorgan.github.io/" + $(this).val());
    });
});