import { test, expect} from '@playwright/test';

function checkRandomNumber(randomNumber: number){
    if(randomNumber > 0){
        return 'Positive number'
    } else if(randomNumber < 0) {
        return 'Negative number'
    } else if (randomNumber === 0) {
        return 'Number equal to zero'
    }
}

test('number is positive', { tag: '@unit'}, async() => {
expect(checkRandomNumber(1)).toEqual('Positive number')
});

test('number is negative', { tag: '@unit'}, async() => {
expect(checkRandomNumber(-1)).toEqual('Negative number')
});

test('number is zero', { tag: '@unit'}, async() => {
expect(checkRandomNumber(0)).toEqual('Number equal to zero')
});