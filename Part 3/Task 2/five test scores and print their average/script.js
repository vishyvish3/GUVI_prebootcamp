var userinput = [10,20,30,40,50];
sum= 0;
for(i=0; i<= userinput.length-1; i++)
{
	sum += userinput[i];
}
var result = sum / userinput.length;
console.log(result);
console.log("Test Score Average: "+result);

document.getElementById("output").innerHTML= "Test Score Average: "+result;