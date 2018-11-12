/**
 * Insertion Sort
 *
 * @param {*[]} originalArray
 * @return {number[]}
 *
 */

function insertionSort(originalArray) {
  const copiedArray = [...originalArray];

  for (let i = 1; i < copiedArray.length; i++) {
    let j = i;

    while (j > 0 && copiedArray[j - 1] > copiedArray[j]) {
      [copiedArray[j - 1], copiedArray[j]] = [
        copiedArray[j],
        copiedArray[j - 1]
      ];
      j--;
    }
  }

  return copiedArray;
}

export default insertionSort;
