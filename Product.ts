// Mohammed Nael Ali Albohisi

// Task 4

// Interface :
interface Product {
    name: string;  
    price: number; 
}


// Function :
interface Product {
    name: string;  
    price: number; 
}


function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}


const products: Product[] = [
    { name: "Mobile", price: 500 },
    { name: "Laptop", price: 800 },
    { name: "Pc", price: 1000 }
];

const totalPrice = calculateTotalPrice(products);
console.log(`Total Price: $${totalPrice.toFixed(2)}`); 

/*
Explanation of how the TypeScript code works
Calculating Total Product Price:

Interface Product: It defines the structure of a product object with two properties: name (string) and price (number). This ensures type safety for the products array.
calculateTotalPrice function:
Takes an array of Product objects (products).
Uses the reduce method to iterate through the array and accumulate the total price.
In each iteration, it adds the current product's price to the running total (total).
Returns the final total price.
Example usage:
Defines an array of Product objects (products) with details of mobile, laptop, and PC.
Calls calculateTotalPrice with the products array.
Formats the total price with two decimal places using toFixed(2) and prints it to the console.
*/



// Task 5

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


const testEmails = [
    "user@domain.com",
    "user-email@domain",
    "user.name@domain.co", 
    "user@.com"
];

testEmails.forEach(email => {
    console.log(`Is "${email}" a valid email? ${isValidEmail(email)}`);
});

/* 
Explanation of how the TypeScript code works
Email Validation:

isValidEmail function:
Takes a string (email) as input.
Defines a regular expression (emailRegex) to validate email format. It checks for:
Letters, numbers, underscores, dots, percentages, pluses, and minuses before the "@" symbol.
Letters, numbers, dots, and hyphens after the "@" symbol.
A domain extension with at least two letters.
Uses emailRegex.test(email) to check if the email string matches the regular expression.
Returns true if the email is valid and false otherwise.
Example usage:
Defines an array (testEmails) containing various email strings.
Uses forEach method to iterate through each email.
Calls isValidEmail for each email and logs the result to the console, indicating if the email is valid or not.
*/




// Task 4 (Calculating Total Product Price)   And   Task 5 (Email Validation)
// Mohammed Nael Ali Albohisi 