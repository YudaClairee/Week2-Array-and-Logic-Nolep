function angkaPalindrome(num) {
  if (num < 10) {
    return num + 1;
  } else {
    let angkaConvert = num.toString();
    let angkaDibalik = "";
    for (let i = angkaConvert.length - 1; i >= 0; i--) {
      angkaDibalik += angkaConvert[i];
      if (angkaDibalik === angkaConvert) {
        return angkaDibalik;
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
