


let edad = parseInt(prompt("Hola , Ingresa tu edad:"));

if (edad >= 18) {
    alert("Genial, Puedes acceder al préstamo");
} else {
    alert("Lamentablemente No puedes acceder al préstamo");
}


let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
}

console.log(`La suma de los números del 1 al 10 es ${suma}`);


function solicitarPrestamo() {

    let opcion = 0;
    while (opcion < 1 || opcion > 4) {
        opcion = parseInt(prompt("Selecciona una opción:\n1. Préstamo personal\n2. Préstamo automotor\n3. Préstamo profesional\n4. Préstamo inmobiliario"));
    }

    let nombreOpcion;
    switch (opcion) {
        case 1:
            nombreOpcion = "Préstamo personal";
            break;
        case 2:
            nombreOpcion = "Préstamo automotor";
            break;
        case 3:
            nombreOpcion = "Préstamo profesional";
            break;
        case 4:
            nombreOpcion = "Préstamo inmobiliario";
            break;
    }
    alert(`Has seleccionado la opción ${opcion}: ${nombreOpcion}`);

    let nombre = prompt("Ingresa tu nombre:");
    let cantidad = parseFloat(prompt("Ingresa la cantidad deseada:"));
    let plazo = parseInt(prompt("Ingresa el plazo en meses:"));

    let solicitud = {
        nombre: nombre,
        cantidad: cantidad,
        plazo: plazo
    };

    procesarSolicitud(solicitud);

    alert("Su préstamo ha sido aprobado. ¡Gracias por su preferencia!");
}
let tasaInteres = 0.1;
let historialSolicitudes = [];

// Funciones
function procesarSolicitud(solicitud) {
    let intereses = solicitud.cantidad * tasaInteres * solicitud.plazo;
    let totalPagar = solicitud.cantidad + intereses;

    let resultado = {
        nombre: solicitud.nombre,
        cantidad: solicitud.cantidad,
        plazo: solicitud.plazo,
        intereses: intereses,
        totalPagar: totalPagar
    };

    historialSolicitudes.push(resultado);
    mostrarResultado(resultado);
}
function mostrarResultado(resultado) {
    alert("Nombre: " + resultado.nombre +
        "\nCantidad solicitada: $" + resultado.cantidad.toFixed(2) +
        "\nPlazo: " + resultado.plazo + " meses" +
        "\nIntereses: $" + resultado.intereses.toFixed(2) +
        "\nTotal a pagar: $" + resultado.totalPagar.toFixed(2));
}





function buscarSolicitudPorNombre(nombre) {
    let resultados = historialSolicitudes.filter(function (solicitud) {
        return solicitud.nombre.toLowerCase() === nombre.toLowerCase();
    });

    return resultados;
}

function filtrarSolicitudesPorCantidadMinima(cantidadMinima) {
    let resultados = historialSolicitudes.filter(function (solicitud) {
        return solicitud.cantidad >= cantidadMinima;
    });

    return resultados;
}

let historialSolicitudes2 = [];


historialSolicitudes.push({ nombre: "Juan", cantidad: 1000, plazo: 12 });
historialSolicitudes.push({ nombre: "María", cantidad: 500, plazo: 6 });
historialSolicitudes.push({ nombre: "Pedro", cantidad: 1500, plazo: 24 });
historialSolicitudes.push({ nombre: "Ana", cantidad: 2000, plazo: 18 });


let resultadoBusqueda = buscarSolicitudPorNombre("María");
console.log(resultadoBusqueda);


let resultadoFiltrado = filtrarSolicitudesPorCantidadMinima(1500);
console.log(resultadoFiltrado);





class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

const persona = new Persona("Daniel", "González", 26);
const persona2 = new Persona("juan", "Perez", 40);


//   funcion

function sumar(a, b) {
    return a + b;
}

let numero1 = 5;
let numero2 = 3;
let resultado = sumar(numero1, numero2);
console.log(resultado);

//   array 

function sumarArray(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma;
}

let numeros = [1, 2, 3, 4, 5];
let resultado2 = sumarArray(numeros);
console.log(resultado2);

// funcions de orden superior

function ejecutarFuncion(funcion) {
    funcion();
}

function saludar() {
    console.log("¡Hola! Esta función fue ejecutada por otra función.");
}

ejecutarFuncion(saludar);