let nilai = 100;

console.log(nilai >= 50); 

// Kondisi dalam () di if bernilai true atau false

if (nilai > 50) {
    console.log('lulus');
} else if(nilai >= 40){
    console.log('tidak lulus');
} else {
    console.log('tidak lulus pake banget');
}

// Logical dan comparison operator

if (nilai >= 80 && nilai <= 100){
    nilai = 'A';
} else if (nilai >= 70 && nilai < 80) {
    nilai = 'B';
} else if (nilai >= 60 && nilai < 70) {
    nilai = 'C';
} else {
    nilai = 'D';
}
console.log(nilai);
nilai = 100;

// AND (&&) bernilai true jika semua kondisi yang dibandingkan bernilai true
// OR (||) bernilai true kalau salah satu yang dibandingkan bernilai true

let banding1 = nilai >= 80 && nilai <= 100;
console.log(banding1, '&&');
let banding2 = nilai >= 80 || nilai < 100;
console.log(banding2, '||');
let banding3 = nilai != 50;
console.log(banding3, '!');

// Perbedaan == dengan ===
let x = 30;
let y = '30';

let banding4 = x == y;
console.log(banding4, '4')
let banding5 = x === y;
console.log(banding5, '5');

// If else bersarang (Nested If-Else)
let number = 6;
if (number > 5) {
    if (number % 2 === 0) {
        console.log('angka genap lebih besar dari 5');
    } else {
        console.log('angka ganjil lebih besar dari 5');
    }
} else {
    if (number % 2 === 0) {
        console.log('angka genap lebih kecil atau sama dengan 5');
    } else {
        console.log('angka ganjil lebih kecil atau sama dengan 5');
    }
}