//conditions in javascript

let age = 45;

if ((age >=18) && (age <= 35)){
    console.log('my target');
}else{
    console.log('not my target');
}

//switch statements
// weeekend and weekday
switch (6) {
    case 5:
        
        text ='weekend';
        break;
    case 6:
        
        text='weekend';
        break;

    case 7:
        text='weekend'
        break;

    default:
        text="weekday";
}
console.log(text)

// looping with labels

document.write("Entering the loop!<br /> ");
outerloop:        // label name         
for (var i = 0; i < 5; i++) {
   document.write("Outerloop: " + i + "<br />");
   innerloop:
   for (var j = 0; j < 5; j++) {
      if (j > 4 ) break ;           // Quit the innermost loop
      if (i == 2) break innerloop;  // Do the same thing
      if (i == 4) break outerloop;  // Quit the outer loop
      document.write("Innerloop: " + j + " <br />");
   }
}        
document.write("Exiting the loop!<br /> ");