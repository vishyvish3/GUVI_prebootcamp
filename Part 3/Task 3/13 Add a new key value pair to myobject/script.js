myobject = {1:"one","11":1,"name":"arun"};
myobject["ten"] = "ten";
console.log(myobject);
document.getElementById("output").innerHTML= JSON.stringify(myobject);