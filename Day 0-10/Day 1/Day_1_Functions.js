/*
 * Create the function factorial here
 */

// SOLUTION:
function factorial(n){
    let results = n;
    for(let i = 1; i < n; i++){
        results = results * (n-i);
    }
    return results;
}
