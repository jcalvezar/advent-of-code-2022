const data = {
  X: { value: 1, A: 3, B: 0, C: 6 },
  Y: { value: 2, A: 6, B: 3, C: 0 },
  Z: { value: 3, A: 0, B: 6, C: 3 },
};

const estrategy = [
  "A Z",
  "C Z",
  "A X",
  "B Z",
  "C X",
  "A X",
  "A X",
  "A Z",
  "C Y",
  "A X",
  "C Z",
  "C Y",
  "B Z",
  "B X",
  "A X",
  "B X",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "B Y",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C X",
  "A Y",
  "B Y",
  "C Y",
  "C Z",
  "B Y",
  "B X",
  "C Z",
  "B Z",
  "B Y",
  "B Y",
  "C Z",
  "C X",
  "C Y",
  "B Z",
  "B Z",
  "A X",
  "A X",
  "C Z",
  "C X",
  "A X",
  "B Z",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "A X",
  "A X",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "B Z",
  "A X",
  "B Y",
  "C Z",
  "C X",
  "B Z",
  "C X",
  "C Y",
  "B Z",
  "A X",
  "B Z",
  "A Z",
  "C X",
  "B Z",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "C Y",
  "C Z",
  "C Y",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "B Z",
  "B X",
  "C X",
  "C Z",
  "C Z",
  "A Y",
  "C Z",
  "C X",
  "B Y",
  "B Z",
  "C Z",
  "C X",
  "B Z",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "B X",
  "A X",
  "B Z",
  "B Y",
  "B Z",
  "C X",
  "C Y",
  "B Z",
  "A X",
  "A X",
  "A Z",
  "C X",
  "C Z",
  "B Z",
  "C Z",
  "C X",
  "A X",
  "A X",
  "A X",
  "C Z",
  "B Z",
  "A Z",
  "C Z",
  "C X",
  "B Z",
  "B Z",
  "C X",
  "B X",
  "C X",
  "C X",
  "C X",
  "B Z",
  "C X",
  "B Z",
  "A X",
  "A Z",
  "A Z",
  "C Z",
  "C Y",
  "C Z",
  "B Y",
  "C Z",
  "C Z",
  "C X",
  "C X",
  "A X",
  "C Z",
  "A Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "B Z",
  "A Z",
  "C X",
  "B Z",
  "C Z",
  "C X",
  "C Y",
  "C Y",
  "B Y",
  "B Z",
  "C Y",
  "C Z",
  "B Z",
  "C Z",
  "B Z",
  "C X",
  "A X",
  "B X",
  "C Y",
  "B Z",
  "C Z",
  "B X",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "C X",
  "B Y",
  "A X",
  "C Y",
  "C Z",
  "B X",
  "A Z",
  "C Z",
  "C X",
  "B Y",
  "A Y",
  "C Z",
  "C Z",
  "B Y",
  "A X",
  "A Z",
  "B Y",
  "C Z",
  "B X",
  "C Z",
  "C Z",
  "B X",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "A X",
  "C X",
  "B Z",
  "C Y",
  "C Z",
  "A Z",
  "B Z",
  "A X",
  "A X",
  "C X",
  "A Y",
  "C Y",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "B Y",
  "A X",
  "A Z",
  "B Y",
  "C Z",
  "C X",
  "C X",
  "B Z",
  "C X",
  "A Z",
  "A X",
  "C Z",
  "B X",
  "B Z",
  "A Z",
  "B X",
  "A X",
  "A X",
  "B Z",
  "B Y",
  "B Y",
  "C X",
  "C Z",
  "C Z",
  "C Y",
  "C X",
  "C Z",
  "C Z",
  "B X",
  "A X",
  "B X",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "A Z",
  "B Z",
  "B Z",
  "C Z",
  "A Z",
  "A Z",
  "C X",
  "B Z",
  "A X",
  "C X",
  "A X",
  "C Z",
  "A X",
  "C Z",
  "B X",
  "C X",
  "B Z",
  "A Y",
  "C Z",
  "B X",
  "C Y",
  "C X",
  "B Z",
  "C Y",
  "C Z",
  "B X",
  "B X",
  "B Z",
  "C X",
  "C Z",
  "B Z",
  "C Z",
  "C X",
  "A X",
  "A X",
  "C Y",
  "B X",
  "A Z",
  "B Y",
  "C X",
  "B Y",
  "C Z",
  "B Y",
  "B Z",
  "C Y",
  "C Z",
  "A Z",
  "C X",
  "C X",
  "C X",
  "C Z",
  "A Y",
  "A Z",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "B Z",
  "A Z",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "B X",
  "C Z",
  "C X",
  "C Z",
  "A X",
  "B X",
  "C Z",
  "C X",
  "B Z",
  "C Y",
  "A Y",
  "A X",
  "C X",
  "A X",
  "B X",
  "C X",
  "C Z",
  "A Z",
  "C Z",
  "C Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "B Y",
  "C X",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "C X",
  "C Y",
  "B X",
  "A Y",
  "A Y",
  "C Y",
  "B Y",
  "C X",
  "B Y",
  "C X",
  "A X",
  "C Z",
  "C X",
  "C X",
  "B Z",
  "C X",
  "B Z",
  "C Z",
  "C Z",
  "A X",
  "B Y",
  "C X",
  "C Z",
  "B X",
  "C Z",
  "C Y",
  "B Z",
  "A X",
  "B Z",
  "B Z",
  "B X",
  "A Z",
  "A X",
  "C Z",
  "A Y",
  "A X",
  "A X",
  "C Y",
  "B Y",
  "C X",
  "B Y",
  "B X",
  "A X",
  "C Y",
  "A X",
  "B Z",
  "B Y",
  "B Y",
  "A X",
  "A X",
  "A Z",
  "C X",
  "A X",
  "C Y",
  "A X",
  "A X",
  "C Y",
  "C Z",
  "B Z",
  "B Y",
  "B X",
  "A X",
  "A X",
  "B Z",
  "C Z",
  "B X",
  "A Y",
  "A Z",
  "C Y",
  "A X",
  "C Z",
  "C X",
  "A Z",
  "C Z",
  "C Z",
  "C Y",
  "C X",
  "C Z",
  "A Z",
  "C Y",
  "C Z",
  "C Z",
  "C Z",
  "C X",
  "C Z",
  "A X",
  "C Y",
  "B Y",
  "C Y",
  "B Y",
  "A X",
  "B Y",
  "B Z",
  "B Z",
  "B X",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "A Z",
  "A Z",
  "C X",
  "B Y",
  "B Y",
  "C Z",
  "C X",
  "C Z",
  "A Z",
  "A X",
  "C Y",
  "C Z",
  "B Z",
  "C Z",
  "A X",
  "B Z",
  "A X",
  "A Z",
  "A X",
  "A X",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "C X",
  "A X",
  "B X",
  "A X",
  "A X",
  "A Z",
  "C Y",
  "B Y",
  "B X",
  "A X",
  "C X",
  "B Y",
  "C Z",
  "B X",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "C Y",
  "C Y",
  "A X",
  "A Z",
  "C X",
  "A X",
  "C Z",
  "A Z",
  "B X",
  "C X",
  "A X",
  "B Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "B Z",
  "C X",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "B Z",
  "A X",
  "A X",
  "A Z",
  "C Z",
  "C X",
  "A X",
  "B X",
  "A Z",
  "C X",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "A Z",
  "A Z",
  "B Z",
  "C X",
  "A X",
  "A X",
  "A X",
  "C X",
  "C X",
  "C X",
  "C X",
  "B X",
  "C X",
  "B Y",
  "C Z",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "C Z",
  "B Y",
  "C Y",
  "C X",
  "A Z",
  "C Y",
  "C Z",
  "A X",
  "C X",
  "C Z",
  "C Z",
  "A X",
  "C Y",
  "B Y",
  "C X",
  "C Z",
  "C X",
  "B X",
  "C Z",
  "B Z",
  "B Y",
  "A X",
  "C X",
  "C Z",
  "B Z",
  "B X",
  "A Z",
  "C Y",
  "C X",
  "C Y",
  "B Z",
  "A Z",
  "C X",
  "C X",
  "A X",
  "A Y",
  "B Y",
  "C Y",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "A X",
  "A X",
  "B X",
  "B Y",
  "A Z",
  "C Z",
  "C Y",
  "B Z",
  "C Z",
  "C X",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "C Y",
  "C X",
  "C X",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "C X",
  "B X",
  "C X",
  "B Y",
  "A X",
  "C X",
  "A X",
  "C Y",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "B Z",
  "A X",
  "C Z",
  "C X",
  "C Z",
  "C Y",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "B Z",
  "C X",
  "B X",
  "C Z",
  "C Y",
  "B X",
  "C Z",
  "C Y",
  "A X",
  "B Z",
  "B Z",
  "C Y",
  "B Y",
  "B X",
  "C Y",
  "C X",
  "C X",
  "B Z",
  "B Y",
  "C X",
  "C Z",
  "B Z",
  "C Y",
  "C X",
  "C Z",
  "C Y",
  "B Z",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "C Z",
  "C Z",
  "C Z",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "C Z",
  "C X",
  "A Z",
  "B Z",
  "B X",
  "C X",
  "C Z",
  "A Z",
  "C X",
  "C Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "B Z",
  "C Z",
  "B Y",
  "A X",
  "A X",
  "A Z",
  "B Z",
  "A Z",
  "A X",
  "B Z",
  "C X",
  "B Z",
  "B Z",
  "B Y",
  "A X",
  "B X",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "B Z",
  "C X",
  "A X",
  "B Z",
  "B Z",
  "C Z",
  "B Y",
  "C Z",
  "B Z",
  "B Y",
  "C X",
  "A Z",
  "B Y",
  "A X",
  "A X",
  "C X",
  "C Z",
  "A Z",
  "C X",
  "C Z",
  "A Z",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "C Y",
  "C Z",
  "A X",
  "C X",
  "C Z",
  "B Y",
  "B Z",
  "A X",
  "C X",
  "B Z",
  "C X",
  "B Z",
  "C Z",
  "C Y",
  "C Z",
  "B Z",
  "C X",
  "A Z",
  "C Z",
  "C Z",
  "B Z",
  "B X",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "A Z",
  "C X",
  "B Z",
  "C Y",
  "B X",
  "C Z",
  "A X",
  "B Y",
  "C Z",
  "B X",
  "B X",
  "C X",
  "A Z",
  "C X",
  "C X",
  "C Z",
  "A Y",
  "C Y",
  "C Z",
  "B Z",
  "A X",
  "B Z",
  "C Z",
  "A Z",
  "C Y",
  "B Z",
  "B Z",
  "C X",
  "C Z",
  "A Z",
  "C X",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "C X",
  "A Z",
  "B Y",
  "B Z",
  "A X",
  "C Y",
  "C Z",
  "B Z",
  "B Z",
  "A X",
  "B Z",
  "A Z",
  "C Z",
  "C Z",
  "A X",
  "C X",
  "A Y",
  "C Z",
  "C X",
  "C Z",
  "B Y",
  "C Y",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "A Z",
  "A X",
  "C Z",
  "C Z",
  "C Y",
  "C Z",
  "A X",
  "B Z",
  "A X",
  "B Y",
  "C X",
  "B Z",
  "C X",
  "B X",
  "A X",
  "B Y",
  "A Y",
  "C X",
  "B Y",
  "B Y",
  "B Z",
  "C Z",
  "A Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "A X",
  "B Z",
  "A X",
  "A X",
  "B Y",
  "B Z",
  "A Y",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "A Z",
  "C Y",
  "B Z",
  "C X",
  "C Y",
  "B Z",
  "B X",
  "A X",
  "C Z",
  "C X",
  "A Z",
  "A Z",
  "C Z",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "A Z",
  "A Z",
  "C Z",
  "C Z",
  "A X",
  "B X",
  "B Z",
  "C X",
  "A Y",
  "C Z",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "A X",
  "A Z",
  "C X",
  "B Z",
  "C X",
  "C Z",
  "C X",
  "A X",
  "B X",
  "C X",
  "B Z",
  "C X",
  "A Z",
  "C Z",
  "B X",
  "C Z",
  "B Y",
  "A X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "A X",
  "A X",
  "C X",
  "B Z",
  "C Z",
  "B Z",
  "A Z",
  "C Z",
  "A Z",
  "C Z",
  "C Y",
  "A Z",
  "A X",
  "B Y",
  "A X",
  "B X",
  "C X",
  "C Z",
  "C Y",
  "C X",
  "C Z",
  "C X",
  "C X",
  "B X",
  "B Z",
  "B Y",
  "C Y",
  "C Z",
  "C X",
  "C Y",
  "C X",
  "C X",
  "C Z",
  "C Y",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C Y",
  "C Z",
  "B X",
  "A Y",
  "C X",
  "B X",
  "A Z",
  "C Z",
  "C X",
  "C Y",
  "B X",
  "C Z",
  "A X",
  "B Z",
  "B Z",
  "A X",
  "A X",
  "B Z",
  "B Z",
  "A Z",
  "A X",
  "B X",
  "C Y",
  "A Z",
  "C Z",
  "B Z",
  "A X",
  "B X",
  "B Z",
  "A X",
  "A Z",
  "C Y",
  "B X",
  "B Y",
  "C Z",
  "C X",
  "A Z",
  "C Z",
  "C Z",
  "C Z",
  "B Y",
  "B X",
  "A Z",
  "B Y",
  "A X",
  "A Z",
  "B Z",
  "C X",
  "A X",
  "C X",
  "B Y",
  "A Z",
  "C X",
  "C X",
  "A X",
  "A X",
  "A X",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "A X",
  "B Z",
  "C Z",
  "B Z",
  "C X",
  "B Y",
  "C Z",
  "A X",
  "C Z",
  "A X",
  "A Z",
  "C Z",
  "B Z",
  "C Z",
  "B Y",
  "A X",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "C X",
  "C Y",
  "B Y",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "B Y",
  "C Y",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C X",
  "A Y",
  "B Y",
  "C Y",
  "A X",
  "A Z",
  "C Z",
  "B Z",
  "C Z",
  "B Z",
  "A X",
  "A X",
  "C Z",
  "C X",
  "B Z",
  "B Z",
  "A Z",
  "C Z",
  "A Z",
  "C Y",
  "B X",
  "C Z",
  "A X",
  "B Y",
  "A X",
  "C Z",
  "C Z",
  "A Z",
  "A Z",
  "A X",
  "C Z",
  "B Z",
  "C Z",
  "B Y",
  "A X",
  "C Z",
  "B Z",
  "B Z",
  "A X",
  "A X",
  "C X",
  "B X",
  "B X",
  "B Z",
  "A Z",
  "C Z",
  "C X",
  "C Y",
  "B Z",
  "C X",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "B Y",
  "C Z",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "C X",
  "A X",
  "B Y",
  "C Z",
  "C Z",
  "A X",
  "B Y",
  "B Y",
  "B Y",
  "B Z",
  "A X",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "A Z",
  "C X",
  "C Y",
  "C X",
  "B Z",
  "A X",
  "C Z",
  "C X",
  "A Z",
  "A Z",
  "C Z",
  "B Z",
  "B Z",
  "C X",
  "B Z",
  "C X",
  "B Z",
  "C X",
  "C X",
  "B Y",
  "C Z",
  "C Y",
  "B Z",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C X",
  "A X",
  "C Y",
  "C X",
  "A X",
  "B Z",
  "A Z",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "A Z",
  "B Z",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "A Z",
  "C Z",
  "A X",
  "C Z",
  "A Z",
  "C Z",
  "A X",
  "B Y",
  "C X",
  "A X",
  "C Z",
  "B Z",
  "A X",
  "B Y",
  "A Z",
  "C Z",
  "C Z",
  "B Y",
  "A X",
  "B Z",
  "A X",
  "B Z",
  "C Z",
  "C X",
  "B Z",
  "C Z",
  "B Z",
  "C X",
  "B Y",
  "B X",
  "C Y",
  "A Z",
  "C Y",
  "C X",
  "C Y",
  "C X",
  "C X",
  "A Z",
  "B Z",
  "A Z",
  "A X",
  "A X",
  "A X",
  "C X",
  "C Z",
  "A X",
  "B X",
  "A X",
  "C X",
  "B Z",
  "C Z",
  "C Y",
  "A Z",
  "C X",
  "C Z",
  "B Y",
  "B Z",
  "A X",
  "A Z",
  "C Z",
  "C X",
  "B Y",
  "A X",
  "B Y",
  "C Y",
  "A X",
  "A Z",
  "B Z",
  "C Z",
  "C Z",
  "A Z",
  "C Z",
  "C X",
  "C Y",
  "C X",
  "C X",
  "C Y",
  "A X",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "A Z",
  "C Z",
  "C Z",
  "C Y",
  "C Z",
  "B Y",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "A X",
  "A Z",
  "B Z",
  "B Y",
  "A X",
  "C X",
  "C Y",
  "A X",
  "B X",
  "C X",
  "C X",
  "A Z",
  "C X",
  "C Y",
  "B X",
  "C Z",
  "A Z",
  "C X",
  "A X",
  "B Z",
  "C Y",
  "C Z",
  "C X",
  "A Y",
  "C Z",
  "C Y",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "A X",
  "B X",
  "A X",
  "B Y",
  "B Z",
  "B Z",
  "C X",
  "C X",
  "C Z",
  "A Z",
  "A X",
  "B X",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "C Z",
  "B Z",
  "C X",
  "C X",
  "B Z",
  "C Y",
  "B Z",
  "C X",
  "B X",
  "C X",
  "A Z",
  "A X",
  "C Z",
  "C Z",
  "B Y",
  "A X",
  "A Y",
  "C Z",
  "A Z",
  "C X",
  "B Y",
  "C X",
  "A Z",
  "B Y",
  "B X",
  "C Z",
  "C X",
  "B Y",
  "C Z",
  "B Z",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "A X",
  "C X",
  "C X",
  "B Z",
  "C Z",
  "A X",
  "C X",
  "C X",
  "A Z",
  "C Z",
  "C Z",
  "B Y",
  "B Z",
  "B X",
  "C Z",
  "A X",
  "A X",
  "B Y",
  "C X",
  "C X",
  "B Y",
  "C Z",
  "A Z",
  "B Y",
  "B Y",
  "C X",
  "C X",
  "C X",
  "C X",
  "A X",
  "B Z",
  "B Y",
  "B Z",
  "C X",
  "C Z",
  "B Z",
  "B Y",
  "C Z",
  "B Z",
  "A X",
  "C X",
  "C X",
  "C Z",
  "A X",
  "C X",
  "C X",
  "C Z",
  "C Y",
  "B X",
  "C X",
  "C Y",
  "B Z",
  "C X",
  "C Y",
  "C Z",
  "C Z",
  "A Z",
  "B X",
  "C Z",
  "B X",
  "A Z",
  "C Z",
  "C X",
  "C X",
  "A Z",
  "C X",
  "B Z",
  "A Z",
  "C X",
  "C X",
  "B X",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "C Z",
  "B Z",
  "B Y",
  "C X",
  "C Y",
  "C Z",
  "C Z",
  "A Z",
  "C Z",
  "C Y",
  "C Y",
  "A X",
  "C Z",
  "A X",
  "B Z",
  "B Z",
  "C Z",
  "B X",
  "B Z",
  "A Z",
  "A Z",
  "B Z",
  "B Y",
  "B Z",
  "C X",
  "B Y",
  "B Z",
  "A X",
  "B X",
  "C Y",
  "A X",
  "C Z",
  "B Z",
  "C X",
  "A X",
  "B X",
  "C Y",
  "B Z",
  "C Z",
  "A X",
  "C X",
  "B Z",
  "C X",
  "A Z",
  "C X",
  "C Z",
  "C Z",
  "B X",
  "C X",
  "A Z",
  "C X",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "B Z",
  "C Z",
  "B X",
  "C X",
  "C Z",
  "B Z",
  "B Z",
  "A X",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "C X",
  "C Z",
  "B Z",
  "C Y",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "B X",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "B Y",
  "B Z",
  "B Z",
  "B Z",
  "C Z",
  "B X",
  "C X",
  "B Z",
  "A X",
  "C X",
  "A X",
  "C X",
  "C X",
  "A Z",
  "B Y",
  "B X",
  "A X",
  "C Z",
  "B Y",
  "C X",
  "A X",
  "B Z",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "A Y",
  "A Z",
  "C X",
  "C Y",
  "A Y",
  "C X",
  "B Y",
  "C X",
  "C Y",
  "C Z",
  "B Z",
  "C Z",
  "B Z",
  "B X",
  "C Z",
  "B X",
  "B X",
  "C Z",
  "A Z",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "B Z",
  "C X",
  "C Z",
  "C Z",
  "C Z",
  "C Z",
  "A Z",
  "C Z",
  "B Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "B X",
  "C Z",
  "A X",
  "C X",
  "B Z",
  "C X",
  "C Z",
  "B Y",
  "C Z",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "C X",
  "C X",
  "B Z",
  "C Y",
  "C Z",
  "B Z",
  "A X",
  "C X",
  "C X",
  "C X",
  "C Z",
  "A Z",
  "A Z",
  "B Y",
  "B Z",
  "B Z",
  "C X",
  "A X",
  "C X",
  "C X",
  "A X",
  "B X",
  "B Z",
  "B Z",
  "C X",
  "C Z",
  "C Z",
  "C X",
  "B X",
  "A X",
  "A Z",
  "C X",
  "C Z",
  "B Z",
  "B Y",
  "C Z",
  "A X",
  "B X",
  "B Z",
  "C Z",
  "C Y",
  "C Z",
  "C X",
  "C Z",
  "C Z",
  "B Z",
  "C Y",
  "C X",
  "A X",
  "B Z",
  "C Y",
  "A Z",
  "C Z",
  "B Y",
  "A X",
  "A Z",
  "A X",
  "C Z",
  "C Y",
  "C Z",
  "C Y",
  "A Z",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "C X",
  "C Z",
  "C Y",
  "C Z",
  "C Z",
  "B Y",
  "A X",
  "B Z",
  "C Z",
  "C X",
  "C X",
  "A Z",
  "B Z",
  "B Z",
  "B Y",
  "B Z",
  "C Y",
  "B Z",
  "C Z",
  "A X",
  "C X",
  "C X",
  "B X",
  "C Z",
  "A X",
  "C Y",
  "B X",
  "C Z",
  "C Z",
  "B Y",
  "C Z",
  "B Y",
  "C Z",
  "A Z",
  "C Z",
  "B Y",
  "A X",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "B Y",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "A X",
  "B Z",
  "C X",
  "C Y",
  "A Z",
  "B Z",
  "C X",
  "A Z",
  "C Y",
  "B Y",
  "C Y",
  "C Z",
  "C Z",
  "A Z",
  "A Z",
  "C X",
  "B Y",
  "C Z",
  "B Z",
  "A X",
  "B Z",
  "A X",
  "C X",
  "C Z",
  "B Z",
  "C X",
  "B Z",
  "C X",
  "A Y",
  "C Z",
  "B Z",
  "C X",
  "C X",
  "C X",
  "B X",
  "B Y",
  "A Y",
  "B Z",
  "A X",
  "C X",
  "C Z",
  "B Y",
  "C Z",
  "C Z",
  "B X",
  "B X",
  "A Y",
  "C X",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "B Z",
  "B X",
  "A X",
  "B X",
  "A Z",
  "B X",
  "C Z",
  "C Z",
  "A Z",
  "C X",
  "C X",
  "A X",
  "C Z",
  "C X",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "A Z",
  "C Z",
  "A Z",
  "C Z",
  "B Z",
  "C Z",
  "C Y",
  "C X",
  "C Z",
  "B Z",
  "B Z",
  "C Y",
  "B Y",
  "C X",
  "C Y",
  "A Z",
  "A X",
  "A X",
  "A Z",
  "C X",
  "C X",
  "C Z",
  "C Z",
  "B Z",
  "C Z",
  "A X",
  "C Z",
  "C X",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "B X",
  "B Z",
  "A X",
  "C Z",
  "B Z",
  "A Z",
  "C X",
  "C X",
  "A Z",
  "C Y",
  "B Y",
  "C X",
  "B Z",
  "C X",
  "C Z",
  "B Y",
  "A Y",
  "B Y",
  "A X",
  "C Y",
  "C X",
  "C Z",
  "A X",
  "A Z",
  "B Z",
  "B Y",
  "C Y",
  "B Z",
  "A Y",
  "B X",
  "C Z",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "C Y",
  "A Z",
  "B Z",
  "C Z",
  "A Z",
  "C Y",
  "C Z",
  "B X",
  "C X",
  "A Z",
  "C Z",
  "B Z",
  "A X",
  "B Y",
  "C X",
  "A X",
  "B Y",
  "C Z",
  "B Z",
  "C Z",
  "C Y",
  "A Z",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "A X",
  "C Z",
  "C Z",
  "A Z",
  "C X",
  "C Z",
  "A X",
  "C Z",
  "C Z",
  "C Z",
  "C Y",
  "A X",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "B Y",
  "C Z",
  "A X",
  "C Y",
  "B Z",
  "C Z",
  "A X",
  "C Y",
  "A Z",
  "C X",
  "B Y",
  "C X",
  "B Z",
  "C Y",
  "A Z",
  "C X",
  "C X",
  "C Y",
  "C X",
  "A X",
  "B Z",
  "C X",
  "C X",
  "C X",
  "B Z",
  "B Y",
  "B Z",
  "C X",
  "B Y",
  "C Z",
  "A X",
  "C Z",
  "A Z",
  "C Y",
  "C X",
  "C Z",
  "A Z",
  "B Z",
  "B Z",
  "C X",
  "A Z",
  "A X",
  "C Z",
  "B X",
  "A X",
  "A X",
  "B X",
  "C X",
  "C X",
  "A Z",
  "B Z",
  "C Z",
  "C X",
  "B Z",
  "A Z",
  "A Z",
  "C Z",
  "C X",
  "B Y",
  "C X",
  "C X",
  "C X",
  "C Z",
  "C X",
  "A X",
  "C X",
  "C Y",
  "C Z",
  "A X",
  "C Y",
  "B Z",
  "B Z",
  "A X",
  "C Z",
  "B Z",
  "B Y",
  "C Y",
  "C X",
  "A Z",
  "B Y",
  "A X",
  "A Z",
  "B Z",
  "C X",
  "B Z",
  "A Z",
  "C Y",
  "C X",
  "C X",
  "C Z",
  "B X",
  "A X",
  "C Z",
  "C Z",
  "C X",
  "B Y",
  "C Z",
  "A Z",
  "C Z",
  "C Z",
  "B Z",
  "C X",
  "C X",
  "C Z",
  "B Z",
  "C Z",
  "B Y",
  "B Z",
  "A X",
  "B Z",
  "A X",
  "B Z",
  "B Z",
  "C Z",
  "A Z",
  "A X",
  "A X",
  "B Y",
  "C Z",
  "A Y",
  "B Z",
  "C Z",
  "A Z",
  "A Y",
  "C Z",
  "C Z",
  "A X",
  "C Y",
  "C Z",
  "C Z",
  "A Z",
  "C Y",
  "C Z",
  "A X",
  "B Y",
  "C Z",
  "A X",
  "B X",
  "C X",
  "A Z",
  "C Z",
  "A Z",
  "C Y",
  "C Z",
  "C Y",
  "A X",
  "C X",
  "B Z",
  "B X",
  "C Z",
  "C Z",
  "B Z",
  "C Z",
  "C Y",
  "C X",
  "B Z",
  "A X",
  "C Y",
  "B Z",
  "A Z",
  "C Z",
  "C X",
  "B X",
  "C Z",
  "C Z",
  "C Z",
  "A X",
  "C X",
  "B X",
  "C Y",
  "A X",
  "A Z",
  "C X",
  "C Y",
  "C X",
  "C X",
  "A Z",
  "A Z",
  "C X",
  "C X",
  "C X",
  "A X",
  "A X",
  "C X",
  "A X",
  "A X",
  "A X",
  "C Z",
  "B Z",
  "C Y",
  "C Z",
  "C Z",
  "C X",
  "C Y",
  "A X",
  "B Z",
  "C Y",
  "B Y",
  "A X",
  "A X",
  "A Z",
  "A Z",
  "C Y",
  "C Y",
  "C X",
  "C Z",
  "A X",
  "A X",
  "C Z",
  "C Z",
  "B Z",
  "B Z",
  "C Z",
  "A X",
  "C X",
  "C X",
  "C X",
  "A Z",
  "C Z",
  "A Z",
  "B Y",
  "B Y",
  "C X",
  "B Z",
  "B Z",
  "C Z",
  "C Z",
  "B Z",
  "C Y",
  "B Z",
  "B X",
  "B Z",
  "C Z",
  "A Z",
  "A X",
  "C X",
  "A Y",
  "C Z",
  "A X",
  "C X",
  "A X",
  "B X",
  "C X",
  "B Z",
  "A X",
  "C Z",
  "B Z",
  "C X",
  "B Z",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "B Z",
  "C Z",
  "A Z",
  "A X",
  "A Z",
  "C Z",
  "C Z",
  "B X",
  "C Z",
  "A Z",
  "B Y",
  "C Z",
  "B X",
  "B Z",
  "C X",
  "B X",
  "A Z",
  "C Z",
  "C X",
  "A Y",
  "A X",
  "C X",
  "B Z",
  "C X",
  "C Y",
  "C Y",
  "C X",
  "C Y",
  "C Y",
  "B X",
  "B Z",
  "A X",
  "B Y",
  "B Z",
  "C Z",
  "B Z",
  "C Z",
  "C Z",
  "B Z",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "C X",
  "C X",
  "A X",
  "C X",
  "B Y",
  "B X",
  "C Z",
  "B Z",
  "A X",
  "A Z",
  "A Y",
  "C Z",
  "A Z",
  "B Z",
  "A Z",
  "C X",
  "C X",
  "A Y",
  "C X",
  "B Z",
  "B Y",
  "B Y",
  "C Z",
  "B X",
  "B Z",
  "A X",
  "B Y",
  "C Z",
  "C Z",
  "A X",
  "B Y",
  "A Z",
  "C Z",
  "C Z",
  "B Z",
  "A Z",
  "C Z",
  "B Z",
  "C Y",
  "C X",
  "B Z",
  "A Z",
  "A X",
  "A X",
  "A X",
  "C Z",
  "A Z",
  "A X",
  "C Y",
  "C Y",
  "B Z",
  "C Z",
  "B Y",
  "C X",
  "B Z",
  "C X",
  "B Z",
  "B Y",
  "C Z",
  "A X",
  "A X",
  "B Z",
  "A Z",
  "B Z",
  "C Z",
  "C Z",
  "A X",
  "C X",
  "C Z",
  "A Z",
  "A X",
  "C Z",
  "C X",
  "B Z",
  "C Z",
  "A Z",
  "C Z",
  "B X",
  "B Z",
  "A X",
  "C Z",
  "C Z",
  "A X",
  "C X",
  "A Z",
  "C Z",
  "A X",
  "C Z",
  "A Z",
  "C X",
  "C X",
  "B Z",
  "C Z",
  "C X",
  "B X",
  "A X",
  "B Z",
  "B Y",
  "B X",
  "C Z",
  "B X",
  "B Z",
  "C X",
  "C Z",
  "B Z",
  "A Z",
  "C Z",
  "B Z",
  "C Z",
  "B X",
  "B Y",
  "C Z",
  "C Y",
  "C Z",
  "B Y",
  "B Z",
  "C Z",
  "A X",
  "C X",
  "C X",
  "B Z",
  "B Z",
  "A X",
  "A Y",
  "A Z",
  "C X",
  "B X",
  "C Z",
  "C X",
  "B Z",
  "C X",
  "A X",
  "A X",
  "B Z",
  "B Y",
  "B Z",
  "B Y",
  "C Y",
  "C Z",
  "B Z",
  "C Y",
  "B Z",
  "C X",
  "A X",
  "B Y",
  "C Z",
  "A X",
  "A X",
  "C X",
  "C Z",
  "B Z",
  "C Y",
  "C Z",
  "C X",
  "C X",
  "C Z",
  "C X",
  "B Z",
  "C Y",
  "C Z",
  "A X",
  "C X",
  "B X",
  "A X",
  "B X",
  "C X",
  "C Z",
  "A Z",
  "A X",
  "A Z",
  "A X",
  "A X",
  "A X",
  "A Y",
  "A X",
  "B Z",
  "B Y",
  "A X",
  "C Z",
  "A Z",
  "C X",
  "C Z",
  "A Z",
  "A Y",
  "C Z",
  "B Z",
  "B Z",
  "B Z",
  "C X",
  "A X",
  "A X",
  "C Z",
  "C X",
  "A X",
  "C Z",
  "C X",
  "A X",
  "C Y",
  "B Z",
  "C Z",
  "C X",
  "C X",
  "C X",
  "C Z",
  "C X",
  "C Y",
  "B Y",
  "C X",
  "B Y",
  "B Z",
  "C X",
  "C Z",
  "A X",
  "B Z",
  "C Z",
  "C X",
  "A Y",
];

estrategy.forEach((esta) => {
  console.log(esta);
});

const score = estrategy.reduce((acc, curr) => {
  //console.log("Resu:", curr, acc);

  const partes = curr.split(" ");
  const me = partes[1];
  const oppo = partes[0];

  const resu = data[me].value + data[me][oppo];

  console.log("Resu:", curr, me, oppo, resu);
  return resu + acc;
}, 0);

console.log("score:", score);
