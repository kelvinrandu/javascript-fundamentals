const greetMe=(name) =>{
    document.write(`hello ${name} `)

}

const student ={
    name:"kelvin",
    age: 23,
    nickname: "rajo",
    indexNumber: "p15/74747/7474"

}

//destructuring 
const { name } = student;

console.log(name)

// var a;
// console.log(a);

// console.log(b);
// var b;
// console.log(c);

// let x;
// console.log(x);

// console.log(y);
// let y;

if (true){
    var y = 5;
}

// console.log(y);

// var myValue = 29

//  function myFunction() {
//     console.log(myValue); // undefined
//     var myValue = 'local value';
//   };
//   myFunction();

// function hoisting
// greetYou();
// function greetYou(){
//     console.log('greeted me')
// }

// greetThem();
// const greetThem=()=>{
//     console.log('greetthem')
// }
console.log('37' - 7)
console.log(37+ '7')

console.log('1.1' + '1.1')
console.log((+'1.1')+(+'1.1'))