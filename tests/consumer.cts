import { geometricPmf } from '@lp-labs/geometric-distribution';
if (Math.abs(geometricPmf(2, 0.5) - 0.125) > 1e-12) throw new Error('Probability');
// @ts-expect-error invalid argument must be rejected by declarations
geometricPmf('2', 0.5);
