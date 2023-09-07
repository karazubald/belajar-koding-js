//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let words = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
// ---------------------------------------
console.log(words+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First word: ' + exampleFirstWord);

// ---------------------------------------
let _word2 = word[0] + word[1] + word[2];

console.log('First word: '+_word2);

_word2 = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];

console.log('Second word: '+_word2);

_word2 = word[15] + word[16]

console.log('Third word: '+_word2);

_word2 = word[18] + word[19]

console.log('Fourth word: '+_word2);

_word2 = word[21] + word[22] + word[23] + word[24]

console.log('Fifth word: '+ _word2);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);


// ---------------------------------------
let _word3 = word3.substring(0, 3);

console.log('1st Word: ' + _word3);

_word3 = word3.substring(4, 14);

console.log('2nd Word: ' + _word3);

_word3 = word3.substring(15, 17);

console.log('3rd Word: ' + _word3);

_word3 = word3.substring(18, 20);

console.log('4th Word: ' + _word3);

_word3 = word3.substring(21, 25);

console.log('5th Word: ' + _word3);
// ---------------------------------------
// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

//----------------------------------
// code:
let _word4 = word4.substring(0, 3);
let _word4_length = _word4.length;

console.log('Kata Pertama: ' + _word4 + ', dengan panjang kata: '+_word4_length);

_word4 = word4.substring(4, 14);
_word4_length = _word4.length;

console.log('Kata Kedua: ' + _word4 + ', dengan panjang kata: '+_word4_length);

_word4 = word4.substring(15, 17);
_word4_length = _word4.length;

console.log('Kata Ketiga: ' + _word4 + ', dengan panjang kata: '+_word4_length);

_word4 = word4.substring(18, 20);
_word4_length = _word4.length;

console.log('Kata Keempat: ' + _word4 + ', dengan panjang kata: '+_word4_length);

_word4 = word4.substring(21, 25);
_word4_length = _word4.length;

console.log('Kata Kelima: ' + _word4 + ', dengan panjang kata: '+_word4_length);