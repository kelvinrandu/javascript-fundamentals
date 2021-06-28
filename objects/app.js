// javascript objects

let student = new Object();
student = {
    firstName: "kelvin", 
    lastName: "Randu", 
    indexNumber: 994949 ,
    age: 23,
    studentInfo: function(){
        return 'first  name :'+ this.firstName + '\n'+ 'last name :' +this.lastName
    }
};
console.log(student);
console.log(student.firstName);
student.firstName = "muchacho";

console.log(student.studentInfo());
