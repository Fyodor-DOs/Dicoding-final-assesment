import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum adds two positive numbers correctly', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(5, 10), 15);
});

test('sum returns 0 when one or both arguments are negative', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -2), 0);
});

test('sum returns 0 when one or both arguments are not numbers', () => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum('1', '2'), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(1, undefined), 0);
});

test('sum returns 0 when both arguments are 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('sum handles large numbers', () => {
  assert.strictEqual(sum(1e10, 1e10), 2e10);
});
