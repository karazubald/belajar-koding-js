function changeMe(arr) {
    const ref_year = 2023;
    let str = '';
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        str += `${element[0]} ${element[1]}: `;
        str += `{ firstName: '${element[0]}',\n`;
        str += ` lastName: '${element[1]}',\n`;
        str += ` gender: '${element[2]}',\n`; 
        str += ` age: ${isNaN(element[3]) ? `'Invalid Birth Year'` : `${ref_year - element[3]}`} }\n`;
    }
    console.log(str);
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""