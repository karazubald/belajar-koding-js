// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//---------------------------------
let a = 1;
while(a <= 100){
    if(a % 2 === 0){
        console.log(`a = ${a}, GENAP`);
    } else {
        console.log(`a = ${a}, GANJIL`)
    }
    a++;
}
//---------------------------------