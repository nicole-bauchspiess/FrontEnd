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

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
let numeroSecreto = gerarNumeroAleatorio();


function verificarChute(){
    let chute = document.querySelector('input').value; //pega o valor do texto da caixa input

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', 'Você descobriu o numero secreto')
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor')
    } else{
        exibirTextoNaTela('p', 'O numero secreto é maior')
    }
    console.log(numeroSecreto);
    console.log(chute);
    
}
