const canvas = document.getElementById("drawing_area");
const lienzo = canvas.getContext("2d");
const espaciadoInput = document.getElementById("espace");
const anchoInput = document.getElementById("broad");
const colorInput = document.getElementById("color");
const contenedorCanvas = document.querySelector(".conteiner_canvas");
const botonBorrarInput = document.getElementById("cleanCanvas");

const CordenadasTrazo = {
  xinicial: 0,
  yinicial: 0,
  xfinal: 0,
  yfinal: 0,
};

// Eventos
// Evento de dejar precionado el mouse para crear lineas

contenedorCanvas.addEventListener("mousedown", (event) => {
  const ObjetoMouse = posicionMouse(canvas, event);
  CordenadasTrazo.xinicial = ObjetoMouse.x;
  CordenadasTrazo.yinicial = ObjetoMouse.y;
  console.log("1");
  console.log(CordenadasTrazo);
  contenedorCanvas.addEventListener("mousemove", pintarMouse);
});

// Cuando el mouse deja de precionarse eliminar el evento de arrastrar
contenedorCanvas.addEventListener("mouseup", (event) => {
  contenedorCanvas.removeEventListener("mousemove", pintarMouse);
});

botonBorrarInput.addEventListener("click", () => {
  lienzo.clearRect(0, 0, canvas.clientWidth, canvas.height);
  console.log("pizarra borrada");
});

// Funciones
// Funcion de cordenadas del mouse

function posicionMouse(canvas, event) {
  let direccion = canvas.getBoundingClientRect();
  return {
    x: Math.round(event.clientX - direccion.left),
    y: Math.round(event.clientY - direccion.top),
  };
}

function pintarMouse(event) {
  let espaciado = parseInt(espaciadoInput.value);
  let ancho = parseInt(anchoInput.value);
  let color = colorInput.value;
  const ObjetoMouse = posicionMouse(canvas, event);
  // Arreglo de datos
  if (espaciado < 0) {
    espaciado = espaciado * -1;
  }
  if (ancho < 0) {
    ancho = ancho * -1;
  }
  // Espaciado
  if (espaciado != 1) {
    CordenadasTrazo.xfinal = ObjetoMouse.x + espaciado;
    CordenadasTrazo.yfinal = ObjetoMouse.y + espaciado;
  } else {
    CordenadasTrazo.xfinal = ObjetoMouse.x;
    CordenadasTrazo.yfinal = ObjetoMouse.y;
  }
  // Dibuja linea
  console.log("2");
  console.log(CordenadasTrazo);
  dibujaLinea(
    color,
    CordenadasTrazo.xinicial,
    CordenadasTrazo.yinicial,
    CordenadasTrazo.xfinal,
    CordenadasTrazo.yfinal,
    lienzo,
    ancho
  );
  CordenadasTrazo.xinicial = ObjetoMouse.x;
  CordenadasTrazo.yinicial = ObjetoMouse.y;
  CordenadasTrazo.xfinal = 0;
  CordenadasTrazo.yfinal = 0;
  console.log("3");
  console.log(CordenadasTrazo);
}

function dibujaLinea(
  color,
  xInicial,
  yInicial,
  xFinal,
  yFinal,
  lienzo,
  grosor
) {
  lienzo.beginPath();
  lienzo.lineWidth = grosor;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
