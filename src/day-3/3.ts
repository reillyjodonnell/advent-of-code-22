import fs from 'fs';

export function firstCompartment(items: string) {
  const halfLength = items.length / 2;
  return items.slice(0, halfLength);
}
export function secondCompartment(items: string) {
  const halfLength = items.length / 2;
  return items.slice(halfLength, items.length);
}
export function itemsInCommon({
  firstCompartment,
  secondCompartment,
}: {
  firstCompartment: string;
  secondCompartment: string;
}) {
  let itemsInCommon = '';

  for (let item of secondCompartment) {
    if (firstCompartment.includes(item) && !itemsInCommon.includes(item)) {
      itemsInCommon += item;
    }
  }
  return itemsInCommon;
}
export function priorityForEachItem(item: string) {
  var priority = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  return priority.indexOf(item) + 1;
}

export function handleMultiplePrioritiesForitems(items: string) {
  let priorities: number[] = [];

  for (let item of items) {
    priorities.push(priorityForEachItem(item));
  }

  return priorities;
}
export function sumOfPriorities(listOfItems: number[]) {
  return listOfItems.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    0
  );
}

export function handleMultipleRucksacks(...items: string[]) {
  const multipleRucksackPrioritySums: number[] = [];
  for (let item of items) {
    const firstCompartmentItems = firstCompartment(item);
    const secondCompartmentItems = secondCompartment(item);

    const commonItems = itemsInCommon({
      firstCompartment: firstCompartmentItems,
      secondCompartment: secondCompartmentItems,
    });

    const multiplePriorities = handleMultiplePrioritiesForitems(commonItems);
    const sum = sumOfPriorities(multiplePriorities);
    multipleRucksackPrioritySums.push(sum);
  }
  return multipleRucksackPrioritySums;
}
export function summedPrioritiesOfMultipleRucksacks(...args: string[]) {
  const priorities: number[] = handleMultipleRucksacks(...args);
  return sumOfPriorities(priorities);
}

export function textParser() {
  try {
    const data = fs.readFileSync('src/day-3/input.txt', {
      encoding: 'utf8',
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}
const text = textParser();
const grouped = text && groupDecisions(text);

console.log(grouped && summedPrioritiesOfMultipleRucksacks(...grouped));

export function groupDecisions(text: string) {
  const split = text.split(/\r?\n/);
  return split;
}
