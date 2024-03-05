// EXAMPLE 1 - Convert UTC/GMT to local time using JavaScript

// 👇️ Example date and time in UTC
const utcDate = '2022-01-15T11:02:17Z';

const date = new Date(utcDate);

// 👇️ "Sat Jan 15 2022 13:02:17 GMT+0200 (Eastern European Standard Time)"
console.log(date);

// ✅ Convert to Local time
console.log(date.toLocaleString()); // 👉️ "1/15/2022, 1:02:17 PM"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get date and time components according to local time

// // 👇️ Example date and time in UTC
// const utcDate = '2022-01-15T11:02:17Z';

// const date = new Date(utcDate);

// // 👇️ returns Hour of the date
// console.log(date.getHours()); // 👉️ 13

// // 👇️ returns Minutes of the date
// console.log(date.getMinutes()); // 👉️ 2

// // 👇️ returns Seconds of the date
// console.log(date.getSeconds()); // 👉️ 17

// // 👇️ returns year of the date
// console.log(date.getFullYear()); // 👉️ 2022

// // 👇️ returns month (0-11)
// //    0 is January, 11 is December
// console.log(date.getMonth()); // 👉️ 0

// // 👇️ returns day of the month (1-31)
// console.log(date.getDate()); // 👉️ 15

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert local time to UTC using JavaScript

// const date = new Date();

// // 👇️ 2023-07-25T12:53:16.133Z
// console.log(date);

// const utcStr = date.toUTCString();
// console.log(utcStr); // 👉️ "Tue, 25 Jul 2023 12:53:16 GMT"

// // 👇️ "12:53:16"
// console.log(
//   [
//     padTo2Digits(date.getUTCHours()),
//     padTo2Digits(date.getUTCMinutes()),
//     padTo2Digits(date.getUTCSeconds()),
//   ].join(':'),
// );

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }
