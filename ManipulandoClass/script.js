function trocar(){
    let cor = document.querySelector('button').classList.contains('preto');
    if(cor){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    }else{
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}
