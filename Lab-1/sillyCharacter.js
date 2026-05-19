/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Mysterious Potato";
let age = Math.floor(Math.random() * 60) + 10; // random age 10–69
let isSuperhero = Math.random() > 0.5;
let specialPowers = ["laser eyes", "super speed", "teleportation", "mind reading"];
let favoriteFood = "pizza";



// Function to generate a random character description
function generateRandomCharacter() {
    const names = ["Captain Waffles", "Sir Pickle", "Lady Banana", "Professor Noodle"];
    const foods = ["tacos", "sushi", "waffles", "spaghetti", "burgers"];

    characterName = names[Math.floor(Math.random() * names.length)];
    age = Math.floor(Math.random() * 80) + 5; // random age 5–84
    favoriteFood = foods[Math.floor(Math.random() * foods.length)];
    isSuperhero = Math.random() > 0.5;

    updateDescription();
}


// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
    }
    updateDescription();
}




// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector
document.querySelector("#generateButton").addEventListener("click", generateRandomCharacter);
document.querySelector("#increaseAgeButton").addEventListener("click", increaseAge);
document.querySelector("#decreaseAgeButton").addEventListener("click", decreaseAge);

