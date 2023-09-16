/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let x_pos = [];
    let o_pos = [];
    let jarak_array = [];
    let jarak = 0;

    // Position mapping of x and o
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'x':
                x_pos.push(i);
                break;
            case 'o':
                o_pos.push(i);
                break
            default:
                break;
        }
        // if(arr[i] === 'x') {
        //     x_pos.push(i);
        // } else if (arr[i] === 'o') {
        //     o_pos.push(i);
        // } else {
        // }
    }

    // Distance mapping between x & o
    for (let a = 0; a < x_pos.length; a++) {
        for (let b = 0; b < o_pos.length; b++) {
            jarak_array.push(Math.abs(x_pos[a] - o_pos[b]));
        }
    }

    jarak = jarak_array.sort()[0];

    if(jarak === undefined){
        return 0;
    }

    return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2