// DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
// saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // Removing spaces with regex
    let text = str.replace(/\s+/g,'');

    const arr_huruf = text.split('');
    const len = arr_huruf.length;
    const alfabet = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'];
    
    // Merge sort algorithm (bottom up approach, iterative)

    const last_idx = len - 1;
    // curr_size = ukuran subarray yang akan di-merge
    // curr_size bervariasi dari 1 hingga n/2
    let curr_size = 1;
    while (curr_size < last_idx) {
        let ujung_kiri = 0;

        while (ujung_kiri < last_idx) {
            let tengah = Math.min(ujung_kiri + curr_size - 1, last_idx);
            let ujung_kanan = Math.min(ujung_kiri + 2 * curr_size - 1, last_idx);
            // Menentukan array kiri dan kanan
            let array_kiri_size = tengah - ujung_kiri + 1;
            let array_kanan_size = ujung_kanan - tengah;
            // Membuat array kiri dan kanan
            let array_kiri = Array(array_kiri_size).fill(0);
            let array_kanan = Array(array_kanan_size).fill(0);
            // Menyalin data ke array kiri dan kanan
            for (let i = 0; i < array_kiri_size; i++) {
                array_kiri[i] = arr_huruf[ujung_kiri + i];
            }
            for (let j = 0; j < array_kanan_size; j++) {
                array_kanan[j] = arr_huruf[tengah + 1 + j];
            }
            // Melakukan merge array kiri/kanan ke arr_huruf
            let a = 0;
            let b = 0;
            let c = ujung_kiri;
            while (a < array_kiri_size && b < array_kanan_size) {
                if (array_kiri[a] <= array_kanan[b]) {
                    arr_huruf[c] = array_kiri[a];
                    a++;
                }
                else
                {
                    arr_huruf[c] = array_kanan[b];
                    b++;
                }
                c++;
            }
            // Menyalin elemen array kiri ke arr_huruf
            while (a < array_kiri_size) {
                arr_huruf[c] = array_kiri[a];
                a++;
                c++;
            }
            // Menyalin elemen array kanan ke arr_huruf
            while (a < array_kiri_size) {
                arr_huruf[c] = array_kanan[b];
                b++;
                c++;
            }
            
            ujung_kiri += 2 * curr_size;
        }
        curr_size = 2 * curr_size;
    }
    
    return arr_huruf;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'