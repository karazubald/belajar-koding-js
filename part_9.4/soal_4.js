/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
    const a = 'a';
    const b = 'b';
    const num_arr = num.split('');
    let hasil = false;
    let a_pos = 0;
    let b_pos = 0;

    for (let i = 0; i < num_arr.length; i++) {
        if (num_arr[i] === a) {
            a_pos = i;
        }
        if (num_arr[i] === b) {
            b_pos = i;
        }
    }

    let jarakAB = Math.abs(a_pos - b_pos) - 1;

    if (jarakAB === 3) {
        hasil = true;
    };
    return hasil;
}

  // TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

