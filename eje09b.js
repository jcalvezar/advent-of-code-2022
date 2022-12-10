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
const heads = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

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
      heads[0].x += deltas.x;
      heads[0].y += deltas.y;

      checkTails();
    }
  });

  console.log("Posis de Tail:", tails.length, tails);
};

const checkTails = () => {
  for (let i = 1; i < 10; i++) {
    checkTail(i);
  }
};

const checkTail = (i) => {
  const deltas = {
    x: heads[i - 1].x - heads[i].x,
    y: heads[i - 1].y - heads[i].y,
  };
  const newDeltas = {
    x: deltas.x !== 0 ? deltas.x / Math.abs(deltas.x) : 0,
    y: deltas.y !== 0 ? deltas.y / Math.abs(deltas.y) : 0,
  };

  if (Math.abs(deltas.x) > 1 || Math.abs(deltas.y) > 1) {
    // Debo mover Tail
    heads[i].x += newDeltas.x;
    heads[i].y += newDeltas.y;
  }

  const reTail = `${heads[i].x}-${heads[i].y}`;

  if (i == 9) {
    if (!tails.includes(reTail)) {
      tails.push(reTail);
    }

    console.log(heads[0], heads[i], deltas, newDeltas);
  }
};
