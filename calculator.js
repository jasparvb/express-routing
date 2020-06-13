/** Calculator fns */


function checkNums(arr) {
    let numArr = [];
    for(i=0; i<arr.length; i++) {
        let numVal = Number(arr[i]);
        if(Number.isNaN(numVal)) {
            return `${arr[i]} is not a number!`;
        }
        if(numVal) numArr.push(numVal); 
    }
    return numArr;
}

function mean(arr) {
    if(arr.length === 0) return 0;
    return arr.reduce((accum, val) => {
        return accum + val
    }) / arr.length;
}

function median(arr) {
    arr.sort((a, b) => a - b);

    if(arr.length % 2) {
        //for odd amount of numbers
        return arr[(arr.length / 2) - .5]
    }
    return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
}

function mode(arr) {
    
}


module.exports = {
  checkNums, mean, median, mode
};
