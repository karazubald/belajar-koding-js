// ------------------------------
// b(n, n+1) * L === Sigma(b)
// ------------------------------
// b(n, n+1) : beda yaitu hasil pengurangan elemen (n) dengan elemen selanjutnya (n+1) di suatu array pola angka. Elemen pertama di array beda menjadi titik acuan.
// L : panjang atau ukuran array beda.
// Sigma(b) : Jumlah beda, didapatkan dengan menambahkan semua elemen di dalam array beda.
function tentukanDeretAritmatika(arr) {
    let konsistensi_pola = false;
    let jumlah_beda = 0;
    const array_beda = []; 

    for(let i = 0, j = 1; i < arr.length-1; i++, j++){
        const angka_pertama = arr[i];
        const angka_kedua = arr[j];
        const beda = angka_pertama - angka_kedua;
        array_beda.push(beda);
    }

    for (let a = 0; a < array_beda.length; a++) {
        const beda = array_beda[a];
        jumlah_beda += beda;
    }

    if (array_beda[0] * array_beda.length !== jumlah_beda) {
        konsistensi_pola = false;
    } else {
        konsistensi_pola = true;
    }

    return konsistensi_pola;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false