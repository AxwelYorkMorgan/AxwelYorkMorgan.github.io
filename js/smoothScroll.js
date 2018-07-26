$(document).ready(function () {
    let scrollSens = 100;
    let menuOpen = false;

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollSens) {
            $('#go-top').addClass('show');
        } else {
            $('#go-top').removeClass('show');;
        }
    });

    function delayRemove() {
        $('#menu').removeClass('show');
    }

    $('#open-menu').click(function () {
        if (!menuOpen) {
            $('#menu').removeClass('fadeOut');
            $('#menu').addClass('show');
            $('#menu').addClass('fadeIn');
        } else if (menuOpen) {
            $('#menu').removeClass('fadeIn');
            $('#menu').addClass('fadeOut');
            setTimeout(delayRemove, 1000);
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