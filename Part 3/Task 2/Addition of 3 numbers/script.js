var userinput = [];
userinput[0] = 5;
userinput[1] = 10;
userinput[2] = 10;

var sum = 0;

for(i=0; i<= userinput.length-1; i++)
{
	sum += userinput[i];
}
console.log(sum);

document.getElementById("output").innerHTML= "Addition of 3 numbers: "+sum;