function obtenerFecha(){

    let time = new Date()
        console.log(time)
        console.log(time.getMonth())
        console.log(time.getDay()) //0-6 corresponde a los dias de la semana (en numero)
        console.log(time.getDate())// corresponde a 1-30 es decir el numero del dia del mes
        console.log(time.getFullYear())
        console.log(time.getHours())
        console.log(time.getMinutes())
        console.log(time.getSeconds())
    
    
        let fecha = document.querySelector("#fecha")
        let hora = document.querySelector("#hora")
    
        let diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
    
        let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    
        //fecha objetivo
        fecha.innerHTML = `${diasSemana[time.getDay()]} ${[time.getDate()]} de ${meses[time.getMonth()]} del ${time.getFullYear()}`

        //modificar segundos
        let segundos = time.getSeconds()
        let horas = time.getHours()
        let minutos = time.getMinutes()

        if(segundos<10){
            //agregar un cero delante del numero
            segundos = "0" + segundos
        }

        if(minutos<10){
            //agregar un cero delante del numero
            minutos = "0" + minutos
        }

        if(horas<10){
            //agregar un cero delante del numero
            horas = "0" + horas
        }


        //modificar hora
       hora.innerHTML=`${horas}:${minutos}:${segundos}`
}

window.setInterval(obtenerFecha,1000)

function cambiarColor(color){
    console.log("cambiar el color a rosa")
    let fecha = document.querySelector("#fecha")
    let hora = document.querySelector("#hora")

    switch(color){
        case "rosa":
            fecha.className="fecha relojrosa"
            hora.className="hora relojrosa"
            break;
        case "verde":
            fecha.className="fecha relojverde"
            hora.className="hora relojverde"
            break;
        case "azul":
            fecha.className="fecha relojazul"
            hora.className="hora relojazul"
    }

}