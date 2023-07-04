function filterArray(callbackFunc, arr){
    const modifiedList = [];
    for(index = 0;index<arr.length;index++){
        if(callbackFunc(arr[index])){
            modifiedList.push(arr[index]);
        }
    }
    return modifiedList;
}
function checkAdult(num){
    if(num>=18){
        return true;
    }
    return false;
}
console.log(filterArray(checkAdult,[20,25,17,11,30]));