import { describe, it, expect } from 'vitest';
import {
  fileRead,
  highestSum,
  groupSums,
  sortSums,
  top3Sums,
  getTop3Sums,
  sortSumsInDescendingOrder,
  sumNumbers,
} from './1';

// Read from text file
describe('day 1 code problem', () => {
  it('reads data from the file', () => {
    expect(fileRead).toBeDefined();
  });
  it('groups values for each elf', () => {
    expect(groupSums).toBeDefined();
  });
  it('returns the value for the largest sum ', () => {
    expect(highestSum([1, 2, 3])).toBe(3);
  });
  it('sorts the sums in order', () => {
    expect(sortSumsInDescendingOrder([3, 5, 1, 4, 2])).toStrictEqual([
      1, 2, 3, 4, 5,
    ]);
  });
  it('returns the list of the top 3', () => {
    expect(getTop3Sums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
      10, 9, 8,
    ]);
  });
  it('sums the top 3', () => {
    expect(sumNumbers([1, 2, 3])).toBe(6);
  });
});

// Sum the totals in each group

//
