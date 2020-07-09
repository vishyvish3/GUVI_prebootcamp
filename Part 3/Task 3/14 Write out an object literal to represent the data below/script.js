var myobject = [{
	Name:"Guvi", 
	Type:"Geek", 
	Num:6,
	Building:"IIT-M RP",
	City:"Chennai"
},
{
	Name:"Amazon",
	Type:"Inc",
	Num: 31,
	Building:"SP Infocity",
	City:"Chennai"
}];
console.log(myobject);
document.getElementById("output").innerHTML= JSON.stringify(myobject);