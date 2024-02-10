/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/
function graduates(students) {
    // Code disini
    let papan_pengumuman = [];
    let skorLulus = 75;
    let grupKelas = [];

    // Pengelompokan kelas menjadi grupKelas
    for (let x = 0; x < students.length; x++) {
        grupKelas.push(students[x].class);
        grupKelas = grupKelas.filter((value, index) => grupKelas.indexOf(value) === index);
    }

    // Iterasi kelas di grupKelas
    for (let n = 0; n < grupKelas.length; n++) {
        const kelas = grupKelas[n];
        const data_skor = [];
        // Cek setiap murid
        for (let p = 0; p < students.length; p++){
            const murid = students[p];
            // Cek murid di kelas n dan cek skornya apakah minimal ada di skorLulus (skor >= 75)
            if (murid.class == kelas && murid.score >= skorLulus){
                // Simpan di data_skor apabila bernilai true
                data_skor.push({name: murid.name, score: murid.score});
            }
            
        }

        // Simpan data_skor di papan_pengumuman berdasarkan kelasnya
        papan_pengumuman[`${kelas}`] = data_skor;
    }
    return papan_pengumuman;
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}