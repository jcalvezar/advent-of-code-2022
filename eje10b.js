var readline = require("readline");

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputNumbers = [];

r1.on("line", function (line) {
  // Put the number in an array

  // Stop when the array is 5 numbers long
  if (line == "end") {
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
// Day 10
// ********************************************************
const newCRT = [];

const procesar = (items) => {
  const resu = items.reduce(
    (acc, curr) => {
      let deltacycle = 1;
      let deltax = 0;
      if (curr.includes("addx")) {
        const partes = curr.split(" ");
        deltacycle = 2;
        deltax = parseInt(partes[1]);
      }

      for (let i = 0; i < deltacycle; i++) {
        acc.cycle++;

        acc.line = calcularCRT(acc.x, acc.line);
      }

      acc.x += deltax;

      return acc;
    },
    { cycle: 0, x: 1, line: "" }
  );

  console.log(newCRT);
};

const calcularCRT = (x, line) => {
  if (line.length > x - 2 && line.length < x + 2) {
    line += "#";
  } else {
    line += ".";
  }

  if (line.length == 40) {
    newCRT.push(line);
    line = "";
  }

  return line;
};
