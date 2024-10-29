$(document).ready(function(){
   $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top) 
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

const headerImages = [
    'assets/img/header-bg2.jpg',
    'assets/img/header-bg3.jpg',
    'assets/img/header_bg.jpg'
]

// Interval for carousel (5 seconds)
const carouselInterval = 5000;
let currentImageIndex = 0;

function changeHeaderBackground() {
    const headerWrap = document.getElementById('headerwrap');

    // Apply the new background image with all required styles
    headerWrap.style.backgroundImage = `url(${headerImages[currentImageIndex]})`;
    headerWrap.style.backgroundSize = 'cover';
    headerWrap.style.backgroundPosition = 'center center';
    headerWrap.style.backgroundRepeat = 'no-repeat';

    // Update to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % headerImages.length;
}

// Initialize the carousel
setInterval(changeHeaderBackground, carouselInterval);