// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function processSentence(nama,usia,alamat,hobi) {
    let sentence = `Nama saya ${nama}, umur saya ${usia} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
    return sentence;
}

let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
let fullSentence = processSentence(nama,age,address,hobby);

console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"