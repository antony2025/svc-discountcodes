const utils = require("./discount-codes.utils");

describe("Discount codes helper", () => {
  it("should return newly generated code", () => {
    const newCode = utils.generateDiscountCode();
    expect(newCode.length >= 5 && newCode.length <= 8).toBeTruthy();
  });
});
