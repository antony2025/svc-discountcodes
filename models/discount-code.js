// TODO:
// 1. Add ability to store more than one discount code per brand.
//
// 2. Store the data in a database like MongoDB
const codesMap = new Map();

class DiscountCode {
  constructor({ brand, isActive, code }) {
    this.brand = brand;
    this.isActive = isActive;
    this.code = code;
  }

  save() {
    const payload = {
      brand: this.brand,
      isActive: this.isActive,
      code: this.code,
    };
    codesMap.set(this.brand.toLowerCase(), payload);
    return Promise.resolve(payload);
  }

  static findOne(brand) {
    if (codesMap.has(brand.toLowerCase())) {
      return Promise.resolve(codesMap.get(brand.toLowerCase()));
    }
    return Promise.reject({ message: `Given brand ${brand} not found` });
  }
}

module.exports = DiscountCode;
