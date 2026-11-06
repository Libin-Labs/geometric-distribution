import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.geometricPmf(2, 0.5) - 0.125) < 1e-12);
});
test('certain success', () => {
  assert.equal(api.geometricPmf(0, 1), 1);
  assert.equal(api.geometricPmf(1, 1), 0);
});
test('cdf sum', () => {
  let sum = 0;
  for (let k = 0; k < 20; k++) {
    sum += api.geometricPmf(k, 0.3);
    assert.ok(Math.abs(sum - api.geometricCdf(k, 0.3)) < 1e-13);
  }
});
test('moments', () => {
  assert.deepEqual(api.geometricMoments(0.5), { mean: 1, variance: 2 });
});
test('zero rate and overflow', () => {
  assert.throws(() => api.geometricPmf(0, 0));
  assert.throws(() => api.geometricMoments(Number.MIN_VALUE));
});
test('types and nonfinite', () => {
  assert.throws(() => api.geometricPmf('2', 0.5));
});
