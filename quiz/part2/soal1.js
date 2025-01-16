// function palindrome(kata) {
//     let reverse = "";
//     for (let i = kata.length - 1; i >= 0; i--) {
//         reverse += kata[i];
//     }

//     console.log(reverse);
//     if (reverse === kata) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Cara kedua dari yang pernah kupelajari
function palindrome(kata) {
  let reverse = kata.split('').reverse().join('');
  return reverse === kata;
}


console.log(palindrome("katak"));