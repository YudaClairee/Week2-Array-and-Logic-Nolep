function cariMean(arr) {
  let arrayBaru = 0;
  for (let i = 0; i < arr.length; i++) {
    arrayBaru += arr[i];
  }
  let mean = Math.round(arrayBaru / arr.length);
  return mean;
}

console.log(cariMean([1, 2, 3, 4, 5])); 