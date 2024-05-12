let cuadroAbout = document.querySelector(".main__about")
let btnAbout = document.getElementById("buttonAbout")
let main = document.querySelector(".main")

btnAbout.addEventListener("click", e => {
    e.preventDefault()
    main.classList.add("blur")
    cuadroAbout.style.display = "flex"
});

let closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", e=>{
    e.preventDefault()
    main.classList.remove("blur")
    cuadroAbout.style.display = "none"
})
