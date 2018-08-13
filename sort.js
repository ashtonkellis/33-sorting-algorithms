export const swap = (arr, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i > arr.length - 1 ||
    j > arr.length - 1
  ) {
    throw new Error('Out of bounds');
  }
  
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export const selectionSort = (arr) => {
  let left = 0;

  while (left < arr.length - 1) {
    let min = left;

    for (let i = left; i < arr.length; i++) {
      if (arr[i] < arr[min]) min = i;
    }
    
    swap(arr, left, min);
    left++;
  }

  return arr;
}

function merge(left, right, arr) {
  let i = 0;

  while (left.length && right.length) {
    arr[i] = left[0] < right[0] ? left.shift() : right.shift();
    i++;
  }

  while(left.length) {
    arr[i] = left.shift();
    i++;
  }

  while(right.length) {
    arr[i] = right.shift();
    i++;
  }
}

export const mergeSort = (arr) => {
  if (arr.length <= 1) return;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);

  merge(left, right, arr);

  return arr;
}

function recQS(arr, left, right) {
  if (arr.length <= 1) return;
  if (left >= right) return;

  let pivot = right;
  let r = right - 1;
  let l = left;

  while (l <= r) {
    while (arr[l] < arr[pivot]) {
      l++;
    }

    while (arr[r] > arr[pivot]) {
      r--;
    }

    if (l < r) {
      swap(arr, l, r);
      l++
      r--;
    }
  }

  swap(arr, l, pivot);

  recQS(arr, left, l - 1);
  recQS(arr, l + 1, right);
}

export const quickSort = (arr) => {
  recQS(arr, 0, arr.length - 1);

  return arr;
}
