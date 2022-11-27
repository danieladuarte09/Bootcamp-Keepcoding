/*DATA */ 

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  const availableAges = ['32', '24', '41', '37', '34', '46', '50']

const students = [{
    age: 32,
    examScores: [9,6],
    gender: 'male',
    name: 'Edu'
  },
  {
    age: 23,
    examScores: [7,8],
    gender: 'female',
    name: 'Silvia'
  },

  {
    age: 24,
    examScores: [6,10],
    gender: 'female',
    name: 'Ana'
  },

  {
    age: 29,
    examScores: [5,7],
    gender: 'male',
    name: 'Gaby'
  },
  {
    age: 20,
    examScores: [6,8],
    gender: 'male',
    name: 'Jose'
  }


]

/* FUNCIONES DEL PROGRAMA */  

export function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}


//Cuando ejecutemos la aplicación, aparecerá el listado completo de requisitos. 

export function Requirements(){  
    let list = [  
        "1- Mostrar en formato de tabla todos los alumnos",  
 "2- Mostrar por consola la cantidad de alumnos que hay en clase",
 "3- Mostrar por consola todos los nombres de los alumnos",
 "4- Eliminar el último alumno de la clase",
 "5- Eliminar un alumno aleatoriamente de la clase",
 "6- Mostrar por consola todos los datos de los alumnos que son chicas",
 "7- Mostrar por consola el número de chicos y chicas que hay en la clase",
 "8- Mostrar true o false por consola si todos los alumnos de la clase son chicas",
 "9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años",
 "10- Añadir un alumno nuevo con los siguientes datos",
 "11- Mostrar por consola el nombre de la persona más joven de la clase",
 "12- Mostrar por consola la edad media de todos los alumnos de la clase",
 "13- Mostrar por consola la edad media de las chicas de la clase",
 "14- Añadir nueva nota a los alumnos",
 "15- Ordenar el array de alumnos alfabéticamente según su nombre"
        
    ]
 

 return console.log (list)

}


//1- Mostrar en formato de tabla todos los alumnos.

export function tableFormat() { 
    console.table(students)
    }
    
    
//2- MOSTRAR POR CONSOLA LA CANTIDAD DE ALUMNOS QUE HAY EN LA CLASE
    
export function studentsLength() { 
    return  console.log('La cantidad de los alumnos es:',students.length)
}
    
    
//3- Mostrar por consola todos los nombres de los alumnos.
    
export function StudentsNames(){  
    for (let x= 0 ; x < students.length; x++) {
    console.log('Nombre de los alumnos:',students[x].name)
    }
}
    
    
    
    
//4- Eliminar el último alumno de la clase.
    
export function detele_last_item() {
    let detele_last_item = students.pop()
    console.table(students)
    return console.log('Alumno eliminado: ',detele_last_item)
      
}
   
    
//5- Eliminar un alumno aleatoriamente de la clase.
    
export function deleteRandomStudent(){
    console.table(students) //TABLA ORIGINAL
    let RandomItem = Math.floor(Math.random()*students.length); //SELECIONO UN ESRUDIANTE RANDOM
    let RandomStudent = students[RandomItem]
    console.log('Alumno Eliminado:',RandomStudent) //TABLA SIN EL ESTUDIANTE ELIMINADO
      
    let element = students.filter(persona => persona !== RandomStudent)//fILTRO DE LA LISTA EL ESTUDIANTE RANDOM
    console.log('Lista de alumnos:',element)
     
}
    
    
    
//6- Mostrar por consola todos los datos de los alumnos que son chicas.
    
export function onlyGirls(){  
    let girls;
return console.log(girls = students.filter( person => person.gender === "female"))
}
    
    
//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
    
export function StudentsNumber(){  
    let girlsNumbs = students.filter( person => person.gender === "female")
    let female = girlsNumbs.length
    let BoysNumbs = students.filter( person => person.gender === "male")
    let male = BoysNumbs.length
    
    console.log('Hay', female, 'chicas')
    console.log('Hay', male ,'chicos')
}
    
    
// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas'
export function areTheygirls() {
    let girls= students.filter( person => person.gender === "female")
    return console.log(students === girls)
}
    
//9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años"

export function studentsAge() {   
    let newAge = [];
    for (let i = 0; i<students.length; i++) {
      let currentNumber = students[i].age;
      let newAge= [];
      let newAgeNames= [];
      if (currentNumber >= 20 && currentNumber <= 25) {
        newAgeNames= students[i].name
        newAge.push(currentNumber)
        
        console.log(newAge)
        console.log(newAgeNames)
      }
    }
    
}
   
    
/*"10- Añadir un alumno nuevo con los siguientes datos",*/

export function addStudent() {
    console.table(students)
    students.push(
         {
            age: 29,
            examScores: [],
            gender: 'male',
            name: 'Victor'
          })
          console.log ('Lista de alumnos actualizada:',students)
         
    }

    
    
//11- Mostrar por consola el nombre de la persona más joven de la clase"
    
export function youngerPerson() {
    let myArray = [];  
    let myArray2 = [];
    for (let i = 0; i<students.length; i++) {
    myArray.push(students[i].age ) //CREO UN ARRAY DE EDADES 
    myArray2.push(students[i].name)
    
    }
    let min = Math.min(...myArray) // SACO LA EDAD MINIMA 
    let mininAgePerson;
      for (let i = 0; i<students.length; i++) {
          if (students[i].age === min ){
               mininAgePerson = students[i].name
          }   
      }
      console.log('El alumno más joven de clase es:  ',mininAgePerson);
}
    
     
    
// 12- Mostrar por consola la edad media de todos los alumnos de la clase"
    
export function averageAge() {  
    let myArray = [];
    for (let i = 0; i<students.length; i++) {
        myArray.push(students[i].age )
    }
    let size =myArray.length //tamaño del array 
    let total = myArray.reduce((a, b) => a + b, 0);
    let average = total / size 
    
    
    return console.log("La edad media de los alumnos es:", average)
    
}
    
//"13- Mostrar por consola la edad media de las chicas de la clase"
    
export function averageAgeGirls() {  
    let myArray= [];
    let girls = students.filter(persona => persona.gender === 'female')//FILTRO A LAS CHICAS
        for (let i = 0; i<girls.length; i++) {
            myArray.push(girls[i].age )
        }
        
    let size =myArray.length //tamaño del array 
    let total = myArray.reduce((a, b) => a + b, 0);
    let average = total / size 
    
    return console.log("La edad media de las alumnas de la clase es:", average)
    
    }
    
//"14- Añadir nueva nota a los alumnos"
export function addGrade() {  
     
    for (let i = 0; i<students.length; i++) {
      let notaAñadida =  calculateRandomNumber(1, 10) //Nota al azar 
      students[i].examScores = notaAñadida
    }
      return console.log(students)
}
    
    
// "15- Ordenar el array de alumnos alfabéticamente según su nombre"
    
export function sortArray() { 
    
    students.sort((a,b )=> { if  (a.name > b.name) {
    return 1;
    }
      if (a.name < b.name) {
        return -1;
      }
      
      return 0;
      }
      )
      
      return console.log(students);
    
}

// 16- Mostrar por consola el alumno de la clase con las mejores notas.
/*El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.*/

