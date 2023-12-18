/*
    printing the pattern 
    1
    22
    333
    4444
    55555
    innerloop will loop according to the  value of i
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${i}`)        
    }
    console.log()
    
}