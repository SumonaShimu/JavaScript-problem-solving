//Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPos = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) sum += nums[i];
    }
    return sum;
}

const array = [2, -5, 10, -3, 7];
console.log(sumOfPos(array));