function pasanganTerbesar(num) {
  let terbesar = 0;
  let angkaConvert = num.toString();
  for (let i = 0; i < angkaConvert.length - 1; i++) {
    let pasanganAngka = Number(angkaConvert[i] + angkaConvert[i + 1]);
    if (pasanganAngka > terbesar) {
      terbesar = pasanganAngka;
    }
  }
  return terbesar;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
