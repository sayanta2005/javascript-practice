function reduceArray(callbackFunc,arr){
    let ans = arr[0];
    for(index=1;index<arr.length;index++){
        ans = callbackFunc(ans,arr[index]);
    }
    return ans;
}
function getSum(num1,num2){
    return num1+num2;
}
function getSubstract(num1,num2){
    return num1-num2;
}
console.log(reduceArray(getSum,[1,2,3,4]));
console.log(reduceArray(getSubstract,[100,20,40]));