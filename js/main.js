let cuadroAbout = document.querySelector(".main__about")
let btnAbout = document.getElementById("buttonAbout")
let imgCajero = document.querySelector(".cajero")
let imgHanoi = document.querySelector(".hanoi")
let main = document.querySelector(".main")

btnAbout.addEventListener("click", e => {
    e.preventDefault()
    let strHTML = `<p>Aqui tenemos que poner el html de nosotros jeje</p>`
    generarRecuadro(strHTML)
});

imgCajero.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  /*html*/`<h1>Problema de la cola del banco</h1>
    <img src="storage/img/fila.gif" alt="">
    <p>El problema de las filas en el banco surgió de la observación de las colas de personas esperando atención en bancos, supermercados y otros establecimientos de servicios. Esta situación diaria ha sido estudiada en la teoría de colas y la gestión de operaciones para comprender y optimizar tanto el tiempo de espera como la eficiencia del servicio.
    <br>Para entender este problema, se realizo un aplicativo web interactivo sobre el uso de cajeros electronicos, donde la persona prodra, agregar cajeros, eliminar cajeros, agregar personas a los cajeros y a la fila de espera por ser atendidos, al igual que completar transacciones (es decir, cuando la persona completa su transaccion en el cajero y sale de la fila). 
    </p>
    <button id="buttonCajero" class="ex__button">Ir a Página</button>`
    generarRecuadro(strHTML)
    redireccionButton("buttonCajero", 'https://adep-123.github.io/estructuraDatosA/')
});

imgHanoi.addEventListener("click", e => {
    e.preventDefault()
    let strHTML = /*html*/`<h1>Problema de la Torre de Hanoi</h1>
    <img src="storage/img/hanoi.gif" alt="">
    <p>El ejercicio de la Torre de Hanoi se basa en una leyenda india sobre el fin del mundo, donde monjes deben mover 64 discos de oro siguiendo reglas específicas. 
    <br>El matemático francés Édouard Lucas en 1883, basandose en esta leyenda crea este rompecabezas de tres varillas y discos de madera que enseña principios de algoritmos y estructuras de datos. Según la leyenda, tomaría más de 500 billones de siglos completar la tarea, simbolizando la eternidad. <br>
    Para el desarrollo de este aplicativo, realizamos el juego de la torre de Hanoi en una interfaz interactiva donde el usuario podra arrastrar los discos para solucionar el sistema, ademas de que podra elegir la cantidad de discos, en que parte iniciar y ver la solucion del problema
    <br><b>Reglas:</b><br>
    1. Sólo se puede mover un disco cada vez. <br>

    2. Un disco de mayor tamaño no puede descansar sobre uno más pequeño que él mismo. <br>

    3. Sólo puedes desplazar el disco que se encuentre arriba en cada varilla.  </p>
    <button id="buttonHanoi" class="ex__button">Ir a Página</button>`
    generarRecuadro(strHTML)
    redireccionButton("buttonHanoi", 'https://adep-123.github.io/estructuraDatosB/')
});

function generarRecuadro(data) {
    main.classList.add("blur")
    cuadroAbout.style.display = "flex"
    document.querySelector('.about__container').innerHTML = data
}

function redireccionButton(buttonId, url) {
    let redireccionButton = document.getElementById(buttonId);
    redireccionButton.removeEventListener("click", e => { })
    redireccionButton.addEventListener("click", e => {
        e.preventDefault()
        window.location.href = url
    })
}

let closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", e => {
    e.preventDefault()
    main.classList.remove("blur")
    cuadroAbout.style.display = "none"
})

