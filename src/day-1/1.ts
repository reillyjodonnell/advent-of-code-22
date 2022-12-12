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
  console.log(max);
}

const data = fileRead();
const grouped = data ? groupValues(data) : null;
const format = groupSums(grouped);
highestSum(format);
