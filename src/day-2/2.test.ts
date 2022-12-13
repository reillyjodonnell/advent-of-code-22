import { describe, it, expect } from 'vitest';
import {
  aggregateScorer,
  determineShapeForOutcome,
  formatDecisions,
  rockPaperScissorsScore,
  scoreKeeper,
  shapeScore,
  textParser,
} from './2';

/* 
tests:
determine winner of rock paper scissors


*/

describe('day 2 AoC problem', () => {
  // it('should determine winner of rock-paper-scissors', () => {
  //   expect(rockPaperScissors('Rock', 'Paper')).toBe('Paper');
  //   expect(rockPaperScissors('Rock', 'Scissors')).toBe('Rock');
  //   expect(rockPaperScissors('Paper', 'Scissors')).toBe('Scissors');
  //   expect(rockPaperScissors('Paper', 'Paper')).toBe('Tie');
  // });
  it('should give a score based on the results of the round', () => {
    //Win
    expect(rockPaperScissorsScore('Rock', 'Paper')).toBe(6);
    // Lose
    expect(rockPaperScissorsScore('Paper', 'Rock')).toBe(0);
    // You tie
    expect(rockPaperScissorsScore('Paper', 'Paper')).toBe(3);
  });

  it('Should give a score for the shape you choose', () => {
    expect(shapeScore('Rock')).toBe(1);
    expect(shapeScore('Paper')).toBe(2);
    expect(shapeScore('Scissors')).toBe(3);
  });

  it('should give an aggregaate score for a round played with points for the shape and outcome', () => {
    expect(aggregateScorer(['Rock', 'Paper'])).toBe(8);
  });

  // it('should be able to parse different input', () => {
  //   expect(aggregateScorer(['A', 'Y'])).toBe(8);
  // });

  it('should get an array of decisions from a text file', () => {
    expect(textParser).toBeDefined();
  });

  it('should format decisions correctly ', () => {
    expect(formatDecisions).toBeDefined();
  });

  // it('should send formatted decisions off to be scored keeping track of the score', () => {
  //   expect(scoreKeeper).toBeDefined();
  //   expect(
  //     scoreKeeper([
  //       ['A', 'Y'],
  //       ['B', 'Y'],
  //     ])
  //   ).toBe(13);
  // });
  describe('Now we know that the second column means how the game needs to end', () => {
    it('should be able to parse the second column to mean win lose draw', () => {});
    it('should determine which shape we need to match the outcome from the second column', () => {
      expect(determineShapeForOutcome('Paper', 'Lose')).toBe('Rock');
      expect(determineShapeForOutcome('Paper', 'Win')).toBe('Scissors');
      expect(determineShapeForOutcome('Paper', 'Draw')).toBe('Paper');
    });
  });
});
