// LOOP
// While ()
// let i = 5;
// while (i >= 0){
//     console.log(i);
//     i--;
// }

// For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let nama = 'Uvuvwevwevwe';

// metode length berlaku pada tipe data string dan array
// metode length mengembalikan nilai angka, total huruf yang ada di string, atau total elemen dalam array

// for (let i = 0; i < nama.length; i++) {
//     const elemen = nama[i];
//     console.log(elemen);
// }

// Indexing: index array dan string berawal dari 0

// let nama = 'Uvuvwevwevwe';
// let result = '';

// for (let i = nama.length - 1; i >= 0; i--) {
//     const elemen = nama[i];
//     result += elemen;
// }
// console.log(result);

// NESTED LOOP
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
//     console.log('');
// }
// console.log('selesai');

// let i = 0; // i adalah counter
// while (i < 100) {
//     console.log(i);
//     i += 5;
// }

// Loop + If Else
let i = 0;
while (i < 50) {
    if (i % 2 === 0){
        console.log(`${i} adalah angka genap`);
    } else {
        console.log(`${i} adalah angka ganjil`);
    }
}
// modulus (%) adalah sisa bagi
// n % a === 0 berarti n adalah kelipatan a

// problem Fizzbuzz
// Jika i adalah kelipatan 3 maka tampilkan fizz
// Jika i adalah kelipatan 5 maka tampilkan buzz
// Jika i adalah kelipatan 3 dan 5 maka tampilkan fizzbuzz
// Jika bukan kelipatan di atas maka tampilkan angka
// for (let i = 0; i < 50; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
// }

// pada looping ada break dan continue.
// Break untuk berhenti loop.
// Continue untuk membuat loop skip di iterasi tertentu
for (let i = 0; i < 10; i++) {
    if (i === 7 ){
        break;
        // break atau continue;
    }
    console.log(i);
}