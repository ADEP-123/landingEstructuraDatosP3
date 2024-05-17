let cuadroAbout = document.querySelector(".main__about")
let btnAbout = document.getElementById("buttonAbout")
let imgCajero = document.querySelector(".cajero")
let imgHanoi = document.querySelector(".hanoi")
let main = document.querySelector(".main")

btnAbout.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  `<p>Aqui tenemos que poner el html de nosotros jeje</p>`
    generarRecuadro(strHTML)
});

imgCajero.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  `<p>El Problema de la Cola del Banco consiste en simular la dinámica de una fila de clientes que esperan ser atendidos por un cajero en un banco. Cada cliente llega a la cola en un momento determinado y espera su turno para ser atendido. El cajero atiende a los clientes en el orden en que llegaron, siguiendo el principio de "primero en entrar, primero en salir" (FIFO). <br>
    Para el desarrollo de este ejercicio se uso html y css para el frontend y js para el backend.</p>
    <button id="buttonCajero" class="ex__button">Ir a Página</button>`
    generarRecuadro(strHTML)
    redireccionButton("buttonCajero", 'https://www.youtube.com/watch?v=Z3J_MCbwaJ0') 
});

imgHanoi.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  `<p>El ejercicio de la Torre de Hanoi se basa en una leyenda india sobre el fin del mundo, donde monjes deben mover 64 discos de oro siguiendo reglas específicas. El matemático francés Édouard Lucas en 1883, basandose en esta leyenda crea este rompecabezas de tres varillas y discos de madera que enseña principios de algoritmos y estructuras de datos. Según la leyenda, tomaría más de 500 billones de siglos completar la tarea, simbolizando la eternidad. <br>
    Reglas: <br>
    1. Sólo se puede mover un disco cada vez. <br>

    2. Un disco de mayor tamaño no puede descansar sobre uno más pequeño que él mismo. <br>

    3. Sólo puedes desplazar el disco que se encuentre arriba en cada varilla.  </p>
    <button id="buttonHanoi" class="ex__button">Ir a Página</button>`
    generarRecuadro(strHTML)
    redireccionButton("buttonHanoi", 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
});

function generarRecuadro(data){
    main.classList.add("blur")
    cuadroAbout.style.display = "flex"
    document.querySelector('.about__container').innerHTML = data
}

function redireccionButton(buttonId, url){
    let redireccionButton = document.getElementById(buttonId);
    redireccionButton.addEventListener("click", e=>{
        e.preventDefault()
        window.location.href=url
    })
}
let closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", e=>{
    e.preventDefault()
    main.classList.remove("blur")
    cuadroAbout.style.display = "none"
})

