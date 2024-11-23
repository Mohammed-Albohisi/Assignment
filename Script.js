// Mohammed Nael Ali Albohisi

// Task 2 

function calculateSumAndAverage(numbers) {
    
    const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    
    const average = numbers.length > 0 ? totalSum / numbers.length : 0;

    return {
        totalSum: totalSum,
        average: average
    };
}


const numbersArray = [1, 2, 3, 4, 5];
const result = calculateSumAndAverage(numbersArray);

console.log(`Total Sum: ${result.totalSum}`); 
console.log(`Average: ${result.average}`); 




// Task 3

function removeDuplicates(strings) {
    
    const uniqueStrings = new Set(strings);
    
    
    return Array.from(uniqueStrings);
}


const stringArray = ["mobile", "laptop", "ipad", "pc", "mobile", "headphones", "ipad"];
const uniqueArray = removeDuplicates(stringArray);

console.log(uniqueArray);



// Task 2 And Task 3
// Mohammed Nael Ali Albohisi 