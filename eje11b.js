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
let modulo = 1n;

const procesar = (items) => {
  const monkeys = buildMonkeys(items);

  modulo = monkeys.reduce((acc, curr) => {
    console.log("REDUCE ", acc, curr);
    return acc * curr.test;
  }, 1n);

  console.log(monkeys);

  for (let i = 0; i < 10000; i++) {
    console.log("RONDA:", i);
    ronda(i, monkeys);
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
    operand: 0,
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
    }

    if (element.includes("Starting")) {
      const partes = element.split(":");
      const myItems = partes[1].split(",");
      monkey.items = myItems.map((item) => BigInt(item));
    }

    if (element.includes("Operation")) {
      const partes = element.split(" ");
      monkey.operation = partes[partes.length - 2];
      const operand = partes[partes.length - 1];
      monkey.operand = operand == "old" ? "old" : BigInt(operand);
    }

    if (element.includes("Test")) {
      const partes = element.split(" ");
      monkey.test = BigInt(partes[partes.length - 1]);
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
    }
  });

  return monkeys;
};

const ronda = (iteracion, monkeys) => {
  monkeys.forEach((monkey, idx) => {
    monkey.items.forEach((old, idx2) => {
      console.log("OPERACION ", monkey.operation, monkey.operand);

      let nuevo = BigInt(0);

      //console.log("P1 ");
      let operando = 0;
      if (monkey.operand == "old") {
        operando = old;
      } else {
        operando = monkey.operand;
      }

      //console.log("OLD", old);
      //console.log("NEW", operando);

      if (monkey.operation == "+") {
        nuevo = old + operando;
      }
      if (monkey.operation == "*") {
        nuevo = old * operando;
      }

      //console.log("DIVISIBLE ");

      nuevo = nuevo % modulo;

      const mono = nuevo % monkey.test == 0n ? monkey.true : monkey.false;

      //console.log("PUSH ");

      monkeys[mono].items.push(nuevo);
      monkey.inspects++;

      console.log("Ronda ", iteracion, " Mono ", idx, " item ", idx2);
    });

    //monkey.items = [];
    monkey.items.splice(0, monkey.items.length);
  });
};

const arreglarCalculo = (calculo) => {
  const partes = calculo.split(" ");
  const nuevas = partes.map((parte) => {
    const nuevita =
      parte !== "old" &&
      parte !== "nuevo" &&
      parte !== "=" &&
      parte !== "+" &&
      parte !== "*"
        ? "BigInt(" + parte + ")"
        : parte;
    return nuevita;
  });

  const nueva = nuevas.join(" ");
  console.log(calculo, nueva);
  return nueva;
};
