for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
    break;
  }
}

inicio: for (let index = 0; index <= 10; index++) {
  if (index % 2 != 0) {
    continue inicio; //Va a la siguiente iteración
  }
  console.log(index);
}//Continua con lo que hay despues de inicio

fin: for (let index = 0; index <= 10; index++) {
  if (index % 2 != 0) {
    break fin; //Va a la siguiente iteración
  }
  console.log(index);
}//Se salta hasta el fin del ciclo sin iterar
