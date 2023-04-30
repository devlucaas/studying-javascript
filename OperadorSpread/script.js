let numeros = [1,2,3,4];
//Quero um array mas que use a variavel numeros também
let outrosNumeros = [...numeros, 5,6,7,8];

let info = {
    nome: 'Lucas',
    sobrenome: 'Queiroz',
    idade:19
};

let novaInfo = {
    ...info,
    cidade:'Campina Grande',
    nacionalidade:'Brasileiro'
}

console.log(novaInfo);

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status: 0
    }
}

adicionarInfo({nome:'lucas'})