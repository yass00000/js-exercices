function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


function countAdults(ages) {
    let count = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            count++;
        }
    }
    return count;
}

let ages = [15, 22, 18, 30, 12];
function averageScore(students) {
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
    return totalScore / students.length;
}

let students = [
    {name: 'Alice', score: 90},
    {name: 'Bob', score: 85},
    {name: 'Charlie', score: 88}
];
console.log(averageScore(students));
function maxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

let numbers = [10, 5, 8, 12, 7];
function filterExpensiveProducts(products, minPrice) {
    let expensiveProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > minPrice) {
            expensiveProducts.push(products[i]);
        }
    }
    return expensiveProducts;
}

let products = [
    {name: 'Laptop', price: 1000},
    {name: 'Mouse', price: 25},
    {name: 'Keyboard', price: 75},
    {name: 'Monitor', price: 300}
];