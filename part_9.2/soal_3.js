function cariMedian(arr) {
    let median = 0;
    const sorted_arr = arr;

    // Sort array with comparison function
    sorted_arr.sort((a,b) => a - b);

    // Median calculation
    const half_arr = Math.ceil(sorted_arr.length / 2);
    if (half_arr === sorted_arr.length / 2){
      median = sorted_arr[half_arr-1] + sorted_arr[half_arr];
      median /= 2;
    } else {
      median = sorted_arr[half_arr-1];
    }

    return median;
}

  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5