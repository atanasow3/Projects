function calculate(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    var result = parseFloat(number).toFixed(precision);

    console.log(result);
}