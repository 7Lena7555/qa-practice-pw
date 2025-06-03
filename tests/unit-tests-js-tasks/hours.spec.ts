import { test, expect } from '@playwright/test';


function checkHours(hours: number) {

if (hours < 12) {
    return 'Good morning!';
} else if (hours >+ 12 && hours <= 18){
    return 'Good afternoon!';
} else {
    return 'Good night!';
};
};

test('check morning hours', { tag: ['@unit', '@hours'] }, async() => {
 expect(checkHours(11)).toEqual('Good morning!')
});

test('check afternoon hours', { tag: ['@unit', '@hours'] }, async() => {
 expect(checkHours(18)).toEqual('Good afternoon!')
});

test('check evening hours', {tag: ['@unit', '@hours'] }, async() => {
 expect(checkHours(19)).toEqual('Good night!');
});




