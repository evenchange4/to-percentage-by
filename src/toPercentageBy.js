const toPercentageBy = (digits = 2, method = Math.round) => float =>
  `${method(float * Math.pow(10, digits + 2)) / Math.pow(10, digits)}%`;

export default toPercentageBy;
