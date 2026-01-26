
function bmiCalculator(weight, height){
    var bmi = weight /(height*height);
    return bmi;
}

var result = Math.floor(bmiCalculator(50, 1.8));

if(result < 18.5){
    console.log("Your BMI is " + result + ", so you are underweight.");
}

if(result >= 18.5 && result <= 24.9){
    console.log("Your BMI is " + result + ", so you have a normal weight.");
}

if(result > 24.9){
    console.log("Your BMI is " + result + ", so you are overweight.");
}
