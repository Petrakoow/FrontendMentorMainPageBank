function showHamburger(){
    const btnHamburger = document.querySelector('#btnHamburger');

    btnHamburger.addEventListener('click', e => {
        if (e.target.classList.contains('open')){
            e.target.classList.remove('open');
        }
        else{
            e.target.classList.add('open');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showHamburger();
})
