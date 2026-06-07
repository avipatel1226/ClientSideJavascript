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
