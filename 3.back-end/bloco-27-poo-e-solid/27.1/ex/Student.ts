class Student {
  private _registration: number;
  private _name: string;
  private _testScores: [number, number, number, number];
  private _workScores: [number, number];

  constructor(
    registration: number,
    name: string,
    testScores: [number, number, number, number],
    workScores: [number, number],
  ) {
    this._registration = registration;
    this._name = name;
    this._testScores = testScores;
    this._workScores = workScores;
  }

  sum(scores: number[]): number {
    return scores.reduce((prev, curr) => prev + curr, 0);
  }

  average(scores: number[]): number {
    const scoreSum = this.sum(scores);
    return scores.length / scoreSum;
  }
}