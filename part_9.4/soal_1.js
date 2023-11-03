/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
    let min_digit = 0;
    const faktor_1 = [];
    const faktor_2 = [];
    const digit_faktor = [];
    
    // Membuat faktorisasi angka
    for (let angka1 = 0; angka1 <= angka; angka1++) {
        for (let angka2 = angka; angka2 > 0; angka2--) {
            let result = angka1 * angka2;

            if (result === angka) {
                faktor_1.push(angka1);
                faktor_2.push(angka2);
            }
        }
    }

    // Cek faktor-faktor:
    // console.log(`faktor_1 = ${faktor_1}`);
    // console.log(`faktor_2 = ${faktor_2}`);

    // Mencatat digit perkalian antarfaktor di array digit_faktor
    for (let i = 0; i < faktor_1.length; i++) {
        let string1 = faktor_1[i].toString();
        let string2 = faktor_2[i].toString();
        let str_length = string1.concat(string2).length;
        digit_faktor.push(str_length);
    }

    min_digit = Math.min(...digit_faktor)

    return min_digit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2 