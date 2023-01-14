function calculoNombre() {
  const nombreYo = "nacho";
  const nombrePrimo = "martin";
  const $nombreUsuario = document.querySelector("#nombre-usuario");
  const nombreUsuario = $nombreUsuario.value;
  const nodoResultado = document.querySelector("#resultado-nombre");
  const nombresMayusUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
  const nombresMayusPrimo = nombrePrimo.charAt(0).toUpperCase() + nombrePrimo.slice(1);

  if (nombreUsuario === nombreYo) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `Hola, tocayo! Yo tambien me llamo ${nombresMayusUsuario}!`;
  } else if (nombreUsuario === nombrePrimo.toLowerCase()) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `Hola ${nombresMayusPrimo}, te llamas igual que mi primo!`;
  } else if (nombreUsuario == 0) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = "Hola, anónimo!";
  } else if (nombreUsuario !== nombreYo && nombreUsuario !== nombrePrimo) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `Hola, ${nombresMayusUsuario}!`;
  } else {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Completa los campos correctamente";
  }
}

function calculoEdad() {
  const $edadUsuario = document.querySelector("#edad-usuario");
  const edadUsuario = Number($edadUsuario.value);
  const nodoResultado = document.querySelector("#resultado-edad");
  const miAniodeNacimiento = 1992;
  const anioActual = new Date().getFullYear();
  const miEdad = anioActual - miAniodeNacimiento;

  if (edadUsuario === miEdad) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = "Tenemos la misma edad!";
  } else if (edadUsuario > miEdad) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = "Sos mas grande que yo!";
  } else if (edadUsuario < miEdad) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = "Sos mas chico que yo!";
  } else {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Completa los campos correctamente";
  }
}

function calculoDocumento() {
  const dniSi = document.querySelector("#respuesta-si");
  const dniNo = document.querySelector("#respuesta-no");
  const $edadUsuario = document.querySelector("#edad-usuario");
  const edadUsuario = Number($edadUsuario.value);
  const nodoResultado = document.querySelector("#resultado-documento");

  if (dniSi.checked) {
    if (edadUsuario >= 18) {
      nodoResultado.className = "valido";
      nodoResultado.innerText = "Sos mayor, podes entrar al bar.";
    } else if (edadUsuario < 18) {
      nodoResultado.className = "error";
      nodoResultado.innerText = "Sos menor, no podes entrar al bar";
    } else {
      nodoResultado.className = "error";
      nodoResultado.innerText = "No entiendo, intenta de nuevo";
    }
  } else if (dniNo.checked) {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Sin DNI no vas a poder entrar al bar!";
  } else {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Hubo un error, intenta de nuevo.";
  }
}

function reiniciarResultado() {
  const nodoResultadoNombre = document.querySelector("#resultado-nombre");
  const nodoResultadoEdad = document.querySelector("#resultado-edad");
  const nodoResultadoDocumento = document.querySelector("#resultado-documento");
  nodoResultadoNombre.className = "";
  nodoResultadoNombre.innerText = "";
  nodoResultadoEdad.className = "";
  nodoResultadoEdad.innerText = "";
  nodoResultadoDocumento.className = "";
  nodoResultadoDocumento.innerText = "";
}

document.querySelector("#ingresar").onclick = () => {
  calculoNombre();
  calculoEdad();
  calculoDocumento();
};

document.querySelector("#reset").onclick = () => reiniciarResultado();
