/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
function perkalianUnik(arr) {
    let hasil = 1;
    let array1 = [];
    let array2 = [];
    let array_modifikasi = [];
    const array_baru = [];

    for (let i = arr.length; i > 0; i--) {
        const referensi = arr[i-1];
        hasil = 1;

        array1 = arr.slice(0,i-1);
        array2 = arr.slice(i);

        array_modifikasi = array1.concat(array2);

        for(let x = 0; x < array_modifikasi.length; x++){
            hasil *= array_modifikasi[x];
        }

        array_baru[i-1] = hasil;
    }


    return array_baru;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]