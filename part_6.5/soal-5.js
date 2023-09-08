// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

//---------------------------------
let input = 5;
for (let i = 0, bintang = ''; i < input; i++) {
    bintang += '*';
    console.log(bintang);
}

// Kode di atas adalah alternatif dari kode berikut. (Alternatif dalam artian menghasilkan output yang sama)
// for (let i = 0; i <= input; i++) {
//     let bintang = '';
//     for (let j = 0; j < i; j++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }