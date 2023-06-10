let edad = parseInt (prompt("Hola , Ingresa tu edad:"));

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


let monto = parseInt(prompt("Ingresa el monto del préstamo:"));

let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas:"));


let tasaIVA = 0.22;
let valorCuotaSinIVA = monto / cuotas;
let valorCuotaConIVA = valorCuotaSinIVA * (1 + tasaIVA);


alert(`El valor de cada cuota es de ${valorCuotaConIVA.toFixed(2)} (IVA incluido)`);

alert("Su préstamo ha sido aprobado. ¡Gracias por su preferencia!");

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