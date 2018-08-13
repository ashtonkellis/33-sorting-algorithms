// const selectionSort = require('../sort');

import { selectionSort, mergeSort, quickSort } from '../sort';

describe('testing sorting algorithms', () => {
  let arr;

  beforeEach(() => {
    arr = [6, 7, 8, 5, 2, 3, 0, 1, 4];
  });

  afterEach(() => {
    arr = null;
  });

  test('selection sort', () => {
    selectionSort(arr);
    expect(arr[0]).toBe(0);
    expect(arr[1]).toBe(1);
    expect(arr[2]).toBe(2);
    expect(arr[3]).toBe(3);
    expect(arr[4]).toBe(4);
  });

  test('merge sort', () => {
    mergeSort(arr);
    expect(arr[0]).toBe(0);
    expect(arr[1]).toBe(1);
    expect(arr[2]).toBe(2);
    expect(arr[3]).toBe(3);
    expect(arr[4]).toBe(4);
  });

  test('quickSort', () => {
    console.log(arr, 'ARR BEFORE QUICKSORT');
    quickSort(arr);
    expect(arr[0]).toBe(0);
    expect(arr[1]).toBe(1);
    expect(arr[2]).toBe(2);
    expect(arr[3]).toBe(3);
    expect(arr[4]).toBe(4);
    expect(arr[5]).toBe(5);
    expect(arr[6]).toBe(6);
    expect(arr[7]).toBe(7);
    expect(arr[8]).toBe(8);
  })
});
