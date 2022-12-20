//Seleccion de etiquetas
const IncomeInput= document.querySelector("#incomeInput")
const ConceptInput= document.querySelector("#conceptInput")
const AddTransaction = document.querySelector('#button1')
const HistorialTransaction = document.querySelector("#historialTransaction")
const Incomes = document.querySelector("#ingreso")
const Expenses = document.querySelector("#gasto") 
const Saves= document.querySelector("#Ahorro-total")
const getInfoFromElement = document.querySelector("#GetInfo")
ArrayTransactions = [];


getInfoFromElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let transactions = {
        concept: ConceptInput.value, 
        income:  IncomeInput.value,
        id : Math.floor(Math.random() * 1000)

    };

    ArrayTransactions.push(transactions)

    console.log(transactions)

    ConceptInput.value = "";
    IncomeInput.value = "";

    drawHistorial(ArrayTransactions)
    drawIncomesAndExpenses(ArrayTransactions)
    drawSaves(ArrayTransactions)
    
    
})

//Pintar en pantalla el historial de gastos
//por cada uno de los historiales, pinto en pantalla los datos

function drawHistorial(transactions){
   
    HistorialTransaction.innerHTML=""   //Limpio el historial
    transactions.forEach(element => {
        const historialElement = document.createElement("article")
        historialElement.setAttribute("id", element.id)
        historialElement.innerHTML=` 
        <p>Concepto: ${element.concept} </p> 
        <p>Ingreso: ${element.income} </p>
        <button onclick="remove(${element.id}, ${transactions.id},  ${Saves.id}, ${Incomes.id}, ${Expenses.id}  )">Borrar</button>  
        `;
        HistorialTransaction.appendChild(historialElement)
        
        
    });
    

}

function drawIncomesAndExpenses(transactions){
    //Limpio el historial
    Incomes.innerHTML=""
    Expenses.innerHTML=""
    transactions.forEach(element => {
        
        if (element.income > 0 ){ 
        const Income = document.createElement("article")
        Income.setAttribute("id", element.id)
        console.log('este es el income:',Income)
        Income.innerHTML=` 
        <p>${element.income} </p>
        `;
        Incomes.appendChild(Income)
        } else {
            console.log("es menor de 0")
            const Expense = document.createElement("article")
            Expense.setAttribute("id", element.id)
            Expense.innerHTML=`
            <p>${element.income} </p>
            `;
            Expenses.appendChild(Expense)
        }
    });

}

function drawSaves(transactions){
    let saves = [] ;
    //Saves --->Ahorro total 
    transactions.forEach(element => {
    
    saves.push(parseInt(element.income))
    
    sumaReducida= saves.reduce((a,b)=> a+b);
    console.log(saves)
    console.log('estos son los ahorros :',sumaReducida)
    Saves.setAttribute("id", element.id)
    Saves.innerText = `${sumaReducida}`
    

    })
}

function remove(id){
    console.log(id)
    const deleteConfirmation = window.confirm('¿Quieres eliminar la transacción?')
    

    if(deleteConfirmation) {
        const conceptSelected = document.getElementById(id);
        conceptSelected.remove() ;
        removeFromArray(id);
        console.log(conceptSelected)

    }

}


function removeFromArray(transaction, id){
    for (let i = 0; i < transaction.length; i++) {
        if(transaction[i].id == id) {
            transaction.splice(i,1);
            break;
        }
    }
    

}

