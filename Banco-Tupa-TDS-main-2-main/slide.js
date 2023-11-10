var cont = 0;
var sliderContent = document.querySelector('.slider-content');

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;

    if (cont > 2) {
        cont = 0;
    }

    sliderContent.style.transition = 'transform 1s ease-in-out';
    sliderContent.style.transform = 'translateX(' + (-cont * 25) + '%)';
}
