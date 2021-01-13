(()=>{

  // Uso de Let y Const
  const nombre : string = 'Ricardo Tapia';
  const edad : number = 23;

  let PERSONAJE = {
    nombre: nombre,
    edad: edad
  };



  // Cree una interfaz que sirva para validar el siguiente objeto
  interface persona  {
    nombre : string,
    artesMarciales : string[]
  }
  const batman : persona = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  let resultadoDoble = ( a: number, b:number ):number => (a + b) * 2
  
   console.log(resultadoDoble(10,20)) 
  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre:string, poder? :string, arma :string ='arco' ){
    let mensaje;
    if( poder ){
     return mensaje = `${nombre} tiene el poder de: ${poder} y un arama: ${arma}`
    }else{
      return mensaje = `${nombre} tiene un ${arma}`
    }
  };
  console.log(getAvenger('diego'));

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
  class rectangulo {
    
    constructor(
      public base : number,
      public altura : number
    ){}

    calcularArea():number{
      return this.base * this.altura
    }
  }
   const nuevaClase = new rectangulo(10,20)
   console.log(nuevaClase.calcularArea())


})();