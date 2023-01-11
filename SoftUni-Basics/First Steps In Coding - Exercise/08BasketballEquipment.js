function basketballEquipment(input) {
    let annualFee = Number(input[0])

    let sneakerPrice = 0.6 * annualFee
    let outfitPrice = sneakerPrice * 0.8
    let ballPrice = outfitPrice / 4
    let accessoriesPrice = ballPrice / 5
    let totalPrice = sneakerPrice + outfitPrice + ballPrice + accessoriesPrice + annualFee

    console.log(totalPrice)
}

basketballEquipment(["365 "])
basketballEquipment(["550"])
