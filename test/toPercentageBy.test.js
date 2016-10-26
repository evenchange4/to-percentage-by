import test from 'ava';
import {
  default as toPercentageBy,
  toPercentage as defaultToPercentage,
} from '../src/index';

test('should return a function', (t) => {
  t.is(typeof toPercentageBy, 'function');
  t.is(typeof defaultToPercentage, 'function');
});

test('test toFixed=2 (default)', (t) => {
  const toPercentage = defaultToPercentage;

  t.is(toPercentage(0.1), '10%');
  t.is(toPercentage(0.11), '11%');
  t.is(toPercentage(0.111), '11.1%');
  t.is(toPercentage(0.1111), '11.11%');
  t.is(toPercentage(0.11111), '11.11%');
});

test('test toFixed=0', (t) => {
  const toPercentage = toPercentageBy(0);

  t.is(toPercentage(0.1), '10%');
  t.is(toPercentage(0.11), '11%');
  t.is(toPercentage(0.111), '11%');
});

test('test method=Math.round (default)', (t) => {
  const toPercentage = toPercentageBy();

  t.is(toPercentage(0.11114), '11.11%');
  t.is(toPercentage(0.11115), '11.12%');
});

test('test method=Math.ceil', (t) => {
  const toPercentage = toPercentageBy(2, Math.ceil);

  t.is(toPercentage(0.11114), '11.12%');
  t.is(toPercentage(0.11115), '11.12%');
});

test('test method=Math.floor', (t) => {
  const toPercentage = toPercentageBy(2, Math.floor);

  t.is(toPercentage(0.11114), '11.11%');
  t.is(toPercentage(0.11115), '11.11%');
});

test('test positive boundary', (t) => {
  const toPercentage = toPercentageBy();

  t.is(toPercentage(0), '0%');
  t.is(toPercentage(1), '100%');
  t.is(toPercentage(1.1), '110%');
  t.is(toPercentage(1.11), '111%');
  t.is(toPercentage(1.111), '111.1%');
  t.is(toPercentage(1.1111), '111.11%');
  t.is(toPercentage(1.11111), '111.11%');
});

test('test negative boundary', (t) => {
  const toPercentage = toPercentageBy();

  t.is(toPercentage(-0), '0%');
  t.is(toPercentage(-1), '-100%');
  t.is(toPercentage(-1.1), '-110%');
  t.is(toPercentage(-1.11), '-111%');
  t.is(toPercentage(-1.111), '-111.1%');
  t.is(toPercentage(-1.1111), '-111.11%');
  t.is(toPercentage(-1.11111), '-111.11%');
});
