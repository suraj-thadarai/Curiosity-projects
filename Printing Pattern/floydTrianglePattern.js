/*
    floyd's triangle pattern
    1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15
    we just had to incement the number with value 1
*/
let row = 5
let number = 1
for (let i = 1; i <= row ; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(`${number++} `)
        
        
    }
    console.log()
    
}