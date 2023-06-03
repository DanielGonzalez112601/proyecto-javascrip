
let edad = parseInt (prompt("Hola , Ingresa tu edad:"));

// Verificar si el usuario puede acceder al préstamo
if (edad >= 18) {
  alert("Genial, Puedes acceder al préstamo");
} else {
  alert("Lamentablemente No puedes acceder al préstamo");
}

for (let i = 1; i <= 10; i++) {

    console.log(i);
  }

  // Crear el menú
let opcion = 0;
while (opcion < 1 || opcion > 4) {
  opcion = parseInt(prompt("Selecciona una opción:\n1. Préstamo personal\n2. Préstamo automotor\n3. Préstamo profesional\n4. Préstamo inmobiliario"));
}

// Mostrar el nombre de la opción seleccionada
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

// Pedir el monto y la cantidad de cuotas al usuario
let monto = parseInt(prompt("Ingresa el monto del préstamo:"));
let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas:"));

// Calcular el valor de las cuotas con un 22% de IVA
let tasaIVA = 0.22;
let valorCuotaSinIVA = monto / cuotas;
let valorCuotaConIVA = valorCuotaSinIVA * (1 + tasaIVA);

// Mostrar el resultado al usuario
alert(`El valor de cada cuota es de ${valorCuotaConIVA.toFixed(2)} (IVA incluido)`);

alert("Su préstamo ha sido aprobado. ¡Gracias por su preferencia!");
