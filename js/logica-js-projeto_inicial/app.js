
//exibe mensagem 
alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() * 100 +1);
//exibe mensagem e abre caixa de texto
let chute;
let qtdTentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt('Escolha um numero entre 1 e 100');
    if(numeroSecreto == chute){
        break;
        
    }else if(numeroSecreto> chute){
        alert(`o numero secreto é maior que ${chute}`);
    }else{
        alert(`o numero secreto é menor que ${chute}`)
    }
    qtdTentativas++;
}

let palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Voce acertou o numero secreto ${numeroSecreto} com ${qtdTentativas} ${palavraTentativa}`);

