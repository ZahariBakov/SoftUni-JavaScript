function yardGreening(input){
    let squareMeters = Number(input[0]);
    let totalPrice = squareMeters * 7.61;
    let discount = totalPrice * 0.18;
    console.log(`The final price is: ${totalPrice - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"])
yardGreening(["150"])