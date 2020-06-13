/** Calculator fns */



function checkNums(arr) {
    for(i=0; i<arr.length; i++) {
        let numVal = Number(arr[i]);
        if(Number.isNaN(numVal)) return `${arr[i]} is not a number!`;
    }
}

function mean(arr) {
    
}

function median(arr) {

}

function mode(arr) {

}


module.exports = {
  checkNums: checkNums,
  mean: mean,
  median: median,
  mode: mode
};
