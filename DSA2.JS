const Array = [1, 2, 8, 9, 10, 15, 25, 36, 51, 56];
const tr = 15;
function BinarySearch(arr, target, start, end) {
  if (start > end) return false;
  let mid = Math.floor(start + end) / 2;
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) BinarySearch(arr, target, mid + 1, end);
  else if (arr[mid] < target) BinarySearch(arr, target, start, mid - 1);
  else return -1;
}
console.log(BinarySearch(Array, 15, 0, Array.length - 1));
