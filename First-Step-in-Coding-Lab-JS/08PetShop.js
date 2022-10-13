function petShop(input){
    let dogFoodPackages = Number(input[0]);
    let catFoodPackages = Number(input[1]);
    let result = (dogFoodPackages * 2.5) + (catFoodPackages * 4);
    console.log(`${result} lv.`);
}

petShop(["5 ", "4 "])
petShop(["13", "9"])