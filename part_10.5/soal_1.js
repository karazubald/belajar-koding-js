/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    const sortedArr = arrNumber;
    for (let a = 0; a < arrNumber.length; a++) {
        for (let b = 0; b < arrNumber.length; b++) {
            if (a === b) continue;
            if (sortedArr[a] > sortedArr[b]){
                [sortedArr[a], sortedArr[b]] = [sortedArr[b], sortedArr[a]];
            }
        }
    }
    return sortedArr;
}

function getTotal(arrNumber) {
    let arr_set = [...new Set(arrNumber)];
    let arr_counter = [];
    let counter = 0;
    for (let a = 0; a < arr_set.length; a++){
        const elemenSet = arr_set[a];
        for (let i = 0; i < arrNumber.length; i++) {
            if (elemenSet === arrNumber[i]){
                counter++;
            }
        }
        arr_counter[a] = counter;
    }
    
    if (!arr_counter[0]) {
        return " ";} else {
            return `'angka paling besar adalah ${arr_set[0]} dan jumlah kemunculan sebanyak ${arr_counter[0]} kali'`;
        }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''