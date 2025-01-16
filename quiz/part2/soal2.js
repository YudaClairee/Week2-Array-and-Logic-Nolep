function angkaPalindrome(num) {
  let angka = num.toString();
  let angkaBalik = '';
  for(let i = 0; i<num; i++) {
    angkaBalik = '';
    for(let j = angka.length-1; j>=0; j--) {
      angkaBalik += angka[j];
    }
    if(angka === angkaBalik) {
      return num;
    } else {
      num++;
      angka = num.toString();
    }
  }
}

console.log(angkaPalindrome(1000)); // 