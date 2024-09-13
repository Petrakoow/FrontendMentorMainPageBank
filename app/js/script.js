function showHamburger(){
    const btnHamburger = document.querySelector('#btnHamburger');
    const header = document.querySelector('.header');
    const fade = document.querySelector('.has-fade');

    btnHamburger.addEventListener('click', () => {
        header.classList.toggle('open');
        fade.classList.toggle('fade-in', header.classList.contains('open'));
        fade.classList.toggle('fade-out', !header.classList.contains('open'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showHamburger();
});
