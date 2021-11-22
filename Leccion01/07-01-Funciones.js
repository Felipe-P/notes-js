//Declaracion de la función
//Hoisting,
// miFuncion(10, 14)

function miFuncion(a, b) {
  //Descripcion como objeto
  console.log(arguments.length);
  return a + b;
}

let z = miFuncion(5, 6);
console.log(z);

//Decaracion de función de tipo expresión
let x = function (a = 4, b = 5) {
  //Imprimir el valor de los argumentos
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + arguments[2];
};

z = x(11, 3, 5);
console.log(z);

//Función tipo flecha
const sumarFuncionFlecha = (a, b) => a + b;
z = sumarFuncionFlecha(3, 5);
console.log(z);

//Funcion anonima que se puede llamar asi misma, no se puede reutilizar solo se llama una vez
(function (a, b) {
  console.log("Ejecutando la función: " + a * b);
})(4, 8);

let resutlado = sumarTodo(5, 4, 13, 10, 9);
console.log(resutlado);

function sumarTodo() {
  let suma = 0;
  for (let index = 0; index < arguments.length; index++) {
    suma += arguments[index];
  }
  return suma;
}

//Tipo primitivo, no se pueden asociar ni atributos ni metodos
//Paso por valor, a=10 y b copia el valor de a
let a = 10;
function cambiarValor(b) {
  b = 20;
}

cambiarValor(a);
console.log(a);

//Paso por referencia
//Objeto
const persona = {
  nombre: "Juan",
  apellido: "Perez",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "Carlos";
  p1.apellido = "Gutierritos";
}

cambiarValorObjeto(persona);
console.log(persona);
