//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reverseString=(str)=>{
    const newArray=str.split("");
    for(let i=0,j=newArray.length-1;i<=j;i++,j--)
    {
        let temp=newArray[i];
        newArray[i]=newArray[j];
        newArray[j]=temp;
    }
    const newStr=newArray.join("");
    return newStr;
}
const str="hello world"
console.log(reverseString(str));