function suppliesForSchool(input) {
    let packsOfPens = Number(input[0])
    let packsOfMarkers = Number(input[1])
    let litterChalkboardCleaner = Number(input[2])
    let percentageReduction = Number(input[3])

    let pensPrice = packsOfPens * 5.8
    let markersPrice = packsOfMarkers * 7.2
    let chalkboardCleanerPrice = litterChalkboardCleaner * 1.2

    let totalPrice = pensPrice + markersPrice + chalkboardCleanerPrice
    discountSum = totalPrice * percentageReduction / 100
    let finalSum = totalPrice - discountSum

    console.log(finalSum)
}

suppliesForSchool(["2", "3", "4", "25"])
suppliesForSchool(["4", "2", "5", "13"])
