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
// console.log('37' - 7)
// console.log(37+ '7')

// console.log('1.1' + '1.1')
// console.log((+'1.1')+(+'1.1'))
// let myList=[,'maize',,'beans','rice',,];
// console.log(myList.length);
// var x = new Boolean("try");
// if (x){

//     console.log(x)
// }
// var y = false;
// if (y){
//     console.log(y)
// }


// if (window.location.href.indexOf("localhost") > -1) {
//     alert("you are at local host");
//   }else{
//     var mood =prompt()
//     const website =`https://www.youtube.com/results?search_query=${mood}playlist`;
//     window.location.replace(website);

//   }
// function redirect(){
//   var mood =prompt()
//   const website =`https://www.youtube.com/results?search_query=${mood}playlist`;
// window.location.replace(website);

// }
//  console.log('1')
//  console.log(1)

var quote = ' \" hello there\"'
console.log(quote)
var poem =
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'
console.log(poem)
var poem2 =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.` 
console.log(poem2)