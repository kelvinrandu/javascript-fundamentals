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

// var quote = ' \" hello there\"'
// console.log(quote)
// var poem =
// 'Roses are red,\n\
// Violets are blue.\n\
// Sugar is sweet,\n\
// and so is foo.'
// console.log(poem)
// var poem2 =
// `Roses are red,
// Violets are blue.
// Sugar is sweet,
// and so is foo.` 
// console.log(poem2)

// let fruit = 'pineaple'

// switch(fruit){

//     case 'banana':
//         console.log('your fuit is banana')
//         break;
//     case 'pineaple':
//         console.log('your fuit is pineapple')
//         break;
//     case 'mango':
//         console.log('your fuit is mango')
//         break;
//     case 'oranges':
//         console.log('your fuit is oranges')
//         break;
//     default:
//         console.log(`sorry we are out of ${fruit}`)
// }

// function getMonthName(){
//     mo = prompt('enter month name');
//     mo = mo -1;
//     let months = ['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
//     if (months[mo]){
//         return months[mo]
//     }else{
//         throw 'error';
//     }



// }
// try { // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
//   }
//   catch (e) {
//     monthName = 'unknown';
//     logMyErrors(e); // pass exception object to error handler (i.e. your own function)
//   }

//   function logMyErrors(e){
//       console.log(e);
//   }
// function getMonthName2(mo){
//     mo = mo -1;

//     return 
//     mo;

// }

// console.log(getMonthName(13));
// console.log(getMonthName2(12));

// function hello(name){
//     return `hello ${name}`
// }
// console.log(hello('bob','james'));
// console.log(hello('james'));
// console.log(hello('amos'));

    window.onresize = function(){
        var size = window.innerWidth
        if  (size <= 400){
            console.log('mobile');
            window.document.getElementById('main').innerHTML= 'mobile';
        }else if (size <= 700){
            console.log('tab');
            window.document.getElementById('main').innerHTML= 'tab';

        }else{
            console.log('desktop');
            window.document.getElementById('main').innerHTML= 'desktop';
        }


        }
  