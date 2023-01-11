function repainting(input) {
    let nylonSquareMeter = Number(input[0])
    let paintLitter = Number(input[1])
    let thinnerLitter = Number(input[2])
    let hours = Number(input[3])

    let nylonPrice = (nylonSquareMeter + 2) * 1.5
    let paintPrice = (paintLitter * 1.1) * 14.5
    let thinnerPrice = thinnerLitter * 5

    let totalPrice = nylonPrice + paintPrice + thinnerPrice + 0.4
    let workersPrice = (totalPrice * 0.3) * hours
    let finalPrice = totalPrice + workersPrice

    console.log(finalPrice)
}

repainting(["10", "11", "4", "8"])
repainting(["5", "10", "10", "1"])
