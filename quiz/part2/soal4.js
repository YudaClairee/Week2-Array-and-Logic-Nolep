function pasanganTerbesar(num) {
  let numStr = num.toString();
  let arrNum = [];
  for(let i = 0; i<numStr.length-1; i++) {
    arrNum.push(Number(numStr[i] + numStr[i+1]));
    console.log(arrNum);
  }
  arrNum.sort(function(a, b) { return b-a; });
  return arrNum[0];
}

console.log(pasanganTerbesar(641573));
