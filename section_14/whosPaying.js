function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    
    var n = Math.random();
    n = (n * names.length);
    n = Math.floor(n);
    var output = names[n];
    return output + " is going to buy lunch today";
    

/******Don't change the code below*******/    
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
