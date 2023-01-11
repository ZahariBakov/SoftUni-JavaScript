function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let termOfTheDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = depositSum * (annualInterestRate / 100)
    let interestPerMonth = accruedInterest / 12
    let totalSum = depositSum + termOfTheDeposit * interestPerMonth

    console.log(totalSum)
}

depositCalculator(["200", "3", "5.7"])
depositCalculator(["2350", "6 ", "7 "])
