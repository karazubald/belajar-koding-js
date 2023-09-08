// Tugas perulangan di JavaScript
// 1. Buat perulangan dari suatu variable bertipe array
// Looping daa tersebut menggunakan for, while, dan do while
// Munculkan juga total semua angka yang ada di dalam array.
const _arrayData = [9, 6, 3, 1, 10, 8, 5, 2, 4, 7];
let phrase = '';
let hasil = 0;

// * FOR LOOP
// --------------------------------
console.log(`FOR LOOP`);
for (let index = 0; index < _arrayData.length; index++) {
    const elemenArray = _arrayData[index];
    phrase += `${elemenArray} `;
    hasil += elemenArray;

    console.log(`_arrayData [${index}] = ${elemenArray}`);
}

console.log(`total = ${hasil}\n`);
// --------------------------------

// * WHILE LOOP
// --------------------------------
console.log(`WHILE LOOP`);
// Reset variabel
phrase = '';
hasil = 0;
let index = 0;
while (index < _arrayData.length) {
    elemenArray = _arrayData[index];
    phrase += `${elemenArray} `;
    hasil += elemenArray;

    console.log(`_arrayData [${index}] = ${elemenArray}`);

    index++;
}


console.log(`total = ${hasil}\n`);
// --------------------------------

// * DO WHILE LOOP
// --------------------------------
console.log(`DO WHILE LOOP`);
// Reset variabel
phrase = '';
hasil = 0;
index = 0;

do {
    elemenArray = _arrayData[index];
    phrase += `${elemenArray} `;
    hasil += elemenArray;

    console.log(`_arrayData [${index}] = ${elemenArray}`);

    index++;
} while (index < _arrayData.length);


console.log(`total = ${hasil}\n`);
// --------------------------------