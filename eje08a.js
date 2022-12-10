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
// Day 8
// ********************************************************
const procesar = (items) => {
  const trees = [];
  const trees2 = [];

  items.forEach((item) => {
    const row = [];

    item.split("").forEach((tree) => {
      row.push(parseInt(tree));
    });

    trees.push(row);
  });

  let visibleTrees = 0;
  let highScore = 0;

  for (let i = 0; i < trees.length; i++) {
    const fila = [];
    for (let j = 0; j < trees[i].length; j++) {
      const visible = checkTree(i, j, trees, false);
      //console.log(i, j, visible);
      if (visible.visi) {
        visibleTrees++;
      }
      const dato = visible.visi ? "1" : "0";
      fila.push(dato);

      if (visible.dist > highScore) {
        highScore = visible.dist;
      }
    }

    trees2.push(fila);

    console.log(fila.join(""));
  }

  console.log("Visibles:", visibleTrees);
  console.log("highScore:", highScore);
  console.log("El 5 ", checkTree(3, 2, trees, true));
};

const checkTree = (i, j, trees, consolear) => {
  const height = trees.length - 1;
  const width = trees[i].length - 1;

  if (consolear) {
    console.log("CHECKEANDo", i, j, height, width);
  }

  //   if (i == 0 || i == height || j == 0 || j == width) {
  //     if (consolear) {
  //       console.log("EN BORDE", i, j, height, width);
  //     }
  //     return true;
  //   }

  // desde la derecha
  let derecha = true;
  let dereDist = 0;
  for (let x = j - 1; x >= 0; x--) {
    if (derecha) {
      dereDist++;
    }

    if (trees[i][j] <= trees[i][x]) {
      derecha = false;
    }
  }

  // desde la izquierda
  let izquierda = true;
  let izqDist = 0;
  for (let x = j + 1; x <= width; x++) {
    if (izquierda) {
      izqDist++;
    }

    if (trees[i][j] <= trees[i][x]) {
      izquierda = false;
    }
  }

  // desde la arriba
  let arriba = true;
  let arrDist = 0;
  for (let x = i - 1; x >= 0; x--) {
    if (arriba) {
      arrDist++;
    }
    if (trees[i][j] <= trees[x][j]) {
      arriba = false;
    }
  }

  // desde la abajo
  let abajo = true;
  let abaDist = 0;
  for (let x = i + 1; x <= height; x++) {
    if (abajo) {
      abaDist++;
    }

    if (trees[i][j] <= trees[x][j]) {
      abajo = false;
    }
  }

  if (consolear) {
    console.log("Derecha", derecha);
    console.log("Izquierda", izquierda);
    console.log("Arriba", arriba);
    console.log("Abajo", abajo);

    console.log("Dist Derecha", dereDist);
    console.log("Dist Izquierda", izqDist);
    console.log("Dist Arriba", arrDist);
    console.log("Dist Abajo", abaDist);
  }

  const visi = derecha || izquierda || arriba || abajo;
  const dist = dereDist * izqDist * arrDist * abaDist;
  return { visi, dist };
};
