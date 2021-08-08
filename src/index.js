module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const dozensTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    console.log(number%100);

    if (number < 11) {
        console.log("Десятки < 11");
        return units[number];
    }
    else if (number < 20) {
        console.log("Двацатка < 21");
        return dozensTwenty[number - 11];
    }
    else if (number < 101) {
        if (number%10 == 0){
            console.log("Сотка < 101");
            return dozens[Math.floor(number/10-2)]
        }
        else return dozens[Math.floor(number/10-2)] + " " + units[number%10];
    }
    else if (number < 1000) {
        if (number%100 == 0){
            console.log("Сотка = X00");
            return units[Math.floor(number/100)] + " hundred"; 
        }
        else if (number%100%10 == 0){
            console.log("Сотка + Десятка = XX0");
            return units[Math.floor(number/100)] + " hundred " + dozens[Math.floor(number%100/10-2)]; 
        }
        else if (number%100 < 21){
            console.log("Сотка + <20 = XX0");
            return units[Math.floor(number/100)] + " hundred " + dozensTwenty[Math.floor(number%100%10-1)]; 
        }
        else return units[Math.floor(number/100)] + " hundred " + dozens[Math.floor(number%100/10-2)] + " " + units[number%10];  
    }
    else return false;
}

