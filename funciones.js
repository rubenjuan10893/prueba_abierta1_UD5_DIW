'use strict';

let numeroSeleccionado;

let verPaginaTriangulo = () => {
    window.open('./triangulo.html');
}

let ingresarNumeroPositivoMenorDe100 = () => {
    numeroSeleccionado = prompt('Ingresa un numero positivo menor de 100: ');

    if (numeroSeleccionado >= 0 && numeroSeleccionado < 100) {
        alert(`El número introducido ${numeroSeleccionado} es válido! Enhorabuena!`);
    } else {
        numeroSeleccionado = Math.round(Math.random() * 100);

        alert(`El número introducido no es correcto, ¡usaré el que yo prefiera!.\n
               El número que he elegido es: ${numeroSeleccionado}`);
    }
}

let calcularFecha = () => {
    let fechaActual = new Date();
    
    alert(`La Fecha Actual es: ${fechaActual.toLocaleDateString()}`);
    
    // Si no se ha introducido ningún número, por defecto el cálculo se realizará con 200 días.
    if (!numeroSeleccionado) { 
        numeroSeleccionado = 200; 
        
        alert('Como no se ha introducido un número en el punto anterior, se sumarán automáticamente 200 días a la fecha actual.');
    }
    
    let calculoNuevaFecha = numeroSeleccionado * 1000 * 60 * 60 * 24; 
    let resultadoCalculoNuevaFecha = fechaActual.getTime() + calculoNuevaFecha;
    let nuevaFecha = new Date(resultadoCalculoNuevaFecha);

    alert(`La nueva Fecha, sumando ${numeroSeleccionado} días es: ${nuevaFecha.toLocaleDateString()}`);
}

let numeroNavidad = () => {
    // Obtenemos un número random comprendido entre 1 y 99999 y le eliminamos los decimales
    // con la función Math.floor();
    let numeroRandomNavidad = Math.floor(Math.random() *  (99999 - 1)) + 1;

    numeroRandomNavidad = addZeroToNumber(numeroRandomNavidad);

    alert(`El número premiado de Navidad es el ${ numeroRandomNavidad }\nEnhorabuena al ganador!`);
}

let addZeroToNumber = (numeroNavidad) => {
    // convertimos el número recibido a String para poder obtener su longitud
    let numberString = numeroNavidad.toString();

    // obtenemos la longitud mediante la propiedad length de String
    let numberLength = numberString.length;

    // asignamos un número máximo de longitud
    let maxLength = 5;


    if (numberLength < maxLength) {
        // calculamos cuantos dígitos hacían falta 
        let longitudRestante = maxLength - numberLength;
        let concatCero = '';

        for(let n = 0; n < longitudRestante; n++) {
            concatCero += '0';
        }

        numberString = concatCero.concat(numberString);
    }
    
    return numberString;
} 