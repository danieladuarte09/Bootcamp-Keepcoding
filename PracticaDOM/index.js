//selecciono el botón
const buttonElement = document.querySelector("#button1");
const gastos= document.querySelector("#gasto")
const ingresos = document.querySelector("#total-ingreso")
const inputElement = document.querySelector('#ingreso')
const inputConceptElement = document.querySelector('#Concepto')
const Ahorros = document.querySelector('#Ahorro-total')
const max = 1000
let savesAmount 
let incomeAmount
let expensesAmount = 0




let ArrayIngresos =[];

//Al presionar el botón...
buttonElement.addEventListener("click", () => {
    // accedemos al DOM para buscar el input
  

  //guardamos el valor en una variable en localstorage
  localStorage.setItem("Alamacenado1", inputElement.value);
  localStorage.setItem("Alamacenado2", inputConceptElement.value);
  console.log(inputElement.value);
  console.log(inputConceptElement.value);


    //añadirle los valores del input al array en forma de objeto  
       
    let transactions =  {
    concepto:inputConceptElement.value,
    ingreso:inputElement.value,
    id : Math.floor(Math.random() * max)

    }
    ArrayIngresos.push(transactions)


    const SelectorHistorial1 = document.querySelector(".number");
    SelectorHistorial1.innerHTML = ""; //kimpia historial
    gastos.innerHTML=""; //limpia gastos
    ingresos.innerHTML="";
    Ahorros.innerHTML="";

    // pintamos la información del input en el historial x veces en el Dom
    ArrayIngresos.forEach((element) => {
    // accedemos al DOM para buscar el elemento en el que se quiere pintar en el DOM
                

        let listItemElement = document.createElement("li");//bien 
        listItemElement.setAttribute("id",element.id)

        let Content =  `<p> Concepto: ${element.concepto} </p>
        <p> Ingreso: ${element.ingreso}  </p>
        <button onclick="remove(${element.id}, ${transactions.id} )">Borrar</button>  `;

       //Para que se borre lo acumulado
        Content.innerHTML= " ";
     
        listItemElement.innerHTML = Content
        SelectorHistorial1.appendChild(listItemElement);//bien
    
        
    
        if ( element.ingreso < 0 ) { 
            let gastoElement = document.createElement("li");
            gastoElement.textContent =  `    ${element.ingreso}  `;
            gastos.appendChild(gastoElement)
            //accum = parseInt(element.ingreso )
            
            
    
            }   else {
            let ingresoElement = document.createElement("p")
            ingresoElement.innerText =  `${element.ingreso}`;
            ingresos.appendChild(ingresoElement)

            

        }

        pintarAhorros(element.ingreso)
       
        
        
             //para que el input quede vacio  
        inputElement.value= "";
        inputConceptElement.value = "";
    

    }) //CIERRE DE ITERACION ARRAY

    
    

    } )//CIERRE EVENTO DE BOTÓN 
    
        
        console.log(ArrayIngresos)

        function pintarAhorros(transaccion){

            let Ahorro =[]

            
            
            if (transaccion > 0){
                let AhorroElement = document.createElement("li")
                AhorroElement.innerText = `${transaccion} `;
                Ahorros.appendChild(AhorroElement)
            }  else{
                resta = transaccion - parseInt(transaccion)
                AhorroElement.innerText = `${resta} ` ;
                
            }
               
            
        
        }


function remove(id){
    console.log(id)
    const deleteConfirmation = window.confirm('¿Quieres eliminar la transacción?')
    console.log(ArrayIngresos)

    if(deleteConfirmation) {
        
        const conceptSelected = document.getElementById(id);
        
        conceptSelected.remove() ;
        removeFromArray(id);
        console.log(conceptSelected)

    }

}


function removeFromArray(id){
    for (let i = 0; i < ArrayIngresos.length; i++) {
        if(ArrayIngresos[i].id == id) {
            ArrayIngresos.splice(i,1);
            break;
        }
    }
    

}

/* Sé que la práctica esta no apta, 
 aún así prefiero entregar lo que he ido haciendo que no entregar nada.
 Le he puesto mi esfuerzo, y conocimientos sin copiar.. 
 Por motivos personales no tuve la concentración necesaria para seguir el ejercicio como debía.
 Seguiré practicando es la única opción para mejorar todos estos errores
 Y no defraudarme a mí misma*/

 /*Gracias por tu tiempo Edu*/







 