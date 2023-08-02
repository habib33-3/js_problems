function leapYear(arr) {
  let year = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 == 0) {
      year.push(arr[i]);
    }
  }
  console.log(year);
}

let arr = [2004, 2008, 2010];

leapYear(arr);
