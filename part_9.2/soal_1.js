//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  const referensiAngka = angka;
  let isPrimeNumber = false;
  let kelipatanAngka = [];

  for (let i = 1; i < angka; i++) {
    if (referensiAngka % i === 0){
      kelipatanAngka.push(i);
    }
  }

  kelipatanAngka.sort();

  if (kelipatanAngka.length === 1) {
    isPrimeNumber = true;
  }

  return isPrimeNumber;
}
  
  // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false