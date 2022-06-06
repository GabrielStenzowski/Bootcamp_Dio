var numeroAtualSpan = document.getElementById('numeroAtual')
var numeroAtual = 0;

function aumentar() {
    numeroAtual = numeroAtual + 1
    numeroAtualSpan.innerHTML = numeroAtual
}

function diminuir() {
    numeroAtual = numeroAtual - 1
    numeroAtualSpan.innerHTML = numeroAtual
}

