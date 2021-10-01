//funciones para manejar tiempo

//mostrar un mensaje pasado un tiempo x desde que cargo la pagina

function saludar(){
    document.write("Hola mundo")
}

window.setTimeout(saludar,2000) 


let contador = 1

let saludar =()=>{
    if(contador == 5){
        clearInterval(identificador) //deja de mostrar el Hola mundo despues de llegado a las 5 veces
    }
    document.write("Hola mundo")
    contador++
}

setTimeout(()=>{document.write("Hola mundo")}, 4000)

//llamar a una funcion cada cierto tiempo en milisegundos
/* window.setInterval(saludar,1000) */

let identificador = window.setInterval(saludar,1000) //se añade la variable para poder detenerla en algun momento