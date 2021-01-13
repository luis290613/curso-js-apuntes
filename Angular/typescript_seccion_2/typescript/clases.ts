/* (function(){     */
 
    //CLASES
    //lower camell case -> nombreAtributo
    /* class Avenger {

        constructor(nombre: string, equipo:string, nombreReal:string,puedePelear:boolean){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
        }

        nombre : string;
        equipo : string;
        nombreReal : string;
        puedePelear : boolean;
        peleasGanadas? : number; // puede ser opcional

    }

    const atman = new Avenger('atman','disoses','luchito',true);
    console.log(atman) */

    //importaciones de clases -> export

    export class Avenger {
        // DE ESTA MANERA SE ESTA DECLARANCO Y CREANDO UN VALOR PRO DEFECTO U OPCIONAL A LA VEZ
        constructor(
             public nombre: string,
             public equipo? : string,
             public nombreReal? : string,
             public puedePelear : boolean = true, //valor por defecto
             public peleasGanadas? : number //opcionales
             ){}
        
        //METODOS
        imprimir(){
            console.log(`${this.nombre} es del equipo de ${this.equipo}`)
        }

    }
    //creamos una instancia 
    /* let nuevaInstancia = new Avenger('diego','gamarrita','',false);
    console.log(nuevaInstancia); */
/* })(); */


