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
// Day 9
// ********************************************************
const tails = [];
const head = { x: 0, y: 0 };
const tail = { x: 0, y: 0 };

const procesar = (items) => {
  const deltas = { x: 0, y: 0 };

  items.forEach((element) => {
    const partes = element.split(" ");
    const dir = partes[0];
    const steps = parseInt(partes[1]);

    switch (dir) {
      case "R":
        deltas.x = 1;
        deltas.y = 0;
        break;
      case "L":
        deltas.x = -1;
        deltas.y = 0;
        break;
      case "U":
        deltas.x = 0;
        deltas.y = -1;
        break;
      case "D":
        deltas.x = 0;
        deltas.y = 1;
    }

    for (let i = 0; i < steps; i++) {
      head.x += deltas.x;
      head.y += deltas.y;

      checkTail();
    }
  });

  console.log("Posis de Tail:", tails.length, tails);
};

const checkTail = () => {
  const deltas = { x: head.x - tail.x, y: head.y - tail.y };
  const newDeltas = {
    x: deltas.x !== 0 ? deltas.x / Math.abs(deltas.x) : 0,
    y: deltas.y !== 0 ? deltas.y / Math.abs(deltas.y) : 0,
  };

  if (Math.abs(deltas.x) > 1 || Math.abs(deltas.y) > 1) {
    // Debo mover Tail
    tail.x += newDeltas.x;
    tail.y += newDeltas.y;
  }

  const reTail = `${tail.x}-${tail.y}`;
  if (!tails.includes(reTail)) {
    tails.push(reTail);
  }

  console.log(head, tail, deltas, newDeltas);
};
