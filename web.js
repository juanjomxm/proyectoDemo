
function elInicio(){

const boton = document.querySelector("button")
boton.addEventListener("click", nombreYApellido)

const botonAuto = document.querySelector("#auto-elegido")
botonAuto.addEventListener("click", seleccionarAuto)

const botonPersonalizar = document.querySelector("#boton-personalizacion")
botonPersonalizar.addEventListener("click", personalizarAuto)

const botonCientifico = document.querySelector("#boton-cientifico")
botonCientifico.addEventListener("click", seleccionarCientifico)

const botonDescuento = document.querySelector("#boton-cupon")
botonDescuento.addEventListener("click", cuponDescuento)

const botonMediana = document.querySelector("#boton-mediana")
botonMediana.addEventListener("click", calcularMediana)

const botonCuponCientifico = document.querySelector("#boton-cupon-cientifico")
botonCuponCientifico.addEventListener("click", validarCuponCientifico)

}

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



function cuponDescuento(){
    const inputPrecioAuto = document.querySelector("#precio-auto")
    const inputCuponDescuento = document.querySelector("#cupon")
    const pCuponAuto = document.querySelector("#resultado-descuento")
    const precio = inputPrecioAuto.value
    const cupon = inputCuponDescuento.value
    let descuento

    if(cupon == "Premium"){
        descuento = 10
        pCuponAuto.innerHTML = "Tu carro te quedaria en $ " + [precio * (100 - descuento) / 100]
    } else if(cupon == "VIP"){
        descuento = 5
        pCuponAuto.innerHTML = "Tu carro te quedaria en $ " + [precio * (100 - descuento) / 100]
    }
}

    


function seleccionarCientifico() {
    const inputEinstein = document.querySelector("#einstein")
    let imgEinstein = document.createElement("img")
    imgEinstein.setAttribute ("src", "https://www.biografiasyvidas.com/monografia/einstein/fotos/einstein_1947.jpg")
    const inputNewton = document.querySelector("#newton")
    let imgNewton = document.createElement("img")
    imgNewton.setAttribute ("src", "https://ruizhealytimes.com/wp-content/uploads/2020/11/isaac-newton-1200x1204.jpg")
    const inputTesla = document.querySelector("#tesla1")
    let imgTesla = document.createElement("img")
    imgTesla.setAttribute("src", "https://cdn.britannica.com/19/187119-050-C555ADE1/Nikola-Tesla-Publicity-photo-laboratory-Colorado-Springs-December-1899.jpg")
    const inputTuring = document.querySelector("#turing")
    let imgTuring = document.createElement("img")
    imgTuring.setAttribute("src", "https://www.nationalgeographic.com.es/medio/2019/05/30/alan-turing_8c5d84c7_1200x630.jpg")
    const pCientifico = document.querySelector("#parrafo-cientifico")

    if(inputEinstein.checked){
        pCientifico.innerHTML = "Albert Einstein: En 1905, cuando era un joven físico desconocido, empleado en la Oficina de Patentes de Berna, publicó su teoría de la relatividad especial. En ella incorporó, en un marco teórico simple fundamentado en postulados físicos sencillos, conceptos y fenómenos estudiados antes por Henri Poincaré y Hendrik Lorentz. Como una consecuencia lógica de esta teoría, dedujo la ecuación de la física más conocida a nivel popular: la equivalencia masa-energía, E=mc². Ese año, publicó otros trabajos que sentarían algunas de las bases de la física estadística y de la mecánica cuántica. "
        pCientifico.append(imgEinstein)
    } else if (inputNewton.checked){
        pCientifico.innerHTML = "Isaac Newton: Entre sus hallazgos científicos se encuentran el descubrimiento —considerado el inicio de la espectroscopia— de que el espectro de color que se observa cuando la luz blanca pasa por un prisma es inherente a esa luz, en lugar de provenir del prisma (como había sido postulado por Roger Bacon en el siglo xiii); su argumentación sobre la posibilidad de que la luz estuviera compuesta por partículas; su desarrollo de una ley de convección térmica, que describe la tasa de enfriamiento de los objetos expuestos al aire; sus estudios sobre la velocidad del sonido en el aire; y su propuesta de una teoría sobre el origen de las estrellas."
        pCientifico.append(imgNewton)
    } else if (inputTesla.checked){
        pCientifico.innerHTML = " Nikola Tesla: Tesla, que nació y se crio en el Imperio austríaco, estudió ingeniería y física en la década de 1870 sin obtener un título, aunque adquirió experiencia práctica a principios de la década de 1880 trabajando en telefonía para la empresa Continental Edison, que por entonces lideraba la nueva industria de la energía eléctrica. En 1884 emigró a Estados Unidos, donde adquirió la doble nacionalidad. Trabajó durante un corto tiempo en Edison Machine Works en Nueva York antes de emprender el camino por su cuenta. Con la ayuda de socios para financiar y comercializar sus ideas, Tesla fundó laboratorios y empresas en Nueva York para desarrollar dispositivos eléctricos y mecánicos. Su motor asíncrono de corriente alterna (CA) y las patentes relacionadas con el sistema polifásico, licenciadas por Westinghouse Electric en 1888, le reportaron grandes sumas de dinero y además se convirtieron en la piedra angular del sistema polifásico finalmente comercializado por esta empresa."
        pCientifico.append(imgTesla)
    } else if (inputTuring.checked){
        pCientifico.innerHTML = " Alan Turing: Durante la segunda guerra mundial, trabajó en descifrar los códigos nazis, particularmente los de la máquina Enigma, y durante un tiempo fue el director de la sección Naval Enigma de Bletchley Park. Se ha estimado que su trabajo acortó la duración de esa guerra entre dos y cuatro años.​ Tras la guerra, diseñó uno de los primeros computadores electrónicos programables digitales en el Laboratorio Nacional de Física del Reino Unido y poco tiempo después construyó otra de las primeras máquinas en la Universidad de Mánchester "
        pCientifico.append(imgTuring)
       
    } else{
        pCientifico.innerHTML = "Escoge un cientifico"
    }
}



function esPar(lista){
    return !(lista.length % 2)
}

function esImpar(lista){
     return lista.length % 2
}

function calcularMediana(listaDesordenada){ // El codigo esta bueno, no he podido descifrar como introducir los datos en el input, lo comprobe desde la consola y esta funcionando perfecto, solo me falta descifrar como el usuario puede introducir la lista con los numeros que desee

    //const inputMediana = document.querySelector("#lista-mediana")
    //const listaM = inputMediana.value
    const pMediana = document.querySelector("#parrafo-mediana")
    const lista = ordenarLista(listaDesordenada)
    const esPar2 = esPar(lista)
   


   if(esPar2){
        const mitadPar = Math.floor((lista.length / 2) - 1)
        const mitadPar2 = Math.floor((lista.length / 2))
        const sumaIndex = ((lista[mitadPar]) + (lista[mitadPar2])) / 2
        pMediana.innerHTML =  sumaIndex
       
    } else {
        const indexmitadImpar = Math.floor(lista.length / 2)
        pMediana.innerHTML = (lista[indexmitadImpar])
    }
} 

function ordenarLista(listaDesordenada){
    const listaMediana = listaDesordenada.sort((a,b) => a - b)
    return listaMediana
}

function validarCuponCientifico(){
    const inputPrecioCientifico = document.querySelector("#precio")
    const inputCuponCientifico = document.querySelector("#cupon-cientifico")
    const precioCien = inputPrecioCientifico.value
    const cuponCien = inputCuponCientifico.value
    const parrafoCientifico = document.querySelector("#parrafo-cupon-cientifico")
    const cuponesCientificos = [
        {name:"einstein", esteCupon: 40},
        {name:"newton", esteCupon: 30},
        {name:"tesla", esteCupon: 20},
        {name:"turing", esteCupon: 10},
    ]

    const cuponIngresado = cuponesCientificos.find((arraysCupones) => arraysCupones.name == cuponCien)

    if(cuponIngresado){
        esteCupon = cuponIngresado.esteCupon
        parrafoCientifico.innerText = "Con este cupon te queda en " + Math.floor(precioCien *(100 - esteCupon) / 100)
    } else {
        "ingresa el cupon de un cientifico"
    }
}

window.addEventListener("load", elInicio)