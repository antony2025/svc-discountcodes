const express = require("express");
const { body } = require("express-validator");
const discountCodesController = require("../controllers/discount-codes");

const router = express.Router();

router.get("/discount-codes/:brand", discountCodesController.getDiscountCode);

router.post(
  "/discount-codes",
  [
    body("brand").trim().not().isEmpty(),
    body("isActive").isBoolean().toBoolean(),
  ],
  discountCodesController.generateDiscountCode
);

module.exports = router;
