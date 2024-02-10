function highestScore(students) {
    // Code disini
    let papan_peringkat = [];
    let skorTertinggi = 0;
    let peraihSkor = '';
    let grupKelas = [];

    // Pengelompokan kelas menjadi grupKelas
    for (let x = 0; x < students.length; x++) {
        grupKelas.push(students[x].class);
        grupKelas = grupKelas.filter((value, index) => grupKelas.indexOf(value) === index);
    }

    // Iterasi kelas di grupKelas
    for (let n = 0; n < grupKelas.length; n++) {
        const kelas = grupKelas[n];

        // Cek murid 1
        for (let st = 0; st < students.length; st++) {
            const murid1 = students[st];
            // Hanya cek murid di kelas (grupKelas ke-n)
            if (murid1.class === kelas) {
                // Tetapkan nama dan skor murid1 menjadi nama dan skor tertinggi sebelum cek murid2
                peraihSkor = murid1.name;
                skorTertinggi = murid1.score;

                // Cek murid 2
                for (let i = 0; i < students.length; i++) {
                    if (i === st) continue; // murid 2 tidak boleh sama dengan murid 1
                    const murid2 = students[i];
                    // Jika murid2 juga di kelas murid1
                    if (murid2.class === murid1.class){
                        // Ganti nama dan skorTertinggi jika skor murid2 lebih tinggi
                        if (murid2.score > murid1.score) {
                            peraihSkor = murid2.name;
                            skorTertinggi = murid2.score;
                        }
                    }
                }
            }
        }

        // Simpan nama murid dan skorTertinggi di data_skor
        let data_skor = {
            name: peraihSkor,
            score: skorTertinggi
        }

        // Simpan data_skor di papan_peringkat berdasarkan kelasnya
        papan_peringkat[`${kelas}`] = data_skor;
    }

    return papan_peringkat;
}

// TEST CASE
console.log(highestScore([{
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}