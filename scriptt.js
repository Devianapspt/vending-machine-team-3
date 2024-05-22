const dataJSON = [
	{nama: 'Arvin', location: 'Bandung', sold:250},
	{nama: 'Aprilia', location: 'Jakarta', sold:100},
	{nama: 'Devi', location: 'Surabaya', sold:180},
]
for (var i=0;i<dataJSON.length;i++){
	const valueJSON = document.createElement("tr")
	const valName = document.createElement("td")
	valName.innerHTML = dataJSON[i].nama

	const valLocation = document.createElement("td")
	valLocation.innerHTML = dataJSON[i].location

	const valSold = document.createElement("td")
	valSold.innerHTML = dataJSON[i].sold
	
	document.getElementById("valData").appendChild(valueJSON)
	document.getElementById("valData").appendChild(valName)
	document.getElementById("valData").appendChild(valLocation)
	document.getElementById("valData").appendChild(valSold)

}