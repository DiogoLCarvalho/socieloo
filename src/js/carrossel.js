var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tempo;
var tempoTroca;
var botoes = document.querySelectorAll('.btSlider');


function preCarregamento() {
    var s = 1;
    for (let i = 0; i < 3; i++) {
        imgs[i] = new Image();
        imgs[i].src = "../imgs/fotosOng/fotos0" + s + ".jpg";
        console.log(i);
        s++;
    }
}

function carrgarImg(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
}

function inicia() {
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length - 1;
    slider = document.getElementById('dvSlider');
    carrgarImg(imgAtual);
    tempoTroca = 0;
}

function troca(direcao) {
    tempoTroca = 0;
    imgAtual += direcao;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    } else if (imgAtual < 0) {
        imgAtual = maxImg;
    }
    carrgarImg(imgAtual);
}

botoes[0].onclick = function (e) {
    e.stopPropagation();
    troca(-1);
};
botoes[1].onclick = function (e) {
    e.stopPropagation();
    troca(1);
};


inicia();