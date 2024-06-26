/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function sumOfOneToN(n){
    var sum = 0;
    for(var i = 0;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}


function calculateTime(sumOfOneToN,n) {
    const startTime = performance.now();
    const result = sumOfOneToN(n);
    const endTime = performance.now();
    const executionTime = (endTime - startTime) / 1000; // Convert to seconds
    console.log(`Sum: ${result}`); 
    console.log(`Execution time: ${executionTime} seconds`);
    return 0.01;
}