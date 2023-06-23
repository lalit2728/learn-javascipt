// Notes
/* 
1. NaN is a number type value, Conversion of 'String' to Number returns NaN (Not a Number) is given string is not a proper number like; "33", "41", etc;

2. null is a type of object, Conversion of 'null' to Number returns 0;
*/

// -------------------------------------------------------------
let num1 = "20af";

let changeNum1 = Number(num1);

console.log(changeNum1 + " " + typeof(changeNum1));

// -------------------------------------------------------------

let num2 = null;

let changeNum2 = Number(num2);

console.log(changeNum2 + " " + typeof(num2));

// -------------------------------------------------------------


