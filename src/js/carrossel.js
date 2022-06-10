var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tempo;
var barra;
var tempoTroca;
var botoes = document.querySelectorAll('.btSlider');


function preCarregamento() {
    var s = 1;
    for (let i = 0; i < 3; i++) {
        imgs[i] = new Image();
        imgs[i].src = "../imgs/fotosOng/fotos0" + s + ".jpg";
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
    barra = document.getElementById('dvBarra');
    carrgarImg(imgAtual);
    tempoTroca = 0;
    anima();

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

function anima() {
    tempoTroca++;
    if (tempoTroca >= 500) {
        tempoTroca = 0;
        troca(1);
    }

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