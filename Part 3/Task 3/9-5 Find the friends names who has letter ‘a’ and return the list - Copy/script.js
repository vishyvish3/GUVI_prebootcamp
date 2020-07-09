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
var str = friends[i];
 if(str.includes("a"))
 {
	 containsarr.push(friends[i]);
 }
}


console.log(containsarr.join(","));
document.getElementById("output").innerHTML= containsarr.join(",");