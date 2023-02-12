function incio() {
    let botonPersonaje = document.getElementById("seleccionar-personaje")
    botonPersonaje.addEventListener("click", seleccionarPersonaje)

    let articuloPersonaje = document.getElementById("articulo-itachi")
    articuloPersonaje.style.display = "none"

    let articuloPersonaje2 = document.getElementById("articulo-kakashi")
    articuloPersonaje2.style.display = "none"

}

function seleccionarPersonaje() {
        let inputItachi = document.getElementById("itachi")
        let inputKakashi = document.getElementById("kakashi")
        let inputMinato = document.getElementById("minato")
        let inputJiraiya = document.getElementById("jiraiya")
        let spanPersonaje = document.getElementById("personaje-escogido")

        if(inputItachi.checked) {
            spanPersonaje.innerHTML = "Itachi"
        } else if(inputKakashi.checked) {
            spanPersonaje.innerHTML = "Kakashi"
        } else if(inputMinato.checked) {
            spanPersonaje.innerHTML = "Minato"
        } else if(inputJiraiya.checked) {
            spanPersonaje.innerHTML = "Jiraiya"
        }  else {
            alert("escoge algo")
        }
        
        subtituloPersonaje()     
}


window.addEventListener("load", incio )