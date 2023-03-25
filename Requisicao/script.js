function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts') //aqui se faz a requisção
    .then((response) => { //pego a resposta e transformo ela em um objeto
        return response.json();
    })
    .then((data) => {//pego a resposta em forma de objeto
        console.log(data)
    })
}

document.querySelector('#botao').addEventListener('click', clicou);