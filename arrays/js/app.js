let fruits = ['apple','mango','watermelon','banana'];

let  foods =['chicken','pilau','rice','beans']

// array methods
// fruits.map((fruit)=>{
//     console.log(fruit);
// }
// )

console.log(fruits.pop(),fruits)
console.log(fruits.push('carrot'),fruits)
console.log(fruits.push('dhania'),fruits)
console.log(fruits.pop(),fruits)
console.log(fruits.toString())
console.log(fruits.shift(),fruits)
console.log(fruits.unshift('dhania'),fruits)

// combine two arrays
console.log(fruits.concat(foods))

//slice arrays
let mixture = fruits.concat(foods)
console.log(mixture.slice(1,4))

//array reversal
console.log(mixture.reverse())

// sort arrays
let numbers = [74,5,6,7,33,55,0,3,35,15] 
console.log(numbers.sort(function(a,b){
    return a-b
}))

let newArray = new Array();
for (let i =0; i<20; i++){
    newArray.push(i)
}
console.log(newArray)

