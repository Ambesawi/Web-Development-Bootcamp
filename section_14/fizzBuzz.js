
var outPut = [];
var count = 1;
function fuzzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        outPut.push("fizz Buzz");
    } else if (count % 3 === 0) {
        outPut.push("fizz");
    } else if (count % 5 === 0) {
        outPut.push("Buzz");
    } else {
        outPut.push(count);
    }

    count++;

    console.log(outPut);
}


