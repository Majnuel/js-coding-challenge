function solution(coinArray) {
  const sorted = coinArray.sort((a, b) => a - b);
  let minimumChange = sorted[0];
  for (let i = 0; i < sorted.length; i++) {
    if (minimumChange < sorted[i]) return minimumChange;
    minimumChange += sorted[i];
  }
  return minimumChange;
}

console.log(solution([5, 7, 1, 1, 2, 3, 22]));
console.log(solution([1, 1, 1, 1, 1]));
console.log(solution([1, 5, 1, 1, 1, 10, 15, 20, 100]));
