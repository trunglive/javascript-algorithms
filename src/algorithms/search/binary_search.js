/**
 * Binary Search - iterative approach
 *
 * @param {*[]} array
 * @param {number} key
 * @return {number}
 */

function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);

    if (array[middle] === key) {
      return middle;
    }

    if (key < array[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
}

export default binarySearch;

// TODO
// implement Binary Search using recursion
