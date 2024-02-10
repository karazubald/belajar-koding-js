function changeMe(arr) {
    const ref_year = 2023;
    let referer = [];
    let obj_arr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        obj_arr = {
            firstName: element[0],
            lastName: element[1],
            gender: element[2],
            age: (isNaN(element[3]) ? 'Invalid Birth Year' : ref_year-element[3])
        }
        referer[`${element[0]} ${element[1]}`] = obj_arr;
    }
    console.log(referer);
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