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

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price - (product.price * discount);
    })
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

class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
    this.inventory.push(product);
}
}

// Tester code
let product1 = new Product('Banana', 3.20, 6); // Creates object for Product class

console.log(product1.displayProductInfo()); // Logs to console

// Outputs: Product: Banana, Price: $3.2, Quantity: 6
// Add logic for additional 0 in $3.20

let steak = new PerishableProduct('Steak', 13.41, 1, '2026-04-03'); // Creates object for sub class PerishableProduct

console.log(steak.displayProductInfo()); // Logs to console

// Outputs: Product: Steak, Price: $13.41, Quantity: 1, Expiration Date: 2026-04-03

// Static method tester code
let testProducts = [ // create new product objects
    new Product('Bread', 2.50, 3),
    new Product('Carrots', 4.00, 2)
]

Product.applyDiscount(testProducts, 0.1); // apply the static method 
console.log(testProducts); // log result