/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    const kelompok = [];
    const animal = animals.sort();

    // Grouping attempt
    for (let a = 0; a < animal.length; a++) {
        const hewan1 = animal[a];

        for (let b = 0; b < animal.length; b++) {
            const hewan2 = animal[b];

            if(hewan2 === hewan1){
                kelompok[b] = [hewan1];
                continue;
            }
            if(hewan1.split('')[0] === hewan2.split('')[0]) {
                kelompok[b] = [hewan1, hewan2];
            }
        }
    }

    // Cleaning attempt: 1st step
    for (let i = 0, j = 1; j < kelompok.length; i++, j++) {
        const array1 = kelompok[i];
        const array2 = kelompok[j];

        for (let a = 0; a < array1.length; a++) {
            for (let b = 0; b < array2.length; b++) {
                if (array1[a] === array2[b]) {
                    if (array1.length < array2.length) {
                        array1.pop();
                    }
                    if (array1.length > array2.length) {
                        array2.pop();
                    }
                }
            }
        }
    }
    // Cleaning attempt: 2nd step
    for (let m = 0; m < kelompok.length; m++) {
        const subKelompok = kelompok[m];
        const index_subKelompok = kelompok.indexOf(subKelompok);

        if (subKelompok.length === 0) {
            kelompok.splice(index_subKelompok, 1);
        }
    }

    return kelompok;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]