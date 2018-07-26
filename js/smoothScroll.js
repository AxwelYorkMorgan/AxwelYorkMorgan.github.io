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

    $('#open-menu').click(function () {
        if(!menuOpen){
            $('#menu').addClass('show');
        } else if(menuOpen) {
            $('#menu').removeClass('show');
            $('#projectFrame').attr("src","");
        }
        menuOpen = !menuOpen;
    });

    $('.menu-element').click(function () {
        $('#projectFrame').attr("src","https://axwelyorkmorgan.github.io/" + $(this).val());
    });
});

$(document).on('click', 'a[href^="#top"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});