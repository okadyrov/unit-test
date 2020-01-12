const {expect} = require('chai');

const {sum, mult, isEvenNumber, isAdult, isPalindrome, sortArrayUp } = require('../index.js');

describe('function sum', () => {
  it('should function sum equals 10', () => {
    expect(sum(2, 4)).eq(6);
  });

  it('should variable function sum not equals 0', () => {
    expect(sum(2, 4), 0);
  });
});

it('should mult equals 8', () => {
  expect(mult(2, 4), 8);
});
describe('function isEvenNumber',()=> {

  it('should return true for even number', function () {
    expect(isEvenNumber(40)).true;
  });
});
describe('function isAdult',()=>{
  it('should return true if age is over 20',function(){
    expect(isAdult(57), true);
  });
});
describe('function Palendrome',() =>{
  it('should return true if str Palindrome', () => {
    expect(isPalindrome('abcba'),true);
  });
  it('if the input is not string',()=>{
    expect(isPalindrome(999),'not string');
  });
});
describe ('function sortArrayUp ', () => {
  it ('should function sortArrayUp works correct', () => {
    expect(sortArrayUp([1,2,3,4,5,6]), [1,2,3,4,5,6]);
  });
  it ('should function sortArrayUp does not work correct', () => {
    expect(sortArrayUp([1,2,3,4,5,6]), [5,6,4,3,2,1]);
  });
  it ('should function sortArrayUp works correct', () => {
    expect(sortArrayUp([1,3,2,4,5,6]), [1,2,3,4,5,6]);
  });
  it ('should function sortArrayUp works correct', () => {
    expect(sortArrayUp([-1,8,-17,4,5,6]), [-17,-1,4,5,6,8]);
  });
});
