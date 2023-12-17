/*
    // Printing pattern
    *****
    ****
    ***
    **
    *
    
    for printing this pattern, if we give the number of rows from top as 5 to 1 we can see that
    5 ***** 5th row has 5 stars
    4 ****  4th row has 4 stars
    3 ***   3rd row has 3 stars
    2 **    2nd row has 2 stars
    1 *     1st row has 1 star

*/

let row=5;

for (let i = row; i >= 1; i--) {
    for (let j = 1; j <=i ; j++) {
        process.stdout.write('*')
        
    }
    console.log()
    
}