var actualcost = 190;
var soldcost  = 120;
var discount = actualcost - soldcost;
var discountpercentage = (discount/actualcost)*100
console.log("Discount: "+discount);
console.log("Discount percentage: "+discountpercentage.toFixed(2)+"%");


document.getElementById("output").innerHTML= "Discount: "+discount+"<br>Discount percentage: "+discountpercentage.toFixed(2)+"%";