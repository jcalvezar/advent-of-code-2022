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
const myDisk = [{ id_padre: null, nombre: "/", tipo: "dir", size: 0 }];

const procesar = (items) => {
  let actual = 0;

  items.forEach((item, i) => {
    if (item.substring(0, 4) == "$ cd") {
      const partes = item.split(" ");
      const dire = partes[2];
      console.log("DIRE", dire, "actual anterior", actual);

      if (dire == ".." && actual > 0) {
        actual = myDisk[actual].id_padre;
      } else {
        actual = myDisk.findIndex(
          (x) => x.nombre == dire && x.id_padre == actual
        );
      }

      if (actual < 0) {
        console.log("************************************");
        actual = 0;
      }
      console.log("CD ", actual, dire);
    }

    if (!item.includes("$")) {
      const partes = item.split(" ");
      if (partes[0] == "dir") {
        myDisk.push({
          id_padre: actual,
          nombre: partes[1],
          tipo: "dir",
          size: 0,
        });
      } else {
        myDisk.push({
          id_padre: actual,
          nombre: partes[1],
          tipo: "file",
          size: parseInt(partes[0]),
        });
      }
    }
  });

  console.log("Files:", myDisk);

  let bytesOccupied = 0;

  myDisk.forEach((file, idx) => {
    if (file.tipo == "dir") {
      const direSize = calcular(idx);
      file.size = direSize;
      console.log("DIRE ", file.nombre, "SIZE", direSize);
      if (direSize <= 100000) {
        bytesOccupied += direSize;
      }
    }
  });

  console.log("Calculo que es:", bytesOccupied);
  let totalByteOccupied = calcular(0);
  console.log("TOTAL ocupado es:", totalByteOccupied);

  const freeSpace = 70000000 - totalByteOccupied;
  const weNeed = 30000000 - freeSpace;

  console.log("Espacio Libre:", freeSpace);
  console.log("Necesito:", weNeed);

  console.log("RAiz SIZE", myDisk[0].size);

  const carpetas = [];

  myDisk.forEach((file, idx) => {
    if (file.tipo == "dir" && file.size >= weNeed) {
      carpetas.push(file);
      console.log("CARPETA PROBABLE", file);
    }
  });

  carpetas.sort((a, b) => a.size - b.size);

  console.log("Menor Carpeta", carpetas[0]);
};

const calcular = (idx) => {
  //console.log("Calculeando:", idx);
  let size = 0;

  myDisk.forEach((file, i) => {
    if (file.id_padre == idx) {
      if (file.tipo == "file") {
        size += file.size;
      } else {
        size += calcular(i);
      }
    }
  });

  return size;
};
