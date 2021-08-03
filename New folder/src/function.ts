function calDiscount(price:number,rate:number) {
    let discount = price*rate
    return discount
}

function calDiscountWithDefultParam(price:number,rate:number=0.5) {
    let discount = price*rate
    return discount
}
console.log(calDiscountWithDefultParam(1000));
