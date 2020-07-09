var userinputx = 5;
var userinputy = 3;
var result= 1;
for(i=1; i<= userinputy; i++)
{
	result = result * userinputx;
}

console.log(result);
console.log("Result of "+userinputx+"^"+userinputy+": "+result);

document.getElementById("output").innerHTML= "Result of "+userinputx+"^"+userinputy+": "+result;