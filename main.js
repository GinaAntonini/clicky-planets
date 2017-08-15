console.log("is anybody out there?")

var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var planetHolderDiv = document.getElementById('planetHolder'); //where the planets need to be pushed

function domString() { //we need to create function that loops through the planet array & prints the planet names and picture links to the dom
	var planetString = '';
	for(var i=0; i<planets.length; i++){
		var newPlanet = "";
		newPlanet+=`<div class="planetBox" id="planetBox-${i}">`; //we have to use += so that each time the loop runs through we are not overriding the previous string
		newPlanet+=`<div class="planetName">${planets[i].name}</div>` //use these little ticks so that you don't have to use the plus sandwich
		newPlanet+=`<img class="planetImage" src="${planets[i].url}">`; //$ makes what's inside the brackets a variable
		newPlanet+= `</div>`;
		planetString += newPlanet;
	}
	writeToDom(planetString);
	// console.log("planetString", planetString);
}

function writeToDom(strang){
	planetHolderDiv.innerHTML = strang;
}

domString();











