// Calculadora de Partidas Rankeadas

function rankedBalance (wins, losses) {
    let balance = wins - losses
    return balance
}

function getRankedLevel (balance) {
    let RankedLevels = ["IRON", "BRONZE", "SILVER", "GOLD", "DIAMOND", "LEGENDARY", "IMMORTAL"]

    if (balance < 10) {
        return RankedLevels[0]
    } else if (balance >= 11 && balance <= 20) {
        return RankedLevels[1]
    } else if (balance >= 21 && balance <= 50) {
        return RankedLevels[2]
    } else if (balance >= 51 && balance <= 80) {
        return RankedLevels[3]
    } else if (balance >= 81 && balance <= 90) {
        return RankedLevels[4]
    } else if (balance >= 91 && balance <= 100) {
        return RankedLevels[5]
    } else if (balance >= 101) {
        return RankedLevels[6]
    } else {
        return "Invalid balance"
    }
}

function main (wins, losses) {
    let winsBalance = rankedBalance(wins, losses)
    let level = getRankedLevel(winsBalance)
    console.log(`The hero has a balance of ${winsBalance} and is at level ${level}`)
}

main (60, 20)
  