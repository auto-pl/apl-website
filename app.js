'use strict';

let listOfPaths = document.getElementsByTagName('path');
let baseOwnership = [];
let ownershipColorsCSS = 
	[
		getComputedStyle(document.documentElement).getPropertyValue('--COLOR-FG-CAPPED-NULL'),
		getComputedStyle(document.documentElement).getPropertyValue('--COLOR-FG-CAPPED-NC'),
		getComputedStyle(document.documentElement).getPropertyValue('--COLOR-FG-CAPPED-TR'),
		getComputedStyle(document.documentElement).getPropertyValue('--COLOR-FG-CAPPED-VS'),
	]

for(let i=0;i<listOfPaths.length; i++)
{
	baseOwnership[listOfPaths[i].id] = 0
	console.log(listOfPaths[i].id);
	document.getElementById(listOfPaths[i].id).addEventListener("click", switchOwnership(this.id));
}

function switchOwnership(id)
{
	console.log("Switched Ownership");
	if(baseOwnership[id] == 0)
	{
		baseOwnership[id] = 1;
		document.getElementById(id).style.fill = ownershipColorsCSS[1];
	}
	else if(baseOwnership[id] == 1)
	{
		baseOwnership[id] = 2;
		document.getElementById(id).style.fill = ownershipColorsCSS[2];
	}
	else if(baseOwnership[id] == 2)
	{
		baseOwnership[id] = 3;
		document.getElementById(id).style.fill = ownershipColorsCSS[3];
	}
	else if(baseOwnership[id] == 3)
	{
		baseOwnership[id] = 0;
		document.getElementById(id).style.fill = ownershipColorsCSS[0];
	}
}

