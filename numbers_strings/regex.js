

/* 
1. if we want to directly inlcude pattern without using string literal then, the below pattern directly represents a regex pattern which is like hardcoded. It test the pattern for 2020-12-34
^ -> indicates start of the pattern (left side)
$ -> represents end of the pattern (right side)

Note: Make sure to start the regex with / and end with / when not wrapping inside a string literal

For example: 
const pattern = /\d/

NOte: If wrapping inside string literal then we should use double backslash instead of single.

For example:
const pattern = "\\d"

for this type of pattern we can direclty use .test over the pattern
*/
const regex = /^\d{4}-\d{2}-\d{2}$/
console.log("Date regex:",regex.test("2058-11-22")); // true


/* if we want to dynamically build the regex, we can also use the regex constructor

const regex = new RegExp(string, flag)
*/ 

// . character in regex is a wild card so if we want to test for . iteself we should use \ before it.
const emailPattern= /^[\w.]+@[\w]+\.[\w]+$/
const flag = 'i'

const emailRegex = new RegExp(emailPattern, flag)

console.log("Email regex:",emailRegex.test("testing@tii.com"))