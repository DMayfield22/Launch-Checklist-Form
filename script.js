// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
   
window.addEventListener("load", function(){
   console.log("Page Loaded");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      console.log("it was fetched");
      response.json().then(function(json){
         console.log(json);
         let missionTarget = document.getElementById('missionTarget');
         let i = Math.floor(Math.random()*json.length);


         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">`;
      });
   });
      
     
      




   let submit= document.getElementById('launchForm');
   
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name='copilotName']");
   let fuel = document.querySelector("input[name='fuelLevel']");
   let cargo = document.querySelector("input[name='cargoMass']");
   
   let pilotStatus = document.getElementById('pilotStatus')
   let copilotStatus = document.getElementById('copilotStatus')
   let fuelStatus = document.getElementById('fuelStatus')
   let cargoStatus = document.getElementById('cargoStatus')
   let launchStatus = document.getElementById("launchStatus")
   let itemStatus = document.getElementById("itemStatus");

   submit.addEventListener("submit", function(event){
      event.preventDefault();
      console.log("button clicked");
      // console.log('name value--' + pilot.value +'--');
   
      let alert = "";
      if (pilot.value === '' || copilot.value === '' || fuel.value === '' || cargo.value === '' ) {
         alert = "All fields are requierd.";
         window.alert(alert);
      } else if ( !isNaN(Number(pilot.value)) ||  !isNaN(Number(copilot.value)) ) {
         alert = "Pilot and Co-Pilot Names cannot be numbers";
         window.alert(alert);
      } else if (  isNaN(Number(fuel.value)) ||  isNaN(Number(cargo.value)) ) {
         alert = "Fuel level and Cargo Mass must be numerical values";
         window.alert(alert);
      } else {
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready.`;
         copilotStatus.innerHTML = `Co-pilot  ${copilot.value} is ready.`;
         itemStatus.style.visibility = "visible";
         if ( fuel.value < 10000) {
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }else if ( cargo.value > 10000) {
            cargoStatus.innerHTML = "Too much mass for shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            } else {
            cargoStatus.innerHTML ="Mass low enough for shuttle to take off";
            launchStatus.innerHTML = "Ready for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.style.color = "green";  
         }
         // fuel.value < 10000 ? fuelStatus.innerHTML = "Not enough fuel for the journey" : fuelStatus.innerHTML = "Fuel level high enough for launch";
         // cargo.value > 10001 ? cargoStatus.innerHTML = "Too much mass for the shuttle to take off" : cargoStatus.innerHTML = "Cargo mass low enough for launch";
         // fuel.value < 10000 || cargo.value > 10000 ? launchStatus.innerHTML = "Shuttle not ready for launch" : launchStatus.innerHTML = "Shuttle is ready for launch";
         // fuel.value < 10000 || cargo.value > 10000 ? launchStatus.style.color = "red" : launchStatus.style.color = "green";
         // fuel.value < 10000 || cargo.value > 10000 ? itemStatus.style.visibility = 'visible' : itemStatus.style.visibility;
      }
   });

});