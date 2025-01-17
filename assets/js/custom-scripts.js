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
<<<<<<< HEAD
setInterval(changeHeaderBackground, carouselInterval);

// URL backend Anda
const API_URL = 'http://localhost:3000/api/wishes';

// Submit Formulir Wish
document.getElementById('wishForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const wish = document.getElementById('wish').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, message: wish }),
        });

        if (response.ok) {
            alert('Wish sent successfully!');
            loadWishes(); // Refresh wishes list
        } else {
            alert('Failed to send wish. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
});

// Load Wishes from Backend
async function loadWishes() {
    try {
        const response = await fetch(API_URL);
        const wishes = await response.json();

        const wishesList = document.getElementById('wishesList');
        wishesList.innerHTML = '';

        if (wishes.length === 0) {
            wishesList.innerHTML = '<p>No wishes yet. Be the first to send your blessings!</p>';
        } else {
            let currentWishIndex = 0;

            // Function to update the wish every 5 seconds
            function updateWish() {
                wishesList.innerHTML = ''; // Clear previous wish
                const wish = wishes[currentWishIndex];

                const wishElement = document.createElement('div');
                wishElement.classList.add('wish-item');
                wishElement.innerHTML = `
                    <strong>${wish.name}</strong>
                    <p>${wish.message}</p>
                    <small>${new Date(wish.createdAt).toLocaleString()}</small>
                `;
                wishesList.appendChild(wishElement);

                // Move to the next wish, and loop back to the first one if reached the end
                currentWishIndex = (currentWishIndex + 1) % wishes.length;
            }

            // Update wish every 5 seconds
            setInterval(updateWish, 5000);
            updateWish(); // Initial wish display
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load wishes. Please try again later.');
    }
}

// Load wishes saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadWishes);
=======
setInterval(changeHeaderBackground, carouselInterval);
>>>>>>> 444cba48fc77859f3d3225b574b93cb7a8633974
