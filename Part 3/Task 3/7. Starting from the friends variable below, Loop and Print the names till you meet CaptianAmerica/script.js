const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

var output = [];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
if(input[i]=="CaptianAmerica")
{
break;
}
console.log(input[i]);	
output.push(input[i]);
}
}

dataHandling(friends);
console.log(friends);
document.getElementById("output").innerHTML= output;
