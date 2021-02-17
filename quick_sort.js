const quick_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = [];
    let greater = [];

    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    return quick_sort(less).concat(pivot, quick_sort(greater));
  }
}

const arr = [10, 1, 3, 2, 8, 5, 4, 11];

console.log(quick_sort(arr));
