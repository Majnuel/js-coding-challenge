function solution(A) {
  let myArray = [];
  A.forEach((element) => {
    let number = Math.pow(element, 2);
    myArray.push(number);
  });
  return myArray.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 5, 6, 8, 9]));
console.log(solution([-2, -1]));
console.log(solution([-10, -5, 0, 5, 10]));
