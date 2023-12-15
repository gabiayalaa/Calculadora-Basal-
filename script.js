
const CALCULAR = document.getElementById("Calcular")
const ERROR = document.getElementById("error")
const FLUJO = document.getElementById("flu")
const MANTENIMIENTO = document.getElementById("man")
const VOLUMEN = document.getElementById("volu")

//variables que recogen las lineas que explican en donde se explicara el calculo
const METODO = document.getElementById("metodo")
const PRI_LINEA = document.getElementById('PrimeraLinea')
const SEG_LINEA = document.getElementById('SegundaLinea')
const TER_LINEA = document.getElementById('TercerLinea')
const CUAR_LINEA = document.getElementById("CuartaLinea")
const QUIN_LINEA = document.getElementById("QuintaLinea")
const SEXT_LINEA = document.getElementById("SextaLinea")
const COMOSE= document.getElementById("comose")

CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById("peso").value
    //validamos que se cargue un dato:
    if (PESO > 0) {
        //Calcula los valores necesarios
        let flujo = calcflujo(PESO)
        let mantenimiento = flujo / 24
        let manMasMan = mantenimiento * 1.5
        //Establece los valores a ser mostrados en dichas lineas
        FLUJO.innerHTML = Math.round(mantenimiento) + " CC/HR"
        MANTENIMIENTO.innerHTML = 'm+m/2 ' + Math.round(manMasMan) + " CC/HR"
        VOLUMEN.innerHTML = flujo + " CC"
        // Oculta el mensaje de error
        ERROR.style.display = "none"
        // muestra los mensajes de los resultados
        METODO.style.display= "block"
        FLUJO.style.display = "block"
        MANTENIMIENTO.style.display = "block"
        VOLUMEN.style.display = "block"
        COMOSE.style.display= "block"
    } else {
        //Muestra el mensaje de error
        ERROR.style.display = "block"
        //Oculta los mensajes de resultados
        FLUJO.style.display = "none"
        MANTENIMIENTO.style.display = "none"
        VOLUMEN.style.display = "none"
        METODO.style.display= 'none'
        COMOSE.style.display= "none"
   
    }
    
})


function calcflujo(peso) {
    //Se realizan los calculos segun los lineamientos
    
    let flujo
    if (peso <= 10) {
        flujo = peso * 100
        
        //mostramos el metodo necesario
        METODO.innerHTML="Método Holliday-Segar"
        COMOSE.innerHTML="¿Cómo se calcula?"
        // cambiamos el mensaje en la zona derecha para explicar como se realizaron los calculos
        PRI_LINEA.innerHTML = "De 0kg a 10kg, se calcula 100cc por cada kilo"
        SEG_LINEA.innerHTML = "Se Suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg"
        TER_LINEA.innerHTML = "De 20kg para arriba, se suman 20cc por cada kilo adicional"
    }
    //mayores de 10 y menores o iguales a 20
    else if (peso > 10 && peso <= 20) {
        flujo = (100 * 10) + ((peso - 10)) * 50;
        METODO.innerHTML="Método Holliday-Segar"
        COMOSE.innerHTML="¿Cómo se calcula?"
        // cambiamos el mensaje en la zona derecha para explicar como se realizaron los calculos
        PRI_LINEA.innerHTML = "De 0kg a 10kg, se calcula 100cc por cada kilo"
        SEG_LINEA.innerHTML = "Se Suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg"
        TER_LINEA.innerHTML = "De 20kg para arriba, se suman 20cc por cada kilo adicional"
    }
    //mayores a 20 y menores a 30
    else if (peso > 20 && peso < 30) {
        flujo = ((peso - 20) * 20) + (1500);
        METODO.innerHTML="Método Holliday-Segar"
        COMOSE.innerHTML="¿Cómo se calcula?"
        // cambiamos el mensaje en la zona derecha para explicar como se realizaron los calculos
        PRI_LINEA.innerHTML = "De 0kg a 10kg, se calcula 100cc por cada kilo"
        SEG_LINEA.innerHTML = "Se Suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg"
        TER_LINEA.innerHTML = "De 20kg para arriba, se suman 20cc por cada kilo adicional"
    }
    
    else {
        
        let supercorp = ((peso * 4) + 7) / (peso + 90)
        flujo = supercorp * 1500;
        METODO.innerHTML="Método Superficie Corporal"
        COMOSE.innerHTML="¿Cómo se calcula?"
        PRI_LINEA.innerHTML = "Cuando el niño pesa mas de 30kg, se utiliza un cálculo diferente:"
        SEG_LINEA.innerHTML=" Superficie corporal =   ( (peso * 4) + 7) / (peso + 90)"
        TER_LINEA.innerHTML= "Este resultado se multiplica por 1500 o por 2000 para hallar el valor del volumen diario en cc, y el médico decide cual de los dos resultados utilizar."
    }

    return Math.round(flujo)
}

