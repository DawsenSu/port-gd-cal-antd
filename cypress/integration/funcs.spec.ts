// funcs.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import calWaveLength, {
  calWaveLengthFunc,
  calExceedWaveHeight,
} from "@lib/functions/cals";

describe("Test functions", () => {
  it("should be 0", () => {
    const period = 9;
    const waterdepth = 10;
    const waveLenght = calWaveLength(period, waterdepth);
    expect(calWaveLengthFunc(period, waterdepth, waveLenght)).to.lessThan(
      0.001
    );
  });
});

export {};
