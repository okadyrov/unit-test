function sum(a, b) {
  return a + b;
}
function mult(a, b){
  return a * b;
}
function isEvenNumber(number){

  return number % 2 === 0;
}
function isAdult(age){
  if(age > 20){
    return true;
  } else if(age >= 0 && age < 20){
    return false;
  } else{
    return undefined;
  }
}
function isPalindrome(str) {
  if(typeof str !== 'string')
    return 'not string';
  strReverse = str.split('').reverse().join('');
  if (strReverse == str) {
    return true;
  }
}
function sortArrayUp(array) {
  array.sort(function (a, b) {
    return (a - b);
  });
  return array;
}
module.exports = {sum, mult, isEvenNumber, isAdult, isPalindrome, sortArrayUp};