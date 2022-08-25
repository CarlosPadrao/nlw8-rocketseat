$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});
//
var openModal = document.querySelector('#open-modal');
var closeModal = document.querySelector('#close-modal');
var mobileModal = document.querySelector('#mobile-modal')
var headerMob = document.querySelector('.header-mob');

// show Modal
openModal.addEventListener('click', function () {
    mobileModal.style.display = 'block';
    headerMob.classList.add('d-none');
});

// hide Modal
closeModal.addEventListener('click', function () {
    mobileModal.style.display = 'none';
    headerMob.classList.remove('d-none');
});

//
function esconder() {
    mobileModal.style.display = 'none';
    headerMob.classList.remove('d-none');
}

// target link close Modal
var navMobile = document.querySelectorAll('.item-nav-mobile');

// alert message
function alerta() {
    window.alert('Em desenvolvimento, volte mais tarde! :D');
}