function palindrome(kata) {
  let kataDibalik = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kataDibalik += kata[i];
  }
  if (kataDibalik === kata) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
