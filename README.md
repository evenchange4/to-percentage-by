# to-percentage-by

> Convert a Float number to percentage with rounding, ceiling or flooring.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/to-percentage-by/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/to-percentage-by

[npm-badge]: https://img.shields.io/npm/v/to-percentage-by.svg?style=flat-square
[npm]: https://www.npmjs.org/package/to-percentage-by

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/to-percentage-by.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/to-percentage-by?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/to-percentage-by.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/to-percentage-by.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/to-percentage-by.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/to-percentage-by
[devDependency-badge]: https://david-dm.org/evenchange4/to-percentage-by/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/to-percentage-by#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/to-percentage-by/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/to-percentage-by#info=peerDependencies

## Installation

```console
$ npm install to-percentage-by --save
```

[Quick DEMO on tonicdev](https://tonicdev.com/evenchange4/to-percentage-by)

## Usage

```js
import {
  default as toPercentageBy,
  toPercentage as defaultToPercentageBy,
} from 'to-percentage-by';

// defaultToPercentageBy equals to toPercentageBy()

var toPercentage = toPercentageBy();
t.is(toPercentage(0.11111), '11.11%');
t.is(defaultToPercentageBy(0.11111), '11.11%');

var toPercentage = toPercentageBy(0);
t.is(toPercentage(0.11111), '11%');

var toPercentage = toPercentageBy(2, Math.ceil);
t.is(toPercentage(0.11111), '11.12%');

var toPercentage = toPercentageBy(2, Math.floor);
t.is(toPercentage(0.11115), '11.11%');
```

## API

```js
type ToPercentage = (float: number) => string;

toPercentageBy(
  ?digits: number,
  ?method: Function,
): ToPercentage
```

## Property

| **Value** | **Default**  | **Notes**  |
| ------- | ---------- | ------ |
| digits  | 2          | The number of digits to appear after the decimal point |
| method  | Math.round | Could be `Math.round`, `Math.ceil` or `Math.floor` method |
| float  |  | The number to be converted. |

## Test

```
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
