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
    let curr_size = 1;
    while (curr_size < last_idx) {
        let left_start = 0;

        while (left_start < last_idx) {
            let mid = Math.min(left_start + curr_size - 1, last_idx);
            let right_end = Math.min(left_start + 2 * curr_size - 1, last_idx);
            // Determining size for left and right array
            let left_arr_size = mid - left_start + 1;
            let right_arr_size = right_end - mid;
            // Create left and right temporary array
            let left_arr = Array(left_arr_size).fill(0);
            let right_arr = Array(right_arr_size).fill(0);
            // Copy data to temporary arrays
            for (let i = 0; i < left_arr_size; i++) {
                left_arr[i] = arr_huruf[left_start + i];
            }
            for (let j = 0; j < right_arr_size; j++) {
                right_arr[j] = arr_huruf[mid + 1 + j];
            }
            // Merge temporary arrays back to arr_huruf
            let a = 0;
            let b = 0;
            let c = left_start;
            while (a < left_arr_size && b < right_arr_size) {
                if (left_arr[a] <= right_arr[b]) {
                    arr_huruf[c] = left_arr[a];
                    a++;
                }
                else
                {
                    arr_huruf[c] = right_arr[b];
                    b++;
                }
                c++;
            }
            // Copy the remaining elements of left_arr if there are any, back to arr_huruf
            while (a < left_arr_size) {
                arr_huruf[c] = left_arr[a];
                a++;
                c++;
            }
            // Copy the remaining elements of right_arr if there are any, back to arr_huruf
            while (a < left_arr_size) {
                arr_huruf[c] = left_arr[b];
                b++;
                c++;
            }
            
            left_start += 2 * curr_size;
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