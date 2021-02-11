const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let iElemValue = arr[i];

    arr[i] = arr[min];
    arr[min] = iElemValue;
  }

  return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
