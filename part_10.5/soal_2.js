/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    //code di sini
    let hrf = str.split('');
    const vocals = ['a','e','i','o','u'];
    const vocals_capital = ['A','E','I','O','U'];
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabets_capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (let i = 0; i <= hrf.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (hrf[i] === vocals_capital[j]) {
                hrf[i] = alphabets_capital[alphabets_capital.indexOf(vocals_capital[j]) + 1];
            }
            if (hrf[i] === vocals[j]){
                hrf[i] = alphabets[alphabets.indexOf(vocals[j]) + 1];
            }
        }
    }

    return hrf.join('');
}

function reverseWord(str) {
    //code di sini
    let reversed_str = [];
    for (let a = str.length-1; a >= 0; a--) {
        reversed_str += str[a];
    }
    return reversed_str;
}

function setLowerUpperCase(str) {
    //code di sini
    let mod_str = str.split('');
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabets_capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let a = 0; a < mod_str.length; a++) {
        for (let b = 0; b < alphabets.length; b++) {
            if (mod_str[a] === alphabets_capital[b]){
                mod_str[a] = alphabets[b];
                continue;
            }
            if (mod_str[a] === alphabets[b]) {
                mod_str[a] = alphabets_capital[b];
            }
        }
    }
    return mod_str.join('');
}

function removeSpaces(str) {
    //code di sini
    const spasi = ' ';
    let mod_str = '';
    mod_str = str.replace(spasi, '');
    return mod_str;
}

function passwordGenerator(name) {
    //code di sini
    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5';
    }
    let newPass = changeVocals(name);
    newPass = reverseWord(newPass);
    newPass = setLowerUpperCase(newPass);
    newPass = removeSpaces(newPass);
    return newPass;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'