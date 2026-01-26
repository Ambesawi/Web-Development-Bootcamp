   var fistName = prompt("please input the fist name");
   var secondName = prompt("please input the second name");

function loveCalculator(name1, name2){
    var n = Math.random();
    n = (n * 100) +1;
    n = Math.floor(n);

    console.log("the love % of " + name1 + " and " + name2 + " is " + n + " %");

}

loveCalculator(fistName, secondName );

