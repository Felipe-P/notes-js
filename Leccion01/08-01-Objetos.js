let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  email: "jp@mail.com",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto());

let registros = [
  { usuario: "Andrea", contrasena: "asdfadsf" },
  { usuario: "Carlos", contrasena: "asdfadsf" },
];
let user = "Mario";
console.log(registros);

for (let index = 0; index < registros.length; index++) {
  console.log(registros[index].usuario);
  if (registros[index].usuario == user) {
    console.log("true");
  } else {
    console.log("No");
  }
}
