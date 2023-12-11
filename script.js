// console.log("1");

// let variable2 = 195;
// let variable = true;
// variable = "Hola Mundo";
// variable = variable2;
// const CONSTANTE = 295;

// console.log(variable!==CONSTANTE);
// if (variable > CONSTANTE){
//     console.log(variable,"es mayor a",CONSTANTE);
// }else if(variable < CONSTANTE){
//     console.log(CONSTANTE,"es mayor a",variable);
// }else{
//     console.log(CONSTANTE,"es igual a",variable);
// } 

// function suma(num1,num2){
//     //let num1=3;
//     //let num2=5;
//     const RESUL= num1 + num2;
//     console.log(RESUL)
// }
// suma(20,2);
// suma(10,10);


// function mayor(a,b,c){
//     if (a>b && a>c){
//         console.log(a);

//     }else if (b>a && b>c){
//         console.log(b)

//     }else{
//         console.log(c)
//     }
// }
// mayor(14,32,18)

// function masmayor(a,b,c){
//     let mayor=(((a>b? a:b)<c)? c:(a>b? a:b));
//     console.log(mayor)
// }
// function masmayor(a,b,c){
//     return(a>=b&&a>=c)? a:(b>=a && b>=c)?b:c;
// }

// otromas(30,30,30)
// console.log(mayorfun*2)

const CALCULAR= document.getElementById("Calcular")
const ERROR=document.getElementById("error")
const FLUJO=document.getElementById("flu")
const MANTENIMIENTO=document.getElementById("man")
const VOLUMEN=document.getElementById("Volu")
const MÉTODO=document.getElementById("metod")

CALCULAR.addEventListener('click', () => {
    const PESO=document.getElementById("peso").value

        //validamos que se cargue un dato:
    if (PESO>0){

        ERROR.style.display="none"
        FLUJO.style.display="block"
        MANTENIMIENTO.style.display="block"
        VOLUMEN.style.display="block"
        MÉTODO.style.display="block"
        let flujo = calcflujo(PESO)
        let mantenimiento = flujo/24
        let manMasMan= mantenimiento*1.5
        FLUJO.innerHTML=Math.round(mantenimiento) +" CC/HR"
        MANTENIMIENTO.innerHTML='m+m/2 '+Math.round(manMasMan) +" CC/HR"
        VOLUMEN.innerHTML=flujo+" CC"


    }else{
        ERROR.style.display="block"
        FLUJO.style.display="none"
        MANTENIMIENTO.style.display="none"
        VOLUMEN.style.display="none"
    }
})


function calcflujo(dato){
    let flujo
if (dato<=10){
    return dato*100
  }
  else if (dato>10 && dato<=20){
      flujo=(100*10)+((dato-10))*50;
  
  }
  else if (dato>20 && dato<30){
          flujo= ((dato-20)*20)+(1500);
  }
  else{
    let sc= ((dato*4)+7)/(dato+90)
    flujo=sc * 1500;
  }
  
  return Math.round(flujo)
}

