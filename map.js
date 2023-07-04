function mapArray(callbackFunc, list){
    const modifiedList = [];
    for(index=0;index<list.length;index++){
        const val = callbackFunc(list[index]);
        modifiedList.push(val);
    }
    return modifiedList;
}

function dividedByTwo(num){
    return num/2;
}

let arr = [10,20,30,40,50]
console.log(mapArray(dividedByTwo,arr));