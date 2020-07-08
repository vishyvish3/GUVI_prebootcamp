var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 11-1; i >= 0; i--) //decrement i by one when initialzing to match the last index of the array
{
if(i == 0) 
{
new_string += numsArr[i];
}
else
{	
 new_string += numsArr[i] + " ";
}
 
}
console.log(new_string);

document.getElementById("output").innerHTML= new_string;