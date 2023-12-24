/*
    Title Case a Sentence
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the 
    word is in lower case.

    For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
    let newArray=[];
    let newWord
    let newString=""
    let words = str.split(" ")
    for(let i=0; i<words.length; i++){
        console.log(words[i])
        console.log(words[i][0].toUpperCase())
        console.log(words[i].slice(1,words[i].length))
        newWord = words[i][0].toUpperCase() + words[i].slice(1,words[i].length).toLowerCase()
        console.log(newWord)
        newArray.push(newWord)
        console.log(newArray)
      }
    return newArray.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));