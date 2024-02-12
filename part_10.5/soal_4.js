/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/
function totalDigitRekursif(angka) {
    let arr_angka = angka.toString().split('');
    let left_arr = Number(arr_angka.shift());
    let right_arr = 0;
    let sum = 0;
    let angka_mod = 0;

    if (arr_angka.length >= 1){
        right_arr = Number(arr_angka.shift());
    }

    sum = left_arr + right_arr;
    
    if(arr_angka.length === 0) {
        arr_angka = [];
        angka_mod = 0;
        return sum;
    } else {
        angka_mod = arr_angka.join('');
        return sum + totalDigitRekursif(angka_mod);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5