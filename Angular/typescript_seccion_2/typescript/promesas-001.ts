(function(){

 //PROMESAS
    console.log('inicio')

    const prom1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject('imprimiendo desde la promesa')
        }, 1000);
    })

    prom1 
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))

    console.log('fin')
})();


