var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_even = 0;
var sum_odd = 0;
for (var i = numsArr.length-1; i >=0; i--) {
	
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ; j-- )
 {
	  if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j];
 }
 else
 {
 sum_even += inner_array[j];
 }
    
 }
}

console.log(sum_odd);
console.log(sum_even);
document.getElementById("output").innerHTML= "Sum of even numbers: "+sum_even+" <br> Sum of odd numbers: "+sum_odd;
