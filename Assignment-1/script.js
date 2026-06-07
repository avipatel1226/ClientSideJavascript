// Mission option lists 
const agents = [
    "Dhurandhar",
    "Agni Sentinel",
    "Garuda Wing",
    "Vajra Operative",
    "Trinetra Scout"
];

const locations = [
    "Agni Chamber",
    "Garuda Base",
    "Vajra Sector",
    "Trishul Command",
    "Astra Vault"
];

const weapons = [
    "Astra Blade",
    "Vajra Pulse Cannon",
    "Trishul Shock Spear",
    "Garuda Drone Swarm",
    "Agni Plasma Launcher"
];

const objectives = [
    "Rescue Hostage",
    "Retrieve Intel",
    "Neutralize Target",
    "Sabotage Facility"
];

const risks = ["Low", "Medium", "High", "Extreme"];

// Track which option the user is currently on
let agentIndex = 0;
let locationIndex = 0;
let weaponIndex = 0;
let objectiveIndex = 0;
let riskIndex = 0;

// DOM elements
const agentDisplay = document.getElementById("agentDisplay");
const locationDisplay = document.getElementById("locationDisplay");
const weaponDisplay = document.getElementById("weaponDisplay");
const objectiveDisplay = document.getElementById("objectiveDisplay");
const riskDisplay = document.getElementById("riskDisplay");
const missionOutput = document.getElementById("missionOutput");

// Functions to cycle through each category
function cycleAgent() {
    agentIndex = (agentIndex + 1) % agents.length;
    agentDisplay.textContent = agents[agentIndex];
}

function cycleLocation() {
    locationIndex = (locationIndex + 1) % locations.length;
    locationDisplay.textContent = locations[locationIndex];
}

function cycleWeapon() {
    weaponIndex = (weaponIndex + 1) % weapons.length;
    weaponDisplay.textContent = weapons[weaponIndex];
}

function cycleObjective() {
    objectiveIndex = (objectiveIndex + 1) % objectives.length;
    objectiveDisplay.textContent = objectives[objectiveIndex];
}

function cycleRisk() {
    riskIndex = (riskIndex + 1) % risks.length;
    riskDisplay.textContent = risks[riskIndex];
}
// Generate mission briefing
function launchMission() {
    if (
        agentDisplay.textContent === "---" ||
        locationDisplay.textContent === "---" ||
        weaponDisplay.textContent === "---" ||
        objectiveDisplay.textContent === "---" ||
        riskDisplay.textContent === "---"
    ) {
        missionOutput.textContent = "⚠ ERROR: All mission parameters must be selected.";
        return;
    }

    missionOutput.textContent =
        `MISSION BRIEFING\n` +
        `Agent: ${agentDisplay.textContent}\n` +
        `Location: ${locationDisplay.textContent}\n` +
        `Weapon: ${weaponDisplay.textContent}\n` +
        `Objective: ${objectiveDisplay.textContent}\n` +
        `Risk Level: ${riskDisplay.textContent}`;
}

// Reset everything
function resetMission() {
    agentDisplay.textContent = "---";
    locationDisplay.textContent = "---";
    weaponDisplay.textContent = "---";
    objectiveDisplay.textContent = "---";
    riskDisplay.textContent = "---";
    missionOutput.textContent = "Awaiting input...";
}

// Event listeners
document.getElementById("agentBtn").addEventListener("click", cycleAgent);
document.getElementById("locationBtn").addEventListener("click", cycleLocation);
document.getElementById("weaponBtn").addEventListener("click", cycleWeapon);
document.getElementById("objectiveBtn").addEventListener("click", cycleObjective);
document.getElementById("riskBtn").addEventListener("click", cycleRisk);
document.getElementById("launchBtn").addEventListener("click", launchMission);
document.getElementById("resetBtn").addEventListener("click", resetMission);
