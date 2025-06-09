// function perkalianUnik(arr) {
//   let arrayBaru = [];
//   for (let i = 0; i < arr.length; i++) {
//     // let angkaYangDikali = arr[i];
//     let arrayMasuk = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i != j) {
//         arrayMasuk *= arr[j];
//       }
//     }
//     arrayBaru.push(arrayMasuk);
//   }
//   return arrayBaru;
// }

function perkalianUnik(arr) {
  let angka = 1;
  let arrayBaru = [];
  for (let i = 0; i < arr.length; i++) {
    angka *= arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    let angkaBaru = 1;
    angkaBaru = angka;
    angkaBaru /= arr[j];
    arrayBaru.push(angkaBaru);
  }
  return arrayBaru;
}
// dikasih best practice sama sir Harkon

console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
