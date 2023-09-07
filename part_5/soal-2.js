// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// let hari = 21; let bulan = 1; let tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let day = 3;
let month = 1;
let year = 2002;

switch (month) {
    case 1:
        month = ' Januari ';
        break;
    case 2:
        month = ' Februari ';
        break;
    case 3:
        month = ' Maret ';
        break;
    case 4:
        month = ' April ';
        break;
    case 5:
        month = ' Mei ';
        break;
    case 6:
        month = ' Juni ';
        break;
    case 7:
        month = ' Juli ';
        break;
    case 8:
        month = ' Agustus ';
        break;
    case 9:
        month = ' September ';
        break;
    case 10:
        month = ' Oktober ';
        break;
    case 11:
        month = ' November ';
        break;
    case 12:
        month = ' Desember ';
        break;
}
console.log(`Tanggal: ${day}${month}${year}`);

//code switch case kamu disini