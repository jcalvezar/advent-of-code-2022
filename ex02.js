const data = {
  x: { value: 1, a: 3, b: 1, c: 6 },
  y: { value: 2, a: 6, b: 3, c: 1 },
  z: { value: 3, a: 1, b: 6, c: 3 },
};

const estrategy = ["a y", "b x", "c z"];

estrategy.forEach((esta) => {
  console.log(esta);
});

// const score = estrategy.reduce((acc, curr) => {
//   console.log("Resu:", curr, acc);

//   const partes = curr.split(" ");
//   const me = partes[1];
//   const oppo = partes[0];

//   const resu = data[me].value + data[me][oppo];

//   //console.log("Resu:", curr, me, oppo, resu);
//   return resu + acc;
// }, 0);
