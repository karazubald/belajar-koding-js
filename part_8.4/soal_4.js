function pasanganTerbesar(num) {
    const array_angka = num.toString().split('');
    const array_pasangan = [];
    let terbesar = 0;

    for (let i = 0, j = 1; i < array_angka.length, j < array_angka.length; i++, j++) {
        const angka1 = array_angka[i].toString();
        const angka2 = array_angka[j].toString();
        let pasangan = angka1.concat(angka2);
        array_pasangan.push(Number(pasangan));
    }

    terbesar = Math.max(...array_pasangan);

    return terbesar;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99