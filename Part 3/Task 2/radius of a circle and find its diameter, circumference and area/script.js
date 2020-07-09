var radius = 6;
var diameter = 2 * radius;
var circumference = 2 * 3.141592653589793238 * radius;
var area =  3.141592653589793238 * radius * radius;
console.log("Diameter of circle: "+diameter);
console.log("circumference of circle: "+ circumference.toFixed(2));
console.log("area of circle: "+ area.toFixed(2));


document.getElementById("output").innerHTML= "Diameter of circle: "+diameter +"<br> Circumference of circle: "+ circumference.toFixed(2)+"<br> Area of circle: "+ area.toFixed(2);