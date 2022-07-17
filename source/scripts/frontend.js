var openModal = document.querySelector('#open-modal');
var closeModal = document.querySelector('#close-modal');
var mobileModal = document.querySelector('#mobile-modal')
var headerMob = document.querySelector('.header-mob');

//onclick
openModal.addEventListener('click', function () {
    mobileModal.style.display = 'block';
    headerMob.classList.add('d-none');
});

//onclick
closeModal.addEventListener('click', function () {
    mobileModal.style.display = 'none';
    headerMob.classList.remove('d-none');
});