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
var first = 0;
var middle = friends.length / 2;
var end = friends.length-1;
console.log(friends[first]);
console.log(friends[middle]);
console.log(friends[end]);


document.getElementById("output").innerHTML= "First: "+friends[first]+"<br> Middle: "+friends[middle]+"<br> Last: "+friends[end];