import { test, expect } from '@playwright/test';

const firstNumber = 8;
const secondNumber = 10;
function compareNumbers(firstNumber: number, secondNumber: number) {
if (firstNumber > secondNumber) {
    return 'First number is bigger'
} else if (firstNumber < secondNumber) {
    return 'Second number is bigger'
} else {
    return 'The numbers are equal'
}
} ;

test('first number is bigger', { tag: '@unit' }, async () => {
expect(compareNumbers(6, 2)).toEqual('First number is bigger')
});

test('second number is bigger', { tag: '@unit' }, async () => {
expect(compareNumbers(2, 6)).toEqual('Second number is bigger');
});

test('numbers are equal', { tag: '@unit' }, async () => {
expect(compareNumbers( 2, 2)).toEqual('The numbers are equal')
});
