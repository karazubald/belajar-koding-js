function hitungJumlahKata(kalimat) {
    let array_kata = kalimat.split(' ');
    let hitung_kata = 0;
    while(hitung_kata < array_kata.length){
        hitung_kata++;
    }
    return hitung_kata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5