console.log("Expulsado");
let numero1 = prompt("100");
let numero2 = prompt("50");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
let resultado = numero1 + numero2;
alert("150 " + resultado);

class jugadores {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.club = equipoactual;
  }
  mostrar() {
    console.log(`Nombre: ${this.nombre} ${this.apellido}
      ${this.club}`);
  }
}

class Clase {
  constructor(jugador, tecnico, club) {
    this.jugador = jugador;
    this.tecnico = tecnico;
    this.club = club;
  }
  mostrarClase() {
    console.log(`club: ${this.club}`);
    console.log(`${this.jugador.nombre} ${this.jugador.apellido}`);
    console.log(`${this.tecnico.nombre} ${this.tecnico.apellido}`);
  }
}

const jugador1 = new jugador("martin", "palermo");
const tecnico1 = new tecnico("caruso", "lombardi");

const clase1 = new Clase(jugador, tecnico, "JavaScript");
clase1.mostrarClase();
