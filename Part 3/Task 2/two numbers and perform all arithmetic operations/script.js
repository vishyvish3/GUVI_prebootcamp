var num1= 10;
var num2 = 3;
var addition = num1 + num2;
var subtraction = num1 - num2
var multiplication = num1 * num2;
var division = num1 / num2;
var reminder = num1 % num2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(reminder);


document.getElementById("output").innerHTML= "Addition: " +addition+"<br> Subtraction: "+subtraction+"<br> Multiplication: "+multiplication+"<br>Division: "+division+"<br>Modulo: "+reminder;