//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let persekutuanTerbesar = 0;
    const faktor1 = []; // terkecil
    const faktor2 = []; // terbesar

    for (let a = 0; a < angka1; a++) {
        if(angka1 % a === 0){
            faktor1.push(a);
        }
    }
    for (let b = 0; b < angka1; b++) {
        if(angka2 % b === 0){
            faktor2.push(b);
        }
    }

    for (let i = 0; i < faktor1.length; i++) {
        for (let j = 0; j < faktor2.length; j++) {
            if(faktor1[i] === faktor2[j]) {
                persekutuanTerbesar = faktor1[i];
            }
        }
    }

    return persekutuanTerbesar;
}

  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1