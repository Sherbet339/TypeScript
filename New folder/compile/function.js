"use strict";
function calDiscount(price, rate) {
    var discount = price * rate;
    return discount;
}
function calDiscountWithDefultParam(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    return discount;
}
console.log(calDiscountWithDefultParam(1000));
