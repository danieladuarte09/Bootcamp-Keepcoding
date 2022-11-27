
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

export function bestGrades() {  
    let myArray
    let average;
    let size
    let total
    
    for (let i = 0; i<students.length; i++) {
        myArray =[] ;
        myArray.push(students[i].examScores )
        console.log(myArray)
    }
    for (let i = 0; i<students.length; i++) {
    size =myArray.length //tamaño del array 
    total = myArray.reduce((a, b) => a + b, 0);
    
    } 
    console.log(total)
    console.log(size)
   
    //return console.log("La edad media de los alumnos es:", average)
    
    
  }
  
  bestGrades()