let number = prompt("Enter a natural number:");
let res = 0;

if (!number.replace(/\s+/, "") || !Number.isInteger(+number) || number < 1) {
  number = 1;
  alert("Invalid value. Number was set to 1.");
}

for (let i = 1; i <= number; i++) {
  res += i;
}

document.write("Result: " + res);
