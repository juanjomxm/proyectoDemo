function incio() {
    let botonPersonaje = document.getElementById("seleccionar-personaje")
    botonPersonaje.addEventListener("click", seleccionarPersonaje)

}

function seleccionarPersonaje() {
        let inputItachi = document.getElementById("itachi")
        let inputKakashi = document.getElementById("kakashi")
        let inputMinato = document.getElementById("minato")
        let inputJiraiya = document.getElementById("jiraiya")
        let spanPersonaje = document.getElementById("personaje-escogido")

        if(inputItachi.checked) {
            spanPersonaje.innerHTML = "itachi"
        } else if(inputKakashi.checked) {
            spanPersonaje.innerHTML = "kakashi"
        } else if(inputMinato.checked) {
            spanPersonaje.innerHTML = "minato"
        } else if(inputJiraiya.checked) {
            spanPersonaje.innerHTML = "jiraiya"
        }  else {
            alert("escoge algo")
        }
        
       
}


window.addEventListener("load", incio )