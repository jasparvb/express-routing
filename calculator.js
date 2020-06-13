/** Calculator fns */


function checkNums(arr) {
    let numArr = [];
    for(i = 0; i < arr.length; i++) {
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
        return arr[(arr.length - 1 ) / 2]
    }
    return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
}

function mode(arr) {
    let count = {};
    let maxNum = 0;
    let modes = [];
    for(i = 0; i < arr.length; i++) {
        count[arr[i]] ? count[arr[i]]++ : count[arr[i]] = 1;
        if(maxNum < count[arr[i]]) maxNum++;
    }
    for(let n in count) {
        if(count[n] === maxNum) {
            modes.push(n);
        }
    }
    return modes.join(", ");
}


module.exports = {
  checkNums, mean, median, mode
};
