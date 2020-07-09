 var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"];
	  
for(i=0; i<=strArray.length-1; i++)
{
	if(strArray[i] == undefined)
	{
		console.log("This index is empty !!");
		continue;
	}
	console.log(strArray[i]);
}	
