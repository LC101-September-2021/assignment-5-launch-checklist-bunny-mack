// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("form").elements.pilotName.value;
         //let list = document.querySelector("#faultyItems");
         let list = document.querySelector("#launchStatusCheck");
         let copilotName = document.querySelector("form").elements.copilotName.value;
         let fuelLevel = document.querySelector("form").elements.fuelLevel.value;
         let cargoMass = document.querySelector("form").elements.cargoMass.value;
         
    formSubmission(form, list, pilotName, copilotName, fuelLevel, cargoMass);
    event.preventDefault();
    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let finalPlanet = pickPlanet(listedPlanets);

       addDestinationInfo(document, finalPlanet.name, finalPlanet.diameter, finalPlanet.star, finalPlanet.distance, finalPlanet.moons, finalPlanet.image);
   })
   
});