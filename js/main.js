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
    let strHTML =  `<p>Aqui tenemos que poner el html e ejercicio 1</p>
    <button id="buttonCajero">Ir a Página</button>`
    generarRecuadro(strHTML)
    redireccionButton("buttonHanoi", 'https://www.youtube.com/watch?v=Z3J_MCbwaJ0') 
});

imgHanoi.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  `<p>Aqui tenemos que poner el html e ejercicio 2</p>
    <button id="buttonHanoi">Ir a Página</button>`
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

