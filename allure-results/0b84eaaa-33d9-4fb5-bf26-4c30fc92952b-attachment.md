# Test info

- Name: number is positive
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\unit-tests-js-tasks\positive-negative-numbers.spec.ts:13:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "Positive number"
Received: undefined
    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\unit-tests-js-tasks\positive-negative-numbers.spec.ts:14:30
```

# Test source

```ts
   1 | import { test, expect} from '@playwright/test';
   2 |
   3 | function checkRandomNumber(randomNumber: number){
   4 |     if(randomNumber > 1){
   5 |         return 'Positive number'
   6 |     } else if(randomNumber < 0) {
   7 |         return 'Negative number'
   8 |     } else if (randomNumber === 0) {
   9 |         return 'Number equal to zero'
  10 |     }
  11 | }
  12 |
  13 | test('number is positive', { tag: '@unit'}, async() => {
> 14 | expect(checkRandomNumber(1)).toEqual('Positive number')
     |                              ^ Error: expect(received).toEqual(expected) // deep equality
  15 | });
  16 |
  17 | test('number is negative', { tag: '@unit'}, async() => {
  18 | expect(checkRandomNumber(-1)).toEqual('Negative number')
  19 | });
  20 |
  21 | test('number is zero', { tag: '@unit'}, async() => {
  22 | expect(checkRandomNumber(0)).toEqual('Number equal to zero')
  23 | });
```