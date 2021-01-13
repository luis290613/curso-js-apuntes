"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    let PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    let resultadoDoble = (a, b) => (a + b) * 2;
    console.log(resultadoDoble(10, 20));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma = 'arco') {
        let mensaje;
        if (poder) {
            return mensaje = `${nombre} tiene el poder de: ${poder} y un arama: ${arma}`;
        }
        else {
            return mensaje = `${nombre} tiene un ${arma}`;
        }
    }
    ;
    console.log(getAvenger('diego'));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
    }
    const nuevaClase = new rectangulo(10, 20);
    console.log(nuevaClase.calcularArea());
})();
