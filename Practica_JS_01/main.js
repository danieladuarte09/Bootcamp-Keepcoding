import { Console } from 'console';
import readline from 'readline'; //modulo de node para pedir datos por consola
import * as functions  from './functions.js ';
    

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function numberFromUser() {
    return new Promise((resolve, reject) => {
      rl.question('Ingresa un numero o presiona 0 para salir:', function(num) {
        rl.pause();
        const parsedNumber = parseInt(num)
        resolve(parsedNumber);
      })
    });
  }



function optiones(result) {


switch (result) {
    case 1:
      functions.tableFormat()
      break;
    case 2:
        functions.studentsLength()
      break;
    case 3:
        functions.StudentsNames()
      break;
    case 4:
        functions.detele_last_item() 
      break;  
    case 5:
        functions.deleteRandomStudent() 
      break;
    case 6:
        functions.onlyGirls()    
      break;  
    
    case 7:
        functions.StudentsNumber()
          
      break; 
      
    case 8:
        functions.areTheygirls()
          
    break;   
  
    case 9:
        functions.studentsAge()
          
      break;
      
    case 10:
      
        functions.addStudent()
    break;  
  
    case 11:
        functions.youngerPerson()
          
      break;
      
    case 12:
        functions.averageAge()
          
      break;  
  
    case 13:
        functions.averageAgeGirls()
          
      break;  
  
    case 14:
        functions.addGrade()
          
      break;    
      
    case 15:
        functions.sortArray()
          
      break;  
     
  
    default:
      rl.close
      break;
  }

}

let userNumber;


do { functions.Requirements()
     userNumber = await numberFromUser();
    optiones( userNumber);

  
} while (  userNumber !== 0 && userNumber <= 18 )








