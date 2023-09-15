// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [-1, -4, -5, -8, 'error', 1, 2, 3, 3, 45, 32, 2];
// const x = 23;
// const myname = "Mukhammadaziz";

// console.log("Mukhammadaziz");
const Tempratureschanges = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp < max) max = curTemp;
    if (curTemp > min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = Tempratureschanges(temperatures);
console.log(amplitude);

const TempratureschangesNew = function (t1, t2) {
  // const array1 = ['a', 'b', 'c'];
  // const array2 = ['d', 'e', 'f'];
  // const array3 = array1.concat(array2);
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = TempratureschangesNew([1, 3, 4, 5], [9, 8, 7, 2]);
console.log(amplitudeNew);

const measureAlan = function () {
  const measurement
  {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius'),
  };
  const alan = measurement.value + 273;
  return Alan;
};
console.log(measureAlan());
