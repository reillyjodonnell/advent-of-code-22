import { describe, it, expect } from 'vitest';
import {
  firstCompartment,
  itemsInCommon,
  secondCompartment,
  priorityForEachItem,
  handleMultiplePrioritiesForitems,
  sumOfPriorities,
} from './3';

describe('The rucksack compartment problem', () => {
  it('should split the compartments in each rucksack', () => {
    expect(firstCompartment('abcdef')).toBe('abc');
    expect(secondCompartment('abcdef')).toBe('def');
  });
  it('should tell which letters are in common in both compartments', () => {
    expect(
      itemsInCommon({ firstCompartment: 'abc', secondCompartment: 'ass' })
    ).toBe('a');
    expect(
      itemsInCommon({ firstCompartment: 'defgh', secondCompartment: 'deflol' })
    ).toBe('def');
    expect(
      itemsInCommon({ firstCompartment: 'aA', secondCompartment: 'aA' })
    ).toBe('aA');
    expect(
      itemsInCommon({
        firstCompartment: 'aAccnnN',
        secondCompartment: 'AaCCNpo',
      })
    ).toBe('AaN');
  });
  it('should give score priorities for each of the letters', () => {
    expect(priorityForEachItem('a')).toBe(1);
    expect(priorityForEachItem('z')).toBe(26);

    expect(priorityForEachItem('A')).toBe(27);
    expect(priorityForEachItem('Z')).toBe(52);
  });

  it('should give multiple priorities to items in common', () => {
    expect(handleMultiplePrioritiesForitems('abc')).toStrictEqual([1, 2, 3]);
    expect(handleMultiplePrioritiesForitems('ZZ')).toStrictEqual([52, 52]);
  });

  it('should sum the priorites for any list of priorities', () => {
    expect(sumOfPriorities([1, 2, 3])).toBe(6);
  });

  it('should handle multiple items in multiple rucksacks with multiple summed priorities', () => {
    expect(handleMultipleRucksacks('abcabc', 'defged', 'abcdea')).toBe([
      6, 9, 1,
    ]);
  });
  it('should also be able to handle giving one gross sum for all of the multiple rucksacks', () => {
    expect(
      summedPrioritiesOfMultipleRucksacks('abcabc', 'defged', 'abcdea')
    ).toBe(16);
  });
});
