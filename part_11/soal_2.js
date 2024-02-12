/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    let heroGroup = [];
    let hero = [];
    let type = [];
    const typicalGroup = 2; // Melee & Ranged (2)
    let heroType = str.split(','); // Pisahkan hero berdasarkan tanda koma (,)

    if(!str){
        return [];
    }

    for (let i = 0; i < heroType.length; i++) {
        hero[i] = heroType[i].split('-')[0];
        type[i] = heroType[i].split('-')[1];
    }

    let type_set = [...new Set(type)];

    for (let row = 0; row < typicalGroup; row++) {
        heroGroup[row] = [];
        for (let col = 0; col < type.length; col++) {
            let currentType = type[col];
            let currentHero = hero[col];

            if(currentType === type_set[row]){
                heroGroup[row].push(currentHero);
            }
        }
    }
    
    return heroGroup;
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []