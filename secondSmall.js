//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number

const secondSmallest = array => {
    const sorted = array.sort();
    return sorted[1];
}

const array = [5, 2, 9, 1, 5, 6];
console.log(secondSmallest(array)); 