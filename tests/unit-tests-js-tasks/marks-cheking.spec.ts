import { test, expect } from '@playwright/test';


function marksChecking (mark: number ) {
if (mark >= 50) {
    return 'Test passed';
} else {
    return 'Test failed';
};
};

test('high mark', {tag: ['@unit', '@mark']}, async() => {
  expect(marksChecking(55)).toEqual('Test passed');   
});

test('low mark', {tag: ['@unit', '@mark']}, async () => {
  expect(marksChecking(40)).toEqual('Test failed');
});
