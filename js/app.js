console.log('global vs block scope')

let greeting ='hello from global ';
const greet=()=>{
    let greeting='hello from block';

 return greeting
}
console.log(greet())
console.log(greeting)


/*  operators */
document.write('operators')
let a= 30;
let b= 30;

b--;
a++;

var linebreak = "</br>";
document.write(linebreak)
document.write(a)
document.write(linebreak)
document.write(b)
 
//addition
document.write(linebreak)
let result = a+b;
document.write(result)

//subtraction
document.write(linebreak)
result = a-b;
document.write(result)

//multiplication
document.write(linebreak)
result = a*b;
document.write(result)

//division
document.write(linebreak)
result = a/b;
document.write(result)

//modulus
document.write(linebreak)
result = a%b;
document.write(result)
document.write(linebreak);

/*  comparison operators */
 
document.write("comparison operators ");
      
document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);
         
document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);
         
document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);
         
document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);
         
document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);
document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);

/*  logical operators */
document.write("logical operators");
document.write(linebreak);
document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak); 


/* bitwise operator */
document.write("bitwise operator");

document.write("(a & b) => ");            
result = (a & b);           
document.write(result);
document.write(linebreak);
document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);
document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);
         
document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);
         
document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);
         
document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);