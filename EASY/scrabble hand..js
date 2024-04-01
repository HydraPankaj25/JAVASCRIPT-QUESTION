function maximumScore(obj) {
  let sum = 0;
  for (let ele of obj) {
    sum += ele.score;
  }
  console.log(sum);
  return sum;
}

maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]);
