import { describe, it, expect } from 'vitest';
import { fileRead, highestSum, groupSums } from './1';

// Read from text file
describe('day 1 code problem', () => {
  it('reads data from the file', () => {
    expect(fileRead).toBeDefined();
  });
  it('groups values for each elf', () => {
    expect(groupSums).toBeDefined();
  });
  it('returns the value for the largest sum ', () => {
    expect(highestSum).toBe(69795);
  });
});

// Sum the totals in each group

//
