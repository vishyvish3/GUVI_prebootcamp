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
var containsarr = [];

for(i=0; i<friends.length; i++)
{
	containsarr.push(friends[i].length);
	
}
var max1 = containsarr.reduce(function(a, b) {
    return Math.max(a, b);
});
var min1 = containsarr.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log(containsarr);
var maxind = containsarr.indexOf(max1);
console.log("Name with maximum characters: "+ friends[maxind]);
var minind = containsarr.indexOf(min1);
console.log("Name with minimum characters: "+ friends[minind]);


document.getElementById("output").innerHTML= "Name with maximum characters: "+ friends[maxind]+"<br> Name with minimum characters: "+ friends[minind];