import fs from 'fs';

export function fileRead() {
  try {
    const data = fs.readFileSync('src/day-1/input.txt', {
      encoding: 'utf8',
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export function groupValues(data: string) {
  const grouped = data.split(/\n\s*\n/);

  return grouped;

  //   grouped.forEach((capture, i) => console.log(`Capture #${i}:\n${capture}`));
}

export function groupSums(data: string[]) {
  const sums = data.map((group, index) => {
    let sum = 0;
    const nums = group.split('\n');
    nums.forEach((num) => {
      const huh = parseInt(num);
      sum += huh;
    });
    return sum;
  });
  return sums;
}

export function highestSum(data: number[]) {
  const max = Math.max(...data);
  return max;
}

export function sortSumsInDescendingOrder(data: number[]) {
  const sorted = data.sort((a, b) => a - b);
  return sorted;
}

export function getTop3Sums(sortedData: number[]) {
  // sums must be sorted
  return [
    sortedData[sortedData.length - 1],
    sortedData[sortedData.length - 2],
    sortedData[sortedData.length - 3],
  ];
}

export function sumNumbers(nums: number[]) {
  return nums.reduce((a, b) => a + b);
}

const data = fileRead();
const grouped = data ? groupValues(data) : null;
const format = groupSums(grouped);
const sorted = sortSumsInDescendingOrder(format);
const top3 = getTop3Sums(sorted);
const summedTop3 = sumNumbers(top3);
console.log(summedTop3);
