function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
function pcheck(p: number): void {
  finite(p, Number.MIN_VALUE, 1);
}
export function geometricPmf(k: number, p: number): number {
  integer(k, 0, 1e6);
  pcheck(p);
  return p === 1 ? (k === 0 ? 1 : 0) : Math.exp(Math.log(p) + k * Math.log1p(-p));
}
export function geometricCdf(k: number, p: number): number {
  integer(k, 0, 1e6);
  pcheck(p);
  return p === 1 ? 1 : -Math.expm1((k + 1) * Math.log1p(-p));
}
export function geometricMoments(p: number): { mean: number; variance: number } {
  pcheck(p);
  const mean = (1 - p) / p,
    variance = mean / p;
  if (!Number.isFinite(variance)) throw new RangeError('Moment overflow');
  return { mean, variance };
}
