function vacationBooksList(input) {
    let pagesNumber = Number(input[0])
    let pagesReadPerHour = Number(input[1])
    let days = Number(input[2])

    let totalReadingTime = pagesNumber / pagesReadPerHour
    let hourNeededPerDay = totalReadingTime / days

    console.log(hourNeededPerDay)
}

vacationBooksList(["212", "20", "2"])
vacationBooksList(["432", "15", "4"])