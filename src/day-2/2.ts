import fs from 'fs';

const rules = {
  ['Rock']: 'Scissors',
  ['Paper']: 'Rock',
  ['Scissors']: 'Paper',
};

export function rockPaperScissorsScore(
  theirChoice: string,
  yourChoice: string
) {
  const theirChoiceWins =
    rules[theirChoice as keyof typeof rules] === yourChoice;
  const yourChoiceWins =
    rules[yourChoice as keyof typeof rules] === theirChoice;

  if (theirChoiceWins) return 0;
  if (yourChoiceWins) return 6;
  return 3;
}

export function shapeScore(shape: string) {
  const score = { ['Rock']: 1, ['Paper']: 2, ['Scissors']: 3 };
  return score[shape as keyof typeof score];
}

export function aggregateScorer([theirShape, yourShape]: string[]) {
  // parse input to ensure is valid
  const parsed = parseRockPaperScissorInput(theirShape, yourShape);
  const [theirs, yours] = parsed;
  const scoreForshape = shapeScore(yours);
  const scoreForGame = rockPaperScissorsScore(theirs, yours);
  return scoreForGame + scoreForshape;
}

function parseRockPaperScissorInput(theirs: string, yours: string) {
  const inputConverter = {
    ['A']: 'Rock',
    ['B']: 'Paper',
    ['C']: 'Scissors',
    ['X']: 'Rock',
    ['Y']: 'Paper',
    ['Z']: 'Scissors',
    ['Rock']: 'Rock',
    ['Paper']: 'Paper',
    ['Scissors']: 'Scissors',
  };
  return [
    inputConverter[theirs as keyof typeof inputConverter],
    inputConverter[yours as keyof typeof inputConverter],
  ];
}

export function textParser() {
  try {
    const data = fs.readFileSync('src/day-2/input.txt', {
      encoding: 'utf8',
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}
const text = textParser();
text && groupDecisions(text);
export function groupDecisions(text: string) {
  const split = text.split(/\r?\n/);
  console.log(split);
}
