var myarray=[11,22,33,44,55];
var index = myarray.lastIndexOf(myarray.slice(-1)[0])+1;
console.log("Number of elements in the array: "+index);

document.getElementById("output").innerHTML= "Number of elements in the array: "+index;
