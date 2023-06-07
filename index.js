//Encuentra al elemento HTML (el botón) mediante su ID
const miBoton = document.getElementById('miBoton');

// obtenemos el botón por su id
let boton = document.getElementById("miBoton");

// Añadimos un oyente de eventos que "escuche" el evento "click"
boton.addEventListener("click", function() {
    alert("¡Haz hecho clic en el botón!");  
});

//Define la función que se ejecutará cuando se haga click en el botón.
function handleClick() {
    alert('Hola Has hecho clic en el boton.');
}