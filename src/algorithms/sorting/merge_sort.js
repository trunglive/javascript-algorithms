/**
 * Merge Sort
 *
 * @param {*[]} originalArray
 * @return {number[]}
 */

function mergeSort(originalArray) {
  const copiedArray = [...originalArray];

  if (copiedArray.length <= 1) return copiedArray;

  const middleIndex = Math.floor(copiedArray.length / 2);
  const leftArray = copiedArray.slice(0, middleIndex);
  const rightArray = copiedArray.slice(middleIndex, copiedArray.length);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  return mergeTwoSortedArrays(leftSortedArray, rightSortedArray);
}

/**
 * @param {*[]} firstArray
 * @param {*[]} secondArray
 * @return {number[]}
 */

function mergeTwoSortedArrays(firstArray, secondArray) {
  const sortedArray = [];

  while (firstArray.length && secondArray.length) {
    if (firstArray[0] < secondArray[0]) {
      sortedArray.push(firstArray.shift());
    } else {
      sortedArray.push(secondArray.shift());
    }
  }

  return [...sortedArray, ...firstArray, ...secondArray];
}
