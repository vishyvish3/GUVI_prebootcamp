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
friends[0] = "Mr.AAK chandran";
friends[1] = "Mr.CaptianAmerica";
friends[2] = "Mr.ET";
friends[3] = "Mr.Gabbar";
friends[4] = "Mr.Jeff";
friends[5] = "Mr.Jeff";
friends[6] = "Mr.Mari";
friends[7] = "Ms.MaryJane";
friends[8] = "Mr.Mass";
friends[9] = "Mr.Munnabai";
friends[10] = "Mr.Rajinikanth";
friends[11] = "Mr.Spiderman";
friends[12] = "Mr.Jack";
console.log(friends);
document.getElementById("output").innerHTML= friends;