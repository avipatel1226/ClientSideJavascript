// Add student info on page load
document.getElementById("studentInfo").innerText =
    "Student: Avi Patel | ID: 200627226";

// Pizza class
class Pizza {
    constructor(name, size, crust, toppings, notes) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.notes = notes;
    }

    // Builds a readable description of the order
    describe() {
        let toppingText = this.toppings.length > 0
            ? this.toppings.join(", ")
            : "No toppings";

        return `${this.name}, your ${this.size} pizza with ${this.crust} crust is on the way.
Toppings: ${toppingText}
Notes: ${this.notes || "None"}`;
    }
}

// Handle form submit
document.getElementById("pizzaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab values
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

    // Show description
    document.getElementById("orderOutput").innerText = pizzaOrder.describe();
});
