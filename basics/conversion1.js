// Point to be remembered;
/* 
1. NaN is a number type value, Conversion of 'String' to Number returns NaN (Not a Number) is given string is not a proper number like; "33", "41", etc;

2. null is a type of object, Conversion of 'null' to Number returns 0;

3. true => (1);

4. false => (0);

5. Any string except empty "" states (true) if converted to Boolean;
*/

// -------------------------------------------------------------
// 1. 
let num1 = "20af";

let changeNum1 = Number(num1);

console.log(changeNum1 + " " + typeof(changeNum1));

// -------------------------------------------------------------

// 2. 
let num2 = null;

let changeNum2 = Number(num2);

console.log(changeNum2 + " " + typeof(num2));

// -------------------------------------------------------------

// 5.
let str1 = "";

let str2 = "abc1";

console.log(Boolean(str1) + " " + Boolean(str2));

// -------------------------------------------------------------

