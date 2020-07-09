var userinput1 = 5;
var userinput2 = 10;
userinput1 = userinput1 + userinput2; //15 + 10 = 15
userinput2 = userinput1 - userinput2; //15 - 10 =  5
userinput1 = userinput1 - userinput2; //15 - 5 = 10

console.log (userinput1);
console.log (userinput2);

document.getElementById("output").innerHTML= userinput1+ " and "+userinput2;