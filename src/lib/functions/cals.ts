const g = 9.81;
/**
 * #### Version
 * since: V1.0.0
 * Resloves equation using Newton methods
 * @param func the function to be solved
 * @param x0 lower bound
 * @param x1 higher bound
 * @param [eps] tolerance
 * @returns equation solution
 */
export function resloveEquation(
  func: (x: number) => number,
  x0: number,
  x1: number,
  eps: number = 0.01
): number {
  let x2 = x1 - (func(x1) * (x1 - x0)) / (func(x1) - func(x0));
  if (Math.abs(x2 - x1) < eps) {
    return x2;
  } else {
    return resloveEquation(func, x1, x2, eps);
  }
}
/**
 * #### Description
 *
 * #### Version
 * since: V1.0.0
 * Cals wave length function
 * @param period wave periond in seconds
 * @param waterdepth water depth in meters
 * @param wavelength wave length in meters
 * @returns wave length func the function to be solved
 */
export function calWaveLengthFunc(
  period: number,
  waterdepth: number,
  wavelength: number
): number {
  return (
    ((g * period * period) / (2 * Math.PI)) *
      Math.tanh((2 * Math.PI * waterdepth) / wavelength) -
    wavelength
  );
}

/**
 * #### Version
 * since: V1.0.
 *
 * calculate exceed wave height
 * @param waveHeight wave height in meters
 * @param waveLength wave length in meters
 * @param waterDepth water depth in meters
 * @returns exceed wave height
 */
export function calExceedWaveHeight(
  waveHeight: number,
  waveLength: number,
  waterDepth: number
): number {
  return (
    (Math.PI * waveHeight * waveHeight) /
    waveLength /
    Math.tanh((2 * Math.PI * waterDepth) / waveLength)
  );
}

/**
 * #### Description
 *
 * #### Version
 * since: V1.0.0
 * #### Example
 *
 * #### Links
 *
 *
 * calculate max wave height
 * @param maxH max wave height of regular wave in meters
 * @param L wave length in meters
 * @param B interval between piles in meters
 * @param D pile diameter in meters
 * @param sigta coefficient
 * @returns max wave height
 */
export function calMaxWaveHeight(
  maxH: number,
  L: number,
  B: number,
  D: number,
  sigta: number
): number {
  const piover180 = Math.PI / 180;
  let b: number =
    (B - 0.5 * D) / (4 * L * Math.cos(sigta * piover180)) + (0.5 * B) / D;
  return (
    maxH *
    (1 +
      0.625 *
        Math.exp(-b) *
        (1.25 +
          Math.cos(
            (2 * Math.PI * (B - 0.5 * D)) / (L * Math.cos(sigta * piover180))
          )))
  );
}

/**
 * #### Version
 * since: V1.0.0
 * Cals wave length
 * @param period wave period in seconds
 * @param waterdepth water depth in meters
 * @returns wave length in meters
 */
export default function calWaveLength(
  period: number,
  waterdepth: number
): number {
  const func = (x: number): number => {
    return calWaveLengthFunc(period, waterdepth, x);
  };
  return resloveEquation(func, 0, 1000);
}
