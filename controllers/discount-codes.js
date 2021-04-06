const { validationResult } = require("express-validator");
const { generateDiscountCode } = require("../utils/discount-codes.utils");
const DiscountCode = require("../models/discount-code");

exports.generateDiscountCode = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.errors = errors.array();
    throw error;
  }

  const brand = req.body.brand;
  const isActive = req.body.isActive;
  const code = generateDiscountCode();
  const discountCode = new DiscountCode({ brand, isActive, code });

  discountCode
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Discount code generated successfully.",
        data: result,
      });
    })
    .catch((error) => {
      error.statusCode = 500;
      next(error);
    });
};

exports.getDiscountCode = (req, res, next) => {
  const brand = req.params.brand;
  DiscountCode.findOne(brand)
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((error) => {
      error.statusCode = 404;
      next(error);
    });
};
