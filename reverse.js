const reverseString=(str)=>{
    const newArray=str.split("");
    for(let i=0,j=newArray.length-1;i<=j;i++,j--)
    {
        let temp=newArray[i];
        newArray[i]=newArray[j];
        newArray[j]=temp;
    }
    const newStr=newArray.join("");
    console.log(newStr);
}
const str="hello world"
reverseString(str)