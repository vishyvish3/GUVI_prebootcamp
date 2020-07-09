const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
var sum = 0;
var count = 0;
for(i=0; i < friendsInfo.length; i++)
{
	if(typeof friendsInfo[i] === 'number')
	{
		sum += friendsInfo[i];
		count++;
	}
}
var average = sum / count;
console.log("Average of only numbers in the array: "+average);

document.getElementById("output").innerHTML= "Average of only numbers in the array: "+average;