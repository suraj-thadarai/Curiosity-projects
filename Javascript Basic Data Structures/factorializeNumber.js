/*
    Factorialize a Number
    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
    let fact=1;
    for(let i=1; i<=num; i++){
        fact=fact*i
      }
    return fact;
  }
  
  console.log(factorialize(5));