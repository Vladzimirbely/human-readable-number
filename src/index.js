module.exports = function toReadable (number) {
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const num = String(number);

    if (num === '0') {
        return 'zero';
    }
    if (num.length < 2) {
        return digits[num];
    } else if (num === '10') {
        return numbers[0];
    } else if (num > 10 && num < 20) {
        return numbers[num[1]];
    } else if (num === '20') {
        return dozens[2];
    } else if (num > 20 && num < 100) {
        return `${dozens[num[0]]} ${digits[num[1]]}`.trim();
    } else if (num >= 100 && num[1] !== '1' && num[1] !== '0') {
        return `${digits[num[0]]} hundred ${dozens[num[1]]} ${digits[num[2]]}`.trim();
    } else if (num >= 100 && num[1] === '0') {
        return `${digits[num[0]]} hundred ${digits[num[2]]}`.trim();
    } else if (num >= 100 && num[1] === '1') {
        return `${digits[num[0]]} hundred ${numbers[num[2]]}`;
    } 
}
