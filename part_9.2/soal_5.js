function ubahHuruf(kata) {
    const alfabet = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'];
    const huruf = kata.split('');
    let kata_baru = '';
    
    for (let idx = 0; idx < huruf.length; idx++) {
        const index_huruf_pengganti = alfabet.indexOf(huruf[idx]) + 1;
        huruf[idx] = alfabet[index_huruf_pengganti];
        kata_baru += huruf[idx];
    }

    return kata_baru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu