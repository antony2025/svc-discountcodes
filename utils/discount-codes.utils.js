// TODO: this is not production ready. Implement robust generation algorithm
// for production
exports.generateDiscountCode = () => {
  return `${Math.floor(Math.random() * (10000000 - 10000) + 10000)}`;
};
