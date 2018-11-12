/**
 * Selection Sort
 *
 * @param {*[]} originalArray
 * @return {number[]}
 */

function selectionSort(originalArray) {
  const array = [...originalArray];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

export default selectionSort;
