function cariModus(arr) {
    let modus = 0;
    let counter = 0;
    const counter_array = [];
    
    for (let i = 0; i < arr.length; i++) {
        const elemen1 = Number(arr[i]);
        for (let j = 0; j < arr.length; j++) {
            const elemen2 = Number(arr[j]);
            if (elemen1 === elemen2) {
                counter++;
            }
        }        
        counter_array[i] = counter;
        counter = 0;
    }

    // Menyimpan modus tertinggi di counter
    counter = Math.max(...counter_array);

    if (counter === 1 || counter === arr.length){
        modus = -1;
    } else {
        let first_left_index = counter_array.indexOf(counter);
        modus = arr[first_left_index];
    }

    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1