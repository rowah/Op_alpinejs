const results = [1, 2, 2, 1, 1, 1, 1, 2];

let OneWin = 0;
let WinnerTwo = 0;
for (let i = 0; i < results.length; i++) {
  if (results[i] === 1) {
    OneWin++;
  } else {
    WinnerTwo++;
  }
}
console.log(WinnerTwo, OneWin);
if (OneWin > WinnerTwo) {
  console.log(OneWin);
} else {
  console.log(WinnerTwo);
}
