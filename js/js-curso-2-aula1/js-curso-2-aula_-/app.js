//seleciona elemento do html
//let titulo = document.querySelector('h1');
//seta o h1 com a string
//titulo.innerHTML = 'Jogo do número secreto';


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() *10 + 1);
}


function verificarChute(){
    let chute = document.querySelector('input').value; //pega o valor do texto da caixa input

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')

        let palavraTentativa= tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa)

        //pega o elemento d botão pelo id e deixa habilitado
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor')
    } else{
        exibirTextoNaTela('p', 'O numero secreto é maior')
    }
    tentativas++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
    console.log('reiniciar jogo')
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
