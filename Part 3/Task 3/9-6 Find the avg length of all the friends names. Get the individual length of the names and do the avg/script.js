var friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

function dataHandling(friends1, friends2){
var friends = friends1.concat(friends2);
friends.sort();
return friends;
}

friends = dataHandling(friends1, friends2);
/* var containsarr = []; */
var sum = 0;
for(i=0; i<friends.length; i++)
{
/* 	containsarr.push(friends[i].length); */
	sum +=  friends[i].length;
}
var average = sum / friends.length;
console.log("Average length of the friend's names: "+average.toFixed(0));

document.getElementById("output").innerHTML= "Average length of the friend's names: "+average.toFixed(0);