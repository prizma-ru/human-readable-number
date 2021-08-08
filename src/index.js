module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const dozensTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    if (number < 11) {
        return units[number];
    }
    else if (number < 20) {
        return dozensTwenty[number - 11];
    }
    else if (number < 100) {
        if (number%10 == 0){
            return dozens[Math.floor(number/10-2)]
        }
        else return dozens[Math.floor(number/10-2)] + " " + units[number%10];
    }
    else if (number < 999) {
        if (number%100 == 0){
            return units[Math.floor(number/100)] + " hundred";
        }
        else return false;
    }
    else return false;
}

