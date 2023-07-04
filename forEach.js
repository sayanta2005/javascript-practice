function forEachElement(callbackFunc, arr){
    for(index=0;index<arr.length;index++){
        callbackFunc(arr[index]);
    }
}
function getSq(num){
    console.log(num*num);
}
forEachElement(getSq,[1,2,3,4])