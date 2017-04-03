$(document).foundation()
$(function(){

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function(e){
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});


$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});

$("creativebtn").click(function() {
    $("#creative").toggle();
});

var toggler = document.getElementById('basicbtn'); // Assumes element with id='button'

toggler.onclick = function() {
    var div = document.getElementById('basic');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};