function angkaPalindrome(num) {
  num++;
  for (let i = 0; i < 100; i++) {
    let angkaDibalik = "";
    let angkaConvert = num.toString();
    for (let j = angkaConvert.length - 1; j >= 0; j--) {
      angkaDibalik = angkaDibalik + angkaConvert[j];
      if (angkaDibalik === angkaConvert) {
        return num;
      }
    }
    num++;
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
