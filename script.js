const c = console.log
/* Seleccionar nodos con id :
document.getElementById()
Seleccionar nodos con selectores de CSS
document.querySelector() o element.querySelector()
document.querySelectorAll() o element.querySelectorAll()*/
const title = document.getElementById('title')
const listItems = Array.from(document.querySelectorAll('ul li')) // Lo transformamos en una array
const list = document.getElementById('list')
// No devuelven un array, sino una nodeList
title.style.background = 'yellow'  // Con .style accedo a las propiedades de css

c(title)

c(document.querySelector('h1'))

c(listItems)

c(list)
//c(list.querySelectorAll('li'))  // Accedo a cada uno de los elementos del nodo

listItems.map( el => el.style.background = 'green') 
// Le aplicamos a cada uno de los elementos un estilo

listItems.map( el => {  // Recorremos el array
    // Verificamos el contenido y le quitamos espacios y todo en mayuscula
    if(el.textContent.trim().toUpperCase() === 'OBJECT')  
    el.remove()  // Le borramos el contenido
})
c(listItems)

// ES MUY IMPORTANTE HACER VALIDACIONES
const titulo = document.getElementById('title2')

if(titulo) {  // Verificamos si el nodo existe
    titulo.style.background = 'blue'
}

// PODEMOS AGREGAR O QUITAR CLASES
/*con .classList.add() = Le agrega una clase
con .classList.remove() = Le borra una clase
con .classList.toggle() = Verifica si tiene la clase la borra y si no la tiene la agrega*/

list.classList.add('titulo')

// CONTENIDO: Es lo que esta dentro del elemento
c(title.textContent)  // Devuelve solo el contenido en texto
c(title.innerHTML)  // Devuelve el html tal cual
c(title.outerHTML)  // Devuelve un str con todo el elemento

// Podemos cambiar el contenido
title.textContent = 'HOLA MUNDO'
title.innerHTML = `Hola mama, <em> estoy en clases </em>`  // Usamos elemento HTML