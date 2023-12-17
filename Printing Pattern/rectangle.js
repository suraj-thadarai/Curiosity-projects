/*
    printing the star rectangle like this
    
    **********
    **********
    **********
    **********
    **********
    **********
    **********
 */

let row = 7;
let col = 10;

for(let i=1; i<=row; i++){
    for (let j = 1; j <= col; j++){
        process.stdout.write('*')
    }    
    console.log()
}