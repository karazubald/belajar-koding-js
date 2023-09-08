//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let counter_x = 0;
    let counter_o = 0;

    for (let index = 0; index < str.length; index++) {
      const elemen = str[index];
      if (elemen === 'x') {
        counter_x += 1;
      } else if (elemen === 'o') {
        counter_o += 1;
      }
    }

    if (counter_o === counter_x) {
      return true;
    }

    return false;
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true