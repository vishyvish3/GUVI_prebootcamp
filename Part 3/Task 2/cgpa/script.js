var tamil=55;
var english =50;
var maths=70;
var social=60;
var science=66;
 
var percent=(tamil+english+maths+social+science)/5;
var total= percent/10;
var CGPA = total.toFixed(2);


console.log(CGPA);

document.getElementById("output").innerHTML= "CGPA: "+CGPA;