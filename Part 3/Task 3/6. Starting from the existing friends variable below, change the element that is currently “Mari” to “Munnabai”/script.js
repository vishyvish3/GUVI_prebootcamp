let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
if(input[i]== "Mari")
{
	friends[i] = "Munnabai";
	break;
}

}
}
dataHandling(friends);
console.log(friends);
document.getElementById("output").innerHTML= friends;
