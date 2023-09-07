// membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung data string (text), integer / number, boolean, array, object

let nama = 'kaz'; // string
let umur = 120; // number
let apakah_benar = true // boolean
let uang = 50000.5 // number namun ada koma

// operator matematika

let angka1 = 10;
let angka2 = 20;
console.log("angka1 + angka2 = " + angka1 + angka2);
console.log("angka1 - angka2 = " + angka1 - angka2);
console.log("angka1 / angka2 = " + angka1 / angka2);
console.log("angka1 * angka2 = " + angka1 * angka2);
console.log("angka1 % angka2 = " + angka1 % angka2);

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log("penampungHasilAritmatika = " + penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log("penampungHasilAritmatika = " - penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log("penampungHasilAritmatika = " + penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log("penampungHasilAritmatika = " + penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log("penampungHasilAritmatika = " + penampungHasilOperatorAritmatika);

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika

let firstName = 'Agus';
let lastName = 'Setiawan';
let fullName = firstName + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName);
console.log(firstName - lastName); // Nan

// alur pembacaan kode
// untuk membaca kode membacanya dari kiri ke kanan, dan atas ke bawah.

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10

// False bernilai 0, true bernilai 1
console.log(true + 10); // 11

// Error
// Mengubah const menghasilkan error karena const tidak bisa diubah.
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

// auto-comment bisa dengan menekan Ctrl + /
