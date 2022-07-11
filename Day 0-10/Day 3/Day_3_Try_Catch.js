/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
    let splitArray = s.split("");
    let reverseArray = splitArray.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
    } catch (error){
        console.log(error.message);
        console.log(s);
    }
}
