//Tipos de datos
//String
var nombre = "Felipe";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//Numerico
var numero = 10235;
console.log(numero);

//Objeto
var objeto = {
  nombre: "juan",
  apellido: "Gutierritos",
  telefono: "12345678",
};

console.log(objeto);

//Boolean
var bandera = true;
console.log(typeof bandera);

//function
function miFuncion() {}
console.log(typeof miFuncion);

//Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Clase
class Persona {
  //Constructor para crear un objeto
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

console.log(typeof Persona);

var nombre = "Juan",
apellido = "Perez",

nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);





