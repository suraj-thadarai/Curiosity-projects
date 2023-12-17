/*
    printing the below pattern
        *
       **
      ***
     ****
    *****

    logic for the pattern is in the first row we have four space then star, in the second row, we have
    3 spaces and two star, so the logic in column loop will be row-i will place the space appropriately.

 */

let row = 5;
let col = 5;


for(let i = 1; i<=row; i++){
    for(let j = 1; j<=col; j++){
        if(j<=row-i){
            process.stdout.write(' ')
        }
        else{
            process.stdout.write('*')
        }

    }
    console.log()
}