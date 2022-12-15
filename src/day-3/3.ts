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
    if (firstCompartment.includes(item)) {
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

export function handleMultipleRucksacks(...items){
    for( let item of items){
        const firstCompartment = 
        const secondCompartment =

        
        
    }

}