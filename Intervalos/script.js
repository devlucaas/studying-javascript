let timer;
function comecar(){
    timer = setInterval(showTime, 10);
}

function parar(){
    clearInterval(timer);
}

function showTime(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();
    let txt = `${hour}:${minute}:${seconds}`;

    document.querySelector('.demo').innerHTML = txt;
}

