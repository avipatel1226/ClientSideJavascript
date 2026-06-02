// Mission variables for this simulation
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

// Connect to the mission status area on the page
const missionStatus = document.querySelector("#missionStatus");

// Temporary message just to confirm everything is wired up
missionStatus.textContent = "Mission system online.";
