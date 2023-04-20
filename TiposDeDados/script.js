function restart(){
    window.location.reload();
}

let n = prompt('Adivinhe um número');
n = parseInt();

let s = Math.floor(Math.random()*10)
document.querySelector('.info').innerHTML = s;

if(n === s){
    alert('você acertou!')
}else{
    alert('você errou')
}