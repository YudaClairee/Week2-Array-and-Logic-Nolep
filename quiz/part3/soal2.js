function perkalianUnik(arr) {
  let hasil = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    hasil = 1;
    for (let j = 0; j < arr.length; j++) {
      if(i !== j) {
        hasil *= arr[j];
      }
    }
    result.push(hasil);
  }
  return result;
}

console.log(perkalianUnik([2, 4, 6])); 