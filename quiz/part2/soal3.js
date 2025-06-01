function hitungJumlahKata(kalimat) {
  let memisahkanKalimat = kalimat.split(" ");
  console.log(memisahkanKalimat);
  let jumlahKata = 0;
  for (let i = 0; i < memisahkanKalimat.length; i++) {
    jumlahKata += 1;
  }
  return jumlahKata;
}

console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
