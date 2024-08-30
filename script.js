const inputadultos = document.getElementById("adultos");
const inputcriancas = document.getElementById("criancas");
const inputduracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function carnepp(duracao) {
    if (duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
}

function cervejapp(duracao) {
    if (duracao >= 6) {
        return 2000;
    }else {
        return 1200;
    }
}

function bebidaspp(duracao) {
    if (duracao >= 6) {
        return 1500;
    }else {
        return 1000;
    }
}

function calcular() {
    const adultos = inputadultos.value;
    const criancas = inputcriancas.value;
    const duracao = inputduracao.value;

    const qdttotalcarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
    constqdttotalcerveja = cervejapp(duracao) * adulto;
    const qdttotalbebidas = bebidaspp(duracao) * + (bebidaspp(duracao) / 2 * criancas)
    resultado.innerHTML = <h2 class="result-info">vocẽ vai precisar de:</h2>
    resultado.innerHTML +=
        <div class="result-block">
            <img src=",/asstes/carne.svg" />
            <p>${qdttotalcarne / 1000} kg de carne</p>
        </div>

    resultado.innerHTML +=
        <div class="result-block">
            <img src=",/asstes/cerveja.svg" />
            <p>${Math.ceil(qdttotalcerveja / 355)}latas de cerveja</p>
        </div>

    resultado.innerHTML +=
        <div class="result-block">
            <img src=",/assets/refri.svg" />
            <p>${Math.ceil(qdttotalbebidas / 2000)} garrafas de bebidas</p>
        </div>

}

















