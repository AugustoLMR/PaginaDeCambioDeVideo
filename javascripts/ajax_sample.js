let number = 0;
let datosJson = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      datosJson = request.response;
      modificarPagina()
    }
  }
  request.send(null);
}

function changeVideo() {
  // Describe el proceso cuando se hace clic en el botón.
  // Sólo llamar al proceso getData si no se recuperan datos de ajax.json
  button.addEventListener('click', e => {
  if (datosJson.length == 0) {
    getData();
  } else {
    modificarPagina()
  }
}
)}

function modificarPagina () {
  titleArea.innerHTML = datosJson[number].title;
  contentArea.innerHTML = datosJson[number].content;
  videoArea.setAttribute("src", datosJson[number].url);
  number == 2 ? number = 0 : number++;
}

window.onload = changeVideo;