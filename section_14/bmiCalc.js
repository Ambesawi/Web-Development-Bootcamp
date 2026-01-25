

function calcBMI(hight, wight){
    var bmi = hight /(wight*wight);
    return bmi;
}

var result = Math.floor(calcBMI(65, 1.8));
console.log("your BMI is " + result + " in tis case");
