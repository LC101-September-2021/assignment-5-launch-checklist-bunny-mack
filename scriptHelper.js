const { ConsoleReporter } = require('jasmine');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        event.preventDefault();
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid entry");
        event.preventDefault();
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Invalid entry");
        event.preventDefault();
    }
    
    let ol = list.getElementsByTagName("LI");
    ol[0].innerHTML = `Pilot ${document.elements.pilotName.value} is ready.`
    ol[0].style.visibility = "visible";

    ol[1].innerHTML = `Copilot ${document.elements.copilotName.value} is ready.`
    ol[1].style.visibility = "visible";

    if (fuelLevel < 10000) {
        ol[2].innerHTML = "Fuel level is too low for launch."
        ol[2].style.color = "red";
        ol[2].style.visibility = "visible";
    } else {
        ol[2].innerHTML = "Fuel level is high enough for launch."
        ol[2].style.visibility = "visible";
    }

    if (cargoLevel > 10000) {
        ol[3].innerHTML = "Cargo mass too high for launch."
        ol[3].style.color = "red";
        ol[3].style.visibility = "visible";
    } else {
        ol[3].innerHTML = "Cargo mass is low enough for launch."
        ol[3].style.visibility = "visible";
    }

    let update = list.getElementsByTagName("h2");

    if (fuelLevel > 10000 && cargoLevel < 10000) {
        update[0].style.color = "green";
        update[0].innerHTML = "Shuttle is ready for launch"
    } else {
        update[0].style.color = "red";
        update[0].innerHTML = "Shuttle not ready for launch"
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
