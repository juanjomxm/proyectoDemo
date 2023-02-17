
const boton = document.querySelector("button")
boton.addEventListener("click", nombreYApellido)

const botonAuto = document.querySelector("#auto-elegido")
botonAuto.addEventListener("click", seleccionarAuto)



function nombreYApellido(){
    const input = document.querySelector("#nombre")
    const input2 = document.querySelector("#apellido")
    const p = document.querySelector("#resultado")
    const suma ="Bienvenido(a) " + input.value + " " + input2.value
    p.innerHTML = suma

}

function seleccionarAuto() {
    const inputAuto = document.querySelector("#ferrari")
    const inputAuto2 = document.querySelector("#lamborghini")
    const inputAuto3 = document.querySelector("#bugatti")
    const inputAuto4 = document.querySelector("#tesla")
    const pAuto = document.querySelector("#auto-escogido")

    if(inputAuto.checked){
        pAuto.innerHTML = "Elegiste un Ferrari"
    } else if(inputAuto2.checked){
        pAuto.innerHTML = "Elegiste un Lamborghini " 
    } else if(inputAuto3.checked){
        pAuto.innerHTML = "Elegiste un Bugatti"
    } else if(inputAuto4.checked){
        pAuto.innerHTML = "Elegiste un Tesla" 
    } else {
        pAuto.innerHTML = "Escoge algun auto"
    }

}