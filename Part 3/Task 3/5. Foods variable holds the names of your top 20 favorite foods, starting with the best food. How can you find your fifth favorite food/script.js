let foods=["biryani","shawarma","tandoori","chicken lollipop","chicken 65","haryali chicken","grill chicken","chicken noodles","chicken rice","chicken samosa","veg sandwich","masala dosa","prawn tikka","chola puri","pani poori","masala poori","gobi 65","schezwan noodles","maggie noodles","sambar vada"]
var index = foods.lastIndexOf(foods.slice(-1)[0])+1;
console.log("Fifth favourite food: "+ foods[5-1]);
console.log("Number of elements in the array: "+index);
document.getElementById("output").innerHTML= "Fifth favourite food: "+ foods[5-1]+"<br>Number of elements in the array: "+index;
