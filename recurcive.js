const fact = (x) => {
  if (x === 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(20))

const sumFunc = (arr, i) => {
  return i === arr.length ? 0 : arr[i] + sumFunc(arr, i + 1);
}

const arrNums = [1, 2, 3, 4, 5]

console.log('Summ:', sumFunc(arrNums, 0))

const elemCount = (arr, i = 0) => {
  return arr[i] ? elemCount(arr, i + 1) : i;
}

const arrNumsElemCount = [1, 2, 3, 4, 5]

console.log('Elem count:', elemCount(arrNumsElemCount));
