let cat = 'kittycat'

console.log(cat.indexOf('ttyl'))




const addBinary = (a, b) => {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += a[i--] - '0';  // Convert char to number
        if (j >= 0) sum += b[j--] - '0';

        result = (sum % 2) + result;  // Append current bit
        carry = Math.floor(sum / 2);  // Update carry
    }

    return result;
};
