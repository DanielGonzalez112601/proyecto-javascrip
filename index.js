
let edad = parseInt (prompt("Hola , Ingresa tu edad:"));


if (edad >= 18) {
  alert("Genial, Puedes acceder al préstamo");
} else {
  alert("Lamentablemente No puedes acceder al préstamo");
}

for (let i = 1; i <= 10; i++) {

    console.log(i);
  }


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