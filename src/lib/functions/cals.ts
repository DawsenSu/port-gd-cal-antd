const g = 9.81;

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

function calWaveLengthFunc(
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

export default function calWaveLength(
  period: number,
  waterdepth: number
): number {
  const func = (x: number): number => {
    return calWaveLengthFunc(period, waterdepth, x);
  };
  return resloveEquation(func, 0, 1000);
}
