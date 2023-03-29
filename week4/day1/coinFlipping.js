function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
    return new Promise((resolved, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
                resolved("This has been flip five times")
            } else {
                headsCount = 0;
                reject("This has been flippped more than 100 times")
            }
        }
        return `It took ${attempts} tries to flipped five "heads"`;
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log("When does this run now?");