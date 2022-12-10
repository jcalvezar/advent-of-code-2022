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
// Day 6
// ********************************************************
const procesar = (items) => {
  const myData = items[0];

  for (let i = 13; i < myData.length; i++) {
    const parte = myData.substring(i - 13, i + 1);
    console.log("parte", i, parte);

    if (isMarker(parte)) {
      console.log("Encontre ", i + 1);
      break;
    }
  }

  //console.log("resu", resu);
};

const isMarker = (cadena) => {
  console.log("checkeando", cadena);

  const nuevo = [];

  cadena.split("").forEach((element) => {
    if (!nuevo.includes(element)) {
      nuevo.push(element);
    }
  });

  if (nuevo.length == 14) {
    return true;
  } else {
    return false;
  }
};
