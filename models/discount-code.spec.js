const DiscountCode = require("./discount-code");

describe("Discount Code model", () => {
  it("should save the given discount code for the brand and return a promise", () => {
    const payload = { brand: "Nike", isActive: true, code: "12345" };
    const discountCode = new DiscountCode(payload);

    return expect(discountCode.save()).resolves.toEqual(payload);
  });

  it("should return the saved discount code", () => {
    const payload = { brand: "nike", isActive: true, code: "12345" };
    const discountCode = new DiscountCode(payload);
    discountCode.save();

    return expect(DiscountCode.findOne("Nike")).resolves.toEqual(payload);
  });

  it("should fail if the given brand does not exist", () => {
    const payload = { brand: "nike", isActive: true, code: "12345" };
    const discountCode = new DiscountCode(payload);
    discountCode.save();

    return expect(DiscountCode.findOne("adidas")).rejects.toHaveProperty(
      "message"
    );
  });
});
