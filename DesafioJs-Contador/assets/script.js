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

function numeroCor(){
    if (numeroAtual < 0) {
        element.style.color='red'
    }
    else (numeroAtual > 0)
    element.style.color='green'

}