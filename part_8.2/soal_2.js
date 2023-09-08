let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    const tanggal = input[3].split('/');
    let bulan = Number(tanggal[1]);
    let nama = input[1].slice(0, 15);

    switch (bulan) {
        case 1:
            bulan = ' Januari ';
            break;
        case 2:
            bulan = ' Februari ';
            break;
        case 3:
            bulan = ' Maret ';
            break;
        case 4:
            bulan = ' April ';
            break;
        case 5:
            bulan = ' Mei ';
            break;
        case 6:
            bulan = ' Juni ';
            break;
        case 7:
            bulan = ' Juli ';
            break;
        case 8:
            bulan = ' Agustus ';
            break;
        case 9:
            bulan = ' September ';
            break;
        case 10:
            bulan = ' Oktober ';
            break;
        case 11:
            bulan = ' November ';
            break;
        case 12:
            bulan = ' Desember ';
            break;
    }

    console.log(input);
    console.log(bulan);
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
    console.log(tanggal.join('-'));
    console.log(nama);
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */