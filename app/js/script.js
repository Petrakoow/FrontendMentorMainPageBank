function showHamburger(){
    const btnHamburger = document.querySelector('#btnHamburger');
    const header = document.querySelector('.header');
    const fadeElements = document.querySelectorAll('.has-fade');
    const body = document.querySelector('body');

    btnHamburger.addEventListener('click', () => {
        header.classList.toggle('open');
        body.classList.toggle('no-scroll');
        fadeElements.forEach((element) => {
            element.classList.toggle('fade-in', header.classList.contains('open'));
            element.classList.toggle('fade-out', !header.classList.contains('open'));
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showHamburger();
});
