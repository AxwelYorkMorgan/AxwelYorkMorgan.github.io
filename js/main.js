$(document).ready(function () {
    let scrollSens = 100;
    let menuOpen = false;

    setTimeout(function () {
        $('#loadingScreen').addClass('fadeOut');
    }, 500);
    setTimeout(function () {
        $('#loadingScreen').remove();
    }, 1200);

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
        } else if (menuOpen) {
            $('#menu').removeClass('fadeIn');
            $('#menu').addClass('fadeOut');
            setTimeout(function () {
                $('#menu').removeClass('show');
            }, 800);
            $('#projectFrame').attr("src", "");
        }
        menuOpen = !menuOpen;
    });

    $('.menu-element').click(function () {
        $('#projectFrame').attr("src", "https://axwelyorkmorgan.github.io/" + $(this).val());
    });
});

$(document).on('click', 'a[href^="#top"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});