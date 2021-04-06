const discountCodesController = require("./discount-codes");
const { validationResult } = require("express-validator");

jest.mock("express-validator");

describe("Discount Codes Controller", () => {
  it("should set 201 status code for valid generate code request", async () => {
    validationResult.mockReturnValueOnce({
      isEmpty: () => true,
    });
    const req = {
      body: {
        brand: "A cool brand",
        isActive: true,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    await discountCodesController.generateDiscountCode(req, res, null);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("should throw error if brand name is empty in the generate code request", () => {
    validationResult.mockReturnValueOnce({
      isEmpty: () => false,
      errors: () => [
        { location: "body", msg: "Invalid value", param: "brand" },
      ],
    });
    const req = {
      body: {
        brand: "",
        isActive: true,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    expect(() =>
      discountCodesController.generateDiscountCode(req, res, null)
    ).toThrow(Error);
  });
});
