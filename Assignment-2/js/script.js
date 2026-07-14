// Add student info at the top of the page
document.getElementById("studentInfo").innerText =
    "Student: Avi Patel | ID: 200627226";

// Pizza class to build the order description
class Pizza {
    constructor(name, size, crust, toppings, notes) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.notes = notes;
    }

    describe() {
        const toppingList = this.toppings.length > 0
            ? this.toppings.join(", ")
            : "No toppings";

        const notesText = this.notes ? this.notes : "None";

        return `${this.name}, your ${this.size} pizza with ${this.crust} crust is on the way.
Toppings: ${toppingList}
Notes: ${notesText}`;
    }
}

// Handle form submission
const form = document.getElementById("pizzaForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form values
    const name = document.getElementById("customerName").value.trim();
    const size = document.getElementById("pizzaSize").value;
    const crust = document.getElementById("crustType").value;
    const notes = document.getElementById("specialInstructions").value.trim();

    // Collect toppings
    const toppings = [];
    document.querySelectorAll(".topping:checked").forEach(item => {
        toppings.push(item.value);
    });

    // Basic validation
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!size) {
        alert("Please choose a pizza size.");
        return;
    }
    if (!crust) {
        alert("Please choose a crust type.");
        return;
    }

    // Create pizza object
    const pizzaOrder = new Pizza(name, size, crust, toppings, notes);

    // Display the order description
    document.getElementById("orderOutput").innerText = pizzaOrder.describe();
});
