$(document).ready(function () {
    let scrollSens = 100;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollSens) {
            $('#go-top').addClass('show');
        } else {
            $('#go-top').removeClass('show');;
        }
    });

    $('#open-menu').click(function () {
        alert("WIP");
    });
});

$(document).on('click', 'a[href^="#top"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});