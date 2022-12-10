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
// Day 4
// ********************************************************
const procesar = (items) => {
  const stacks = procesarStacks(items);
  const moves = procesarMoves(items);

  moves.forEach((move) => {
    const partes = move.split(" ");
    const quant = parseInt(partes[1]);
    const from = parseInt(partes[3]) - 1;
    const to = parseInt(partes[5]) - 1;

    for (let i = 0; i < quant; i++) {
      stacks[to].push(stacks[from].pop());
    }
  });

  console.log("stacks:", stacks);

  const resu = stacks.reduce((acc, curr) => acc + curr.pop(), "");

  console.log("resu", resu);
};

const procesarStacks = (items) => {
  const stacks = [];

  items.forEach((element) => {
    const elems = [];

    if (element.includes("[")) {
      for (let i = 1; i < element.length; i = i + 4) {
        elems.push(element[i]);
      }

      elems.forEach((elem, i) => {
        //console.log("Elems:", i, elem);
        if (elem !== " ") {
          if (stacks[i]) {
            stacks[i].push(elem);
          } else {
            stacks[i] = [];
            stacks[i].push(elem);
          }
        }
      });
    }
  });

  const newStacks = stacks.map((stack) => stack.reverse());
  //console.log("stacks:", newStacks);

  return newStacks;
};

const procesarMoves = (items) => {
  const moves = [];

  items.forEach((element) => {
    if (element.includes("from")) {
      moves.push(element);
    }
  });

  console.log("procesarMoves:", moves);

  return moves;
};
