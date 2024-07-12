// going to have to loop backwards, if the value is more than 10, continue and add one to the next, so on untill it is not, and then break, at that point return

const plusOne = (digits) => {

    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] += 1;
        return digits;
    };

    let add = 0;

    for (let i = digits.length - 1; i >= 0; i--) {

        digits[i] += 1;
        if (digits[i] <= 9) {
            return digits;
        } else {
            digits[i] -= 10;
            if (i === 0) add += 1;
        }
    }
    if (add > 0) digits.unshift(add);

    return digits;
}


let digits = [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9];
console.log(plusOne(digits))
