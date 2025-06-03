import {test, expect} from '@playwright/test';
const evenNumber = 'The number is even';
const oddNumber = 'The number is odd';
const zeroNumber = 'Undefined';

function checkEvenOrOdd(number: number) {
    if (number === 0) {
        return zeroNumber;
    } else if ( number % 2 === 0 ) {
        return evenNumber;
    } else if (number %2 !== 0) {
      return oddNumber;
    }
    
}
test(' positive case - even', { tag: '@unit' }, async () => {
  const result = checkEvenOrOdd(2);
  expect(result).toEqual(evenNumber);
});
 
test('negative case - even', { tag: '@unit' }, async () => {
  const result = checkEvenOrOdd(1);
  expect(result).toEqual(oddNumber);
});

test('positive case 2 - even',{ tag: '@unit' }, async () => {
 const result = checkEvenOrOdd(4);
 expect(result).toEqual(evenNumber);
});

test(' negative case 2 - zero', { tag: '@unit'}, async () => {
    const result = checkEvenOrOdd(0);
    expect(result).toEqual(zeroNumber);
});