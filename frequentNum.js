//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const frequent = (array) => {
    const frequncyOfNum = {}; //map
    let maxFrequency = 0;
    let frequentElement;
    for (let i = 0; i < array.length; i++) {
        if (frequncyOfNum[array[i]]) frequncyOfNum[array[i]]++;
        else frequncyOfNum[array[i]] = 1; //for first occurance
        if (maxFrequency < frequncyOfNum[array[i]]) {
            maxFrequency = frequncyOfNum[array[i]];
            frequentElement = array[i];
        }

        return frequentElement;
    }
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(frequent(array));