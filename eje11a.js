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
  const monkeys = buildMonkeys(items);

  console.log(monkeys);

  for (let i = 0; i < 20; i++) {
    ronda(monkeys);
  }

  const inspections = monkeys.map((monkey) => monkey.inspects);
  inspections.sort((a, b) => {
    return b - a;
  });

  console.log("Inspections", inspections);
  console.log("Monkey Bussiness", inspections[0] * inspections[1]);
};

const buildMonkeys = (items) => {
  const monkeys = [];
  const monkey = {
    items: [],
    operation: "",
    test: 0,
    true: 0,
    false: 0,
    inspects: 0,
  };
  let lastMonkey = -1;

  items.forEach((element) => {
    if (element.includes("Monkey")) {
      element.substring(0, element.length - 1);
      const partes = element.split(" ");
      lastMonkey = parseInt(partes[1]);

      console.log("Monkey:", lastMonkey);
    }

    if (element.includes("Starting")) {
      const partes = element.split(":");
      const myItems = partes[1].split(",");
      monkey.items = myItems.map((item) => parseInt(item));
    }

    if (element.includes("Operation")) {
      const partes = element.split(": ");
      monkey.operation = partes[1].replace("new", "nuevo");
    }

    if (element.includes("Test")) {
      const partes = element.split(" ");
      monkey.test = parseInt(partes[partes.length - 1]);
    }

    if (element.includes("true")) {
      const partes = element.split(" ");
      monkey.true = parseInt(partes[partes.length - 1]);
    }

    if (element.includes("false")) {
      const partes = element.split(" ");
      monkey.false = parseInt(partes[partes.length - 1]);
    }

    if (element == "") {
      const myMonkey = { ...monkey };
      monkeys.push(myMonkey);

      //console.log(monkey);
    }
  });

  return monkeys;
};

const ronda = (monkeys) => {
  monkeys.forEach((monkey) => {
    console.log(monkey.items);

    monkey.items.forEach((old) => {
      let nuevo = 0;
      eval(monkey.operation);

      const final = Math.floor(nuevo / 3);
      //const final = nuevo;

      const mono =
        final / monkey.test == Math.floor(final / monkey.test)
          ? monkey.true
          : monkey.false;

      monkeys[mono].items.push(final);
      monkey.inspects++;

      console.log(old, nuevo, final, mono, monkey.inspects);
    });

    monkey.items = [];
  });
};
