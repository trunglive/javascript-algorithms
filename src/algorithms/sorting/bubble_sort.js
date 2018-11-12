/**
 * Bubble Sort
 *
 * @param {*[]} originalArray
 * @return {number[]}
 */

function bubbleSort(originalArray) {
  const array = [...originalArray];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

export default bubbleSort;
