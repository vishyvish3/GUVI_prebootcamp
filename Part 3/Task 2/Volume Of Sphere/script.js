var radius = 4;

var result = 1.3333 * 3.141592653589793238 * radius * radius *radius;
console.log("Volume of sphere: "+result.toFixed(2));
document.getElementById("output").innerHTML= "Volume of sphere: "+result.toFixed(2);