$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
});

$(document).ready(function(){
    $(".navbar a, footer a[href='#index']").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
            });
        }
    });
})

$(window).scroll(function() {
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 750) {
            $(this).addClass("slide");
        }
    });
});
