var userinput = [10,20,30,40,50,60,70,80,90,100];
sum= 0;
for(i=0; i<= userinput.length-1; i++)
{
	sum += userinput[i];
}
var result = sum / userinput.length;
console.log(result);
console.log("Batting Average: "+result);

document.getElementById("output").innerHTML= "Batting Average: "+result;