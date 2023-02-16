
    const boton = document.querySelector("button")
    boton.addEventListener("click", nombreYApellido)



function nombreYApellido(){
    const input = document.querySelector("#nombre")
    const input2 = document.querySelector("#apellido")
    const p = document.querySelector("#resultado")
    const suma ="Tu nombre es: " + input.value + " " + input2.value
    p.innerHTML = suma

}