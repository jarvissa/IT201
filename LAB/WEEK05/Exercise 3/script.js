let number = prompt("Enter an integer value:");

if (!number.replace(/\s+/, "") || !Number.isInteger(+number)) {
  number = 0;
  alert("Invalid value. Number was set to 0.");
}

alert(number);
