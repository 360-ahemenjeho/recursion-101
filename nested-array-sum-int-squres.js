function sumSquares(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let squares = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      squares += sumSquares(arr[i]);
    } else if (typeof arr[i] === "number") {
      squares += arr[i] * arr[i];
    }
  }

  return squares;
}

let l = [1, 2, 3];
console.log(sumSquares(l));

l = [[1, 2], 3];
console.log(sumSquares(l));

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l));

l = [10, [[10], 10], [10]];
console.log(sumSquares(l));
