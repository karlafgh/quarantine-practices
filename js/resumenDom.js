// para hacer un nodo (crear la conexion de una etiqueta del html con el un variable js)
var nombreVar = document.getElementById("idDeLaEtiqueta");

// si queremos todos los elementos de una etiqueta
var nombreVar = document.getElementsByTagName("nombreEtiqueta");

////////////////////////////////////////////////////////////////////

//para cambiarle el texto a un elemento ya existente del html
var h2 = document.getElementById("idDeLaEtiqueta")

//esta acepta estilo como strong, em, i etc
h2.innerHTML("Hola, mundo")

//esta no
h2.textContent("Hello, world")

////////////////////////////////////////////////////////////////////

// crear elementos del html
var nuevoElemento = document.createElement("etiquetaDelElemento");
//creamos el contenido de ese nuevo elemenos
var contenido = document.createTextNode("bla bla bla");
//enlazamos el elemento con su contenido con la función appendChild()
nuevoElemento.appendChild(contenido);

////////////////////////////////////////////////////////////////////

// agregar el elemento creado en el js al documento html: 

//*en el body pero se agg despues del script
document.body.appendChild(nuevoElemento);

//*antes de un elemento. Por ejemplo:

// si queremos que sea el 1er hijo u otro segun sea el caso, hacemos:
var padre = document.getElementsByTagName("nombreEtiqueta")[0].parentElement,
pHijo = document.getElementsByTagName("nombreEtiqueta")[0];
// mediante esta funcion llamamos primero al nuevo elemento y luego al primer hijo
padre.insertBefore(nuevoElemento, pHijo);

//otra forma de llamar el elemento padre. Esto hacemos si queremos que el nodo sea el ultimpo elemento
var padre = documen.getElementById(elID)
padre.appendChild(nuevoElemento)

//*agregarlo para reemplazar un elemento
padre.replaceChild(nuevoElemento, pHijo);

//remover un elemento del html
padre.removeChild(pHijo)

////////////////////////////////////////////////////////////////////

//para manejar estilo dentro del js
nuevoElemento.setAttribute(propiedad, valor)

//acceder directamente a los atributos del elemento. Funciona para el id, class, href etc
document.getElementById(elID).href = "se escribe el nuevo link"




