import {test, expect} from '@playwright/test';

function ageForVote (age: number) {
 if( age >= 18 ){
    return 'You can vote'
 } else {
    return 'You can not vote'
 }
}
 test('can access to vote',  { tag: '@unit' }, async () => {
 expect (ageForVote(18)).toEqual('You can vote'); 
});

 test('can access to vote also',  { tag: '@unit' }, async () => {
 expect (ageForVote(25)).toEqual('You can vote'); 
});

 test('can not access to vote',  { tag: '@unit' }, async () => {
 expect (ageForVote(16)).toEqual('You can not vote'); 
});