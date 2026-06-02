// Mission variables for this simulation
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

// Connect to the mission status area on the page
const missionStatus = document.querySelector("#missionStatus");
// Decide mission status based on priority rules

// 1. Critical failure
if (health < 30 && enemyNearby === true) {
    missionStatus.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}
// 2. Low resources
else if (ammo < 5 || shield === false) {
    missionStatus.textContent = "Warning: Low Resources";
}
// 3. Mid mission
else if (missionProgress >= 1 && missionProgress <= 70) {
    missionStatus.textContent = "Mission In Progress";
}
// 4. High progress
else if (missionProgress > 70 && enemyNearby === false) {
    missionStatus.textContent = "Approaching Mission Completion";
}
// 5. Mission complete
else if (missionProgress === 100) {
    missionStatus.textContent = "Mission Complete Successfully";
}
// 6. Default
else {
    missionStatus.textContent = "System Stable";
}

