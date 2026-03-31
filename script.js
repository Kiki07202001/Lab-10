class Product {
    constructor(name, price, quantity) { // Constructor method of the class initializes name, price, and quantity properties
        this.name = name; // name property
        this.price = price; // price property
        this.quantity = quantity; // quanitity property
    }

    calculateValue() {
        return this.price * this.quantity; // this method returns the total value of the product by multiplying the price by the quantity
    }

    displayProductInfo() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`; // Displays each product as a string
    }
}

