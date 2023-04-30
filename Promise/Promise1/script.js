//Criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Lucas'

    if(nome === 'Lucas'){
        resolve('Usuario Lucas encontrado!')
    }else{
        reject('O usuario Lucas não foi encontrado!')
    }
});

myPromise.then((data) => {
    console.log(data);
})

//Encadeamento de Then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Lucas'

    if(nome === 'Lucas'){
        resolve('Usuario Lucas encontrado!')
    }else{
        reject('O usuario Lucas não foi encontrado!')
    }
});

myPromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada)=>{
    console.log(stringModificada)
}) 

//Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Lilian'

    if(nome === 'Lucas'){
        resolve('Usuario Lucas encontrado!')
    }else{
        reject('O nome não é Lucas!') 
    }
});
//Resolvendo varias promessas com All
myPromise3.then((data) =>{
    console.log(data)
}).catch((err) =>{
    console.log('Aconteceu um erro' + err)
})


const p1 = new Promise((resolve, reject) =>{
    resolve("p1 ok!");
})

const p2 = new Promise((resolve, reject) =>{
    resolve("p2 ok!");
})

const p3 = new Promise((resolve, reject) =>{
    resolve("3 ok!");
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

//Resolvendo várias promessas com Race
const p4 = new Promise((resolve, reject) =>{
    resolve("p1 ok!");
})

const p5 = new Promise((resolve, reject) =>{
    resolve("p2 ok!");
})

const p6 = new Promise((resolve, reject) =>{
    resolve("3 ok!");
})

const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
})

//Fetch request na API do Github
//Fetch API

const userName = 'devlucaas'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept:'application/vnd.github.v3+json'
    },
}).then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((err) =>{
    console.log('houve algum erro')
})





