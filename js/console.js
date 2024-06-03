console.log("hello world!");

console.log(parseInt("2") + parseInt("2"));

const idade = 20;
let variavelMutavel = 'teste';

const listaDestinos = new Array(
    'Salvador',
    'SaoPaulo',
    'Rio de janeiro'
);

console.log(listaDestinos);

const listaDestinos2 = new Array();
listaDestinos2.push('Curitiba'); //add
listaDestinos2.push('Blumenau');
listaDestinos2.push('Chapeco');
listaDestinos2.push('Pomerode');
console.log(listaDestinos2);
listaDestinos2.splice(1,1); //remove a partir da posição 1, somente 1 objeto
console.log(listaDestinos2);

console.log(listaDestinos2[0]); //pegando elemento da lista
listaDestinos2.slice('Blumenau');


const idadei = 15;

if(idadei >= 18){
    console.log("compra realizada");
}else{
    console.log("Não é possível vender bilhete")
}

for (let i = 0; i < 10; i++){
    console.log("contagem:" + i);
}