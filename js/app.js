console.log('global vs block scope')

let greeting ='hello from global ';
const greet=()=>{
    let greeting='hello from block';

 return greeting
}
console.log(greet())
console.log(greeting)
const greetings = document.write('adddd')