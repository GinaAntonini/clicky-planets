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
var getPlanetsButton = document.getElementById('showButton'); //create a variable for button that will show the planetBox
var inputField= document.getElementById('searchText'); //
var clearInputField = document.getElementById('clearButton'); //create a variable for the button that will clear the input field

function domString(planetz) { //we need to create function that loops through the planet array & prints the planet names and picture links to the dom
	var planetString = '';
	for(var i=0; i<planetz.length; i++){
		var newPlanet = "";
		newPlanet+=`<div class="planetBox" id="planetBox-${i}">`; //we have to use += so that each time the loop runs through we are not overriding the previous string
		newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>` //use these little ticks so that you don't have to use the plus sandwich
		newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`; //$ makes what's inside the brackets a variable
		newPlanet+= `</div>`;
		planetString += newPlanet;
	}
	writeToDom(planetString);
	// console.log("planetString", planetString);
}

function writeToDom(strang){
	planetHolderDiv.innerHTML = strang;
}

getPlanetsButton.addEventListener('mouseenter',function(){
	domString(planets);
}) //when the mouse enters the element, show the domString...we are using an anonymous function here
//addEventListener(what event, what action happens when you do the event)

//you could also create a function that you can use in place of the anonymous function
// function doIt(){
// 	domString();
// }
//in this case you would do:
//getPlanetsButton.addEventListener('mouseenter', doIt){
// domString();
// }

//clear button
clearInputField.addEventListener('click', function(){
	inputField.value="";
	writeToDom('');
})

function showMe(e) {
	e.target.previousSibling.classList.remove('hidden');
}

document.body.addEventListener('click', function(event){
	// console.log("click event", event.target.parentNode.parentNode.parentNode); //always put a string so that you can identify which event you are doing
	if (event.target.className === 'planetImage') {
		console.log("yaaaaaaa!");
		showMe(event);
	}
})

//look in console, then target, then find the class you are looking for

//make the search bar work to take letters that will show appropriate planets
inputField.addEventListener('keypress', function(event){
	console.log("event", event);
	if(event.key === 'Enter'){
		var txt = inputField.value;
		//1. filter planets array
		var results = planets.filter(function(thing){
			console.log("filter thing", thing);
			return thing.name.indexOf(txt)>-1;
		})
		domString(results);
	}
})


















