/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/
function palindrome(kata) {
    let isPalindrome = false; // asumsi awal adalah kata bukan palindrome
    let kata_array = kata.split('');
    let kata_terbalik = '';

    for (let index = kata_array.length-1; index >= 0; index--) {
        const huruf = kata_array[index];
        kata_terbalik += huruf;
    }

    if (kata_terbalik === kata) {
        isPalindrome = true;
    }

    return isPalindrome;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false