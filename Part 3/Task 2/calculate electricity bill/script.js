var perhour = 100;
var unitcost  = 10;
var consumption = perhour * 24 * 30;
var totalunits = consumption / 1000;
var bill = totalunits * unitcost
console.log("Total energy bill of consumer: "+bill.toFixed(2));

document.getElementById("output").innerHTML= "Total energy bill of consumer: "+bill.toFixed(2);