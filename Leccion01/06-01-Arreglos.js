//let autos = new Array('bmw', 'Volvo');

const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);

//Recorrer arrays
for (let index = 0; index < autos.length; index++) {
  const element = autos[index];
  console.log(autos[index]);
}
autos.forEach((auto) => {
  console.log(auto);
});

autos.push("Audi");
console.log(autos);

// Preguntar si es un arreglo
console.log(Array.isArray(autos));
console.log(autos instanceof Array); 
