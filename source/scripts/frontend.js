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


// target link close Modal
var itemNavMobile = document.querySelectorAll('.item-nav-mobile');
itemNavMobile.addEventListener("click", esconder);

function esconder() {
    mobileModal.style.display = 'none';
    headerMob.classList.remove('d-none');
}