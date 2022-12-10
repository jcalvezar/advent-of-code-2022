var readline = require("readline");

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputNumbers = [];

r1.on("line", function (line) {
  // Put the number in an array

  // Stop when the array is 5 numbers long
  if (line.length == 0) {
    r1.close();
  } else {
    inputNumbers.push(line);
  }
});

r1.on("close", function () {
  // Put your algorithm here. You have access to inputNumbers
  // and can be assured all the inputs are in.
  procesar(inputNumbers);
});

// ********************************************************
// Day 4
// ********************************************************
const procesar = (items) => {
  const resu = items.reduce((acc, curr) => {
    const each = curr.split(",");
    const elf1 = each[0].split("-");
    const elf2 = each[1].split("-");
    const elf1a = parseInt(elf1[0]);
    const elf1b = parseInt(elf1[1]);

    const elf2a = parseInt(elf2[0]);
    const elf2b = parseInt(elf2[1]);

    console.log("Elf1:", elf1a, elf1b);
    console.log("Elf2:", elf2a, elf2b);

    if (elf1a <= elf2a && elf1b >= elf2b) {
      return acc + 1;
    }
    if (elf2a <= elf1a && elf2b >= elf1b) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log("Result:", resu);
};
