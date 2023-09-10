function cariMean(arr) {
    let average = 0;
    let jumlah_data = 0;
    let banyak_data = arr.length;

    for (let index = 0; index < banyak_data; index++) {
        const angka = arr[index];
        jumlah_data += angka;
    }
    
    average = Math.round(jumlah_data / banyak_data);

    return average;
}
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7

  //tips baca dokumentasi Math js untuk pembulatan