
function selecionarPersonagem(index) {
    const personagens = document.querySelectorAll('.personagem');
    const botoes = document.querySelectorAll('.botao');

    for (let i = 0; i < personagens.length; i++) {
        if (i === index) {
            personagens[i].classList.add('selecionado');
            botoes[i].classList.add('selecionado');
        } else {
            personagens[i].classList.remove('selecionado');
            botoes[i].classList.remove('selecionado');
        }
    }
}


