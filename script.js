class Product {
    constructor(name, price, quantity) { // Constructor method of the class initializes name, price, and quantity properties
        this.name = name;
        this.price = price; // price property
        this.quantity = quantity; // quantity property
    }

    calculateValue() {
        return this.price * this.quantity;  // this method returns the total value of the product by multiplying the price by the quantity
    }

    displayProductInfo() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`; // Displays each product as a string
    }
}

class PerishableProduct extends Product { // sub class to super class "Product"
    constructor(name, price, quantity, expirationDate) { // added expirationDate to the constructor
        super(name, price, quantity); // calls super to invoke the Product class constructor
        this.expirationDate = expirationDate; // creates expirationDate property and gives it a value
    }

    displayProductInfo() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`; // Override displayProductInfo
    }
}

let product1 = new Product('Banana', 3.20, 6);

console.log(product1.displayProductInfo());

