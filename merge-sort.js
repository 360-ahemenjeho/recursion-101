function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  console.log(`Merging:`, left, "and", right);

  return merge(left, right);
}

/*
[2, 5, 6, 3]
->  mergeSort([5, 2, 6, 3])
    ->  mergeSort([5, 2])
          ->  mergeSort([5])
          ->  mergeSort([2])
        merge([5], [2]) ->  [2, 5]
    ->  mergeSort([6, 3])
          ->  mergeSort([6])
          ->  mergeSort([3])
        merge([6], [3]) -> [3, 6]
    merge([3, 6], [2, 5]) -> [2, 3, 5, 6]
*/

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Handle remaining elements in left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Handle remaining elements in right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

const array = [8, 3, 5, 4, 7, 6, 1, 2];
console.log("input: ", array);
const sorted = mergeSort(array);
console.log("output: ", sorted);
