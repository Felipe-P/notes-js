let a = 3,
  b = 2,
  z = a + b;
console.log(z);

z = ++a;
console.log(a);
console.log(z);

z = b++;
console.log(b);
console.log(z);

z = a - b;
console.log(z);

z = a * b;
console.log(z);

z = a ** b;
console.log(z);

z = a / b;
console.log(z);

z = a % b;
console.log(z);

a = 3;
b = 2;
let c = "3";
z = a == b; // Se revisa el valor sin importar el tipo
z = a === c; // Revisa los valores pero tambien los tipos

//Convertir String a numero
let miNumero = "20x";
let edad = Number(miNumero);
console.log(typeof edad);
//NaN Not a Number isNaN
if (isNaN(edad)) {
  console.log("No es un número");
} else {
  let res = edad > 18 ? "Puede votar" : "No puede votar";
  console.log(res);
}
