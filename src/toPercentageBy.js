const pow = (v, d) => v ** d;

const toPercentageBy = (digits = 2, method = Math.round) => float =>
  `${method(float * pow(10, digits + 2)) / pow(10, digits)}%`;

export default toPercentageBy;
