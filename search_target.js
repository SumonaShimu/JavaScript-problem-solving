//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) return [i, j];
        else if (sum < target) i++;
        else j--;
    }
    return 'Found no such pair!';
}

const array = [1, 3, 6, 8, 11, 15];
const target = 25;
console.log(findTwoNumbersWithSum(array, target));
