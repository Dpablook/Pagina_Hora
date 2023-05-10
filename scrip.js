//treaer la hora

function contadorTiempo(){
const horaActual = new Date();
const hora = horaActual.getHours();
const minutos = horaActual.getMinutes();
const segundos = horaActual.getSeconds();
var mensaje = document.getElementById("horahtml");


console.log(`la hora en este momento es: ${hora}:${minutos}:${segundos}`);

//imprimirlo en pantalla

mensaje.innerHTML = `La hora en este momento es: ${(hora<10) ? "0" + hora : hora }:${(minutos<10) ? "0" + minutos : minutos }:${(segundos<10) ? "0" + segundos : segundos }`;
}
setInterval(contadorTiempo, 1000);


