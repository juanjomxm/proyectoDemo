
const boton = document.querySelector("button")
boton.addEventListener("click", nombreYApellido)

const botonAuto = document.querySelector("#auto-elegido")
botonAuto.addEventListener("click", seleccionarAuto)

const botonPersonalizar = document.querySelector("#boton-personalizacion")
botonPersonalizar.addEventListener("click", personalizarAuto)



function nombreYApellido(){
    const input = document.querySelector("#nombre")
    const input2 = document.querySelector("#apellido")
    const p = document.querySelector("#resultado")
    const suma ="Bienvenido(a) " + input.value + " " + input2.value
    p.innerHTML = suma

}

function seleccionarAuto() {
    const inputAuto = document.querySelector("#ferrari")
    let imgFerrari = document.createElement("img")
    imgFerrari.setAttribute("src", "https://sites.google.com/site/autosdeportivosr/_/rsrc/1464066608117/home/ferrari/Ferrari-FXX-K-1.jpg" )
    const inputAuto2 = document.querySelector("#lamborghini")
    let imgLambo = document.createElement("img")
    imgLambo.setAttribute("src", "https://www.elcarrocolombiano.com/wp-content/uploads/2019/09/20190916-LAMBORGHINI-SIAN-FKP-37-HIBRIDO-PRECIO-CARACTERISTICAS-01.jpg")
    const inputAuto3 = document.querySelector("#bugatti")
    let imgBugg = document.createElement("img")
    imgBugg.setAttribute("src", "https://www.autobild.es/sites/autobild.es/public/dc/fotos/Bugatti-Divo-2019-C01.jpg")
    const inputAuto4 = document.querySelector("#tesla")
    let imgTes = document.createElement("img")
    imgTes.setAttribute("src", "https://www.hibridosyelectricos.com/media/hibridos/images/2021/10/01/2021100114183120603.jpg")
    const pAuto = document.querySelector("#auto-escogido")

    if(inputAuto.checked){
        pAuto.innerHTML = "Elegiste un Ferrari: Enzo Ferrari fundó la Scuderia Ferrari en 1929 con el objetivo de patrocinar a pilotos aficionados de Módena. Ferrari entrenó a varios pilotos y compitió con gran éxito con autos Alfa Romeo hasta 1938, cuando fue oficialmente contratado por Alfa Romeo como presidente de su departamento de carreras"
        pAuto.append(imgFerrari)
    } else if(inputAuto2.checked){
        pAuto.innerHTML = "Elegiste un Lamborghini: Terminada la Segunda Guerra Mundial, Ferruccio Lamborghini, que había servido en un destacamento de transporte para el Ejército Italiano, comenzó a comprar sobrantes de vehículos militares para convertirlos en maquinaria agrícola. Tal fue el éxito de su nuevo negocio que, en 1960, Lamborghini ya era el tercer fabricante industrial italiano en el sector de la construcción de maquinaria agrícola, especialmente de tractores "
        pAuto.append(imgLambo)
    } else if(inputAuto3.checked){
        pAuto.innerHTML = "Elegiste un Bugatti: El fundador Ettore Bugatti nació en Milán, Italia, y la compañía de automóviles que lleva su nombre fue fundada en 1909 en Molsheim, ubicada en la región de Alsacia, que fue parte de Imperio alemán desde 1871 hasta 1919"
        pAuto.append(imgBugg)
    } else if(inputAuto4.checked){
        pAuto.innerHTML = "Elegiste un Tesla: Tesla es una empresa norteamericana fundada en el año 2003 por los ingenieros Martin Eberhard y Marc Tarpenning, bajo la denominación de Tesla Motors. Tomando el nombre del físico e ingeniero croata Nikola Tesla, ellos querían demostrar que los autos eléctricos eran mejores y más rápidos que los autos a gasolina" 
        pAuto.append(imgTes)
    } else {
        pAuto.innerHTML = "Escoge algun auto" 
    }

}



function personalizarAuto(){
    const inputColor = document.querySelector("#color")
    const inputTipo = document.querySelector("#tipo")
    const parrafoPersonalizacion = document.querySelector("#resultado-personalizacion")
    const autoPersonalizado ="Tu nuevo auto sera " + inputColor.value + " " + inputTipo.value
    parrafoPersonalizacion.innerHTML = autoPersonalizado
     
}
