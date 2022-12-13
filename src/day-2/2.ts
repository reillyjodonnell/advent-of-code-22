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

export function aggregateScorer([theirShape, outcomeForGame]: string[]) {
  // parse input to ensure is valid
  const parsed = parseRockPaperScissorInput(theirShape, outcomeForGame);
  const [theirs, outcome] = parsed;
  const yours = determineShapeForOutcome(theirs, outcome);
  const scoreForshape = shapeScore(yours);
  const scoreForGame = rockPaperScissorsScore(theirs, yours);
  return scoreForGame + scoreForshape;
}

export function determineShapeForOutcome(
  theirShape: 'Rock' | 'Paper' | 'Scissors',
  outcome: 'Lose' | 'Win' | 'Draw'
) {
  const gameRules = {
    Lose: {
      ['Rock']: 'Scissors',
      ['Paper']: 'Rock',
      ['Scissors']: 'Paper',
    },
    Win: {
      ['Rock']: 'Paper',
      ['Paper']: 'Scissors',
      ['Scissors']: 'Rock',
    },
    Draw: {
      ['Rock']: 'Rock',
      ['Paper']: 'Paper',
      ['Scissors']: 'Scissors',
    },
    // Tie have them be the same
  };
  return gameRules[outcome as keyof typeof gameRules][theirShape];
}

function parseRockPaperScissorInput(theirs: string, outcome: string) {
  const inputConverter = {
    ['A']: 'Rock',
    ['B']: 'Paper',
    ['C']: 'Scissors',
    ['X']: 'Lose',
    ['Y']: 'Draw',
    ['Z']: 'Win',
    ['Rock']: 'Rock',
    ['Paper']: 'Paper',
    ['Scissors']: 'Scissors',
  };
  return [
    inputConverter[theirs as keyof typeof inputConverter],
    inputConverter[outcome as keyof typeof inputConverter],
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
const split = text && groupDecisions(text);
const formattedDecisions = split && formatDecisions(split);
formattedDecisions && scoreKeeper(formattedDecisions);

export function groupDecisions(text: string) {
  const split = text.split(/\r?\n/);
  return split;
}

export function formatDecisions(decisions: string[]) {
  const formatted = decisions.map((item) => item.split(' '));
  return formatted;
}

export function scoreKeeper(decisions: string[][]) {
  let score = 0;
  decisions.map((decision) => {
    const points = aggregateScorer(decision);
    score += points;
  });
  console.log(score);
  return score;
}
