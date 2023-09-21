// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [-1, -4, -5, -8, 'error', 1, 2, 3, 3, 45, 32, 2];
// const x = 23;
// const myname = "Mukhammadaziz";

// // console.log("Mukhammadaziz");
// const Tempratureschanges = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp < max) max = curTemp;
//     if (curTemp > min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = Tempratureschanges(temperatures);
// console.log(amplitude);

// const TempratureschangesNew = function (t1, t2) {
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = TempratureschangesNew([1, 3, 4, 5], [9, 8, 7, 2]);
// console.log(amplitudeNew);

// const measureAlan = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degrees celsius')),
//     value: 10,
//   };
//   // console.table(Tempratureschanges);
//   const alan = measurement.value + 273;
//   return alan;
// };
// console.log(measureAlan());

// // const temperatures = [-1, -4, -5, -8, 'error', 1, 2, 3, 3, 45, 32, 2];
// // Using a debu {
// // const array1 = ['a', 'b', 'c'];
// // const array2 = ['d', 'e', 'f'];
// // const array3 = array1.concat(array2);
// const TempratureschangesBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = TempratureschangesBug([1, 3, 4], [9, 8, 4]);
// console.log(amplitudeBug);

challange; //////////+===================================+>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const temperaturess = [17, 21, 23, 12, 5, 0, -5, 4];
const printForecast = function (arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  // const arr = arr1.concat(arr2);
  let max = parseFloat(arr3[0][0]);
  let min = parseFloat(arr3[0][0]);
  // const tempss = arr1[i];
  for (let i = 0; i < arr3.length; i++) {
    const temperature = parseFloat(arr3[i][0]);
    if (!isNaN(temperature)) {
      if (arr3[i] < min) min = temperature;
      if (arr3[i] > max) max = temperature;
    }
  }
  console.log(`The temprature is  ${max} `);
  console.log(`The temprature is ${min} `);
};
const arr1 = [[17], [21], [23]];
const arr2 = [[2], [5], [0], [-5], [4]];
console.log(`${arr1[0]}°C.. ${arr1[1]}°C ... ${arr1[2]}°C...`);
printForecast(arr1, arr2);

const arr1 = [17, 21, 23];
const arr2 = [2, 5, 0, -5, 4];
console.log(`${arr1[0]}°C.. ${arr1[1]}°C ... ${arr1[2]}°C...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(arr1);
