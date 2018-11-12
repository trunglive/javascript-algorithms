/**
 * Quick Sort
 *
 * @param {*[]} originalArray
 * @return {number[]}
 */

function quickSort(originalArray) {
  const copiedArray = [...originalArray];

  if (copiedArray.length <= 1) return copiedArray;

  const leftArray = [];
  const rightArray = [];

  const pivotElement = copiedArray.shift();
  const centerArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();

    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);

  return [...leftArraySorted, ...centerArray, ...rightArraySorted];
}

export default quickSort;
