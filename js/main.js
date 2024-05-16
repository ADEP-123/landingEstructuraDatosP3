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
    let strHTML =  `<p>Aqui tenemos que poner el html e ejercicio 1</p>`
    generarRecuadro(strHTML)
});

imgHanoi.addEventListener("click", e => {
    e.preventDefault()
    let strHTML =  `<p>Aqui tenemos que poner el html e ejercicio 2</p>`
    generarRecuadro(strHTML)
});

function generarRecuadro(data){
    main.classList.add("blur")
    cuadroAbout.style.display = "flex"
    document.querySelector('.about__container').innerHTML = data
}

let closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", e=>{
    e.preventDefault()
    main.classList.remove("blur")
    cuadroAbout.style.display = "none"
})

