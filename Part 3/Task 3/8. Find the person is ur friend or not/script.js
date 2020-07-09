const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {
if(input[i]== name)
{
	return input[i]+" is there in the friend list";
	break;
}

}
}

let found = dataHandling(friends,"Jeff");

console.log(found);

document.getElementById("output").innerHTML= found;
