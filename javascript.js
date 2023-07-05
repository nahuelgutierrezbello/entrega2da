let opcion = "quien es mas grande";
while (opcion !== "salir") {
  opcion = prompt("Ingrese un equipo (salir para terminar):");
  switch (opcion) {
    case "1":
      alert("River Plate");
      break;
    case "2":
      alert("Boca Jrs");
      break;
    case "3":
      alert("Racing Club");
      break;
    case "salir":
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opción inválida");
  }
}
alert("Fin del programa");

function printNumbersAndSum() {
  var i = 1;
  var sum = 0;
  while (i <= 10) {
    console.log(i);
    sum += i;
    i++;
  }
  console.log("The sum is " + sum);
}

printNumbersAndSum();

const array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
