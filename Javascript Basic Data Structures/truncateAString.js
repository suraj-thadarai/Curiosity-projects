/*
    Truncate a String
    Truncate a string (first argument) if it is longer than the given maximum string length 
    (second argument). Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
    let newString = ""
    if (num > str.length) {
        return str
    } else if (num == str.length) {
        return str;
    } else {
        newString = str.substring(0, num)
        newString = newString + "..."
        return newString
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);