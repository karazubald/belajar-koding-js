function tentukanDeretGeometri(arr) {
    let konsistensi_rasio = false;
    const array_rasio = [];
    let jumlah_rasio = 0;

    for(let i = 0, j = 1; i < arr.length-1; i++, j++){
        const elemen1 = arr[i];
        const elemen2 = arr[j];
        const rasio = elemen2 /elemen1;
        array_rasio.push(rasio);
    }

    for (let a = 0; a < array_rasio.length; a++) {
        const rasio = array_rasio[a];
        jumlah_rasio += rasio;
    }

    if (array_rasio[0] * array_rasio.length !== jumlah_rasio) {
        konsistensi_rasio = false;
    } else {
        konsistensi_rasio = true;
    }

    return konsistensi_rasio;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false