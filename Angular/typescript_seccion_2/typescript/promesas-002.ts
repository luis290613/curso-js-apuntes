(function(){

 //PROMESAS 2.0
 //se puedes especificar el valor de retorno con Promise<TIPODATO> para en el then o cacth poder acceder a las funciones por defecto del tipo de objeto
    const retirarDinero = (montoRetirar:number) : Promise<number> => {
        
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('no hay dinero suficiente en los fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual)
            }
        });
    }

    retirarDinero(100)
        .then(mensaje => console.log(mensaje))
        .catch(error => console.log(error))

})();


