const mensaje = "Feliz Navidad, te amo Paletita❤️";
let indice = 0;
const elemento = document.getElementById("mensaje");

function escribirTexto() {
  if (indice <= mensaje.length) {
    elemento.textContent = mensaje.slice(0, indice);
    indice++;
    setTimeout(escribirTexto, 120);
  }
}

escribirTexto();
