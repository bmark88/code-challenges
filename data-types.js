// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// // Reads complete line from STDIN
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    const i2 = input_stdin_array[0];
    const d2 = input_stdin_array[1];
    const s2 = input_stdin_array[2];
    // Read and save an integer, double, and String to your variables.
    // Print the sum of both integer variables on a new line.
    console.log(i + Number(i2));
    
    // Print the sum of the double variables on a new line.
    console.log(Number((d+Number(d2))).toFixed(1));
    
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+s2);
}

// Input:
// 12
// 4.0
// is the best place to learn and practice coding!

// Output of solution:
// 16
// 8.0
// HackerRank is the best place to learn and practice coding!