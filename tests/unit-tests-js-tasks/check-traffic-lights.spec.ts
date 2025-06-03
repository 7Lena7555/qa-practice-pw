import {test, expect} from '@playwright/test';


 function checkTrafficLight(lightColor: 'green' | 'yellow' | 'red' | ''){
    if (lightColor === 'green') {
    return 'You can go - Cross the road'
 } else if (lightColor === 'yellow') {
    return 'Get ready to go'
 } else if (lightColor === 'red') {
    return 'Wait! You can not go'
 } else {
    return 'Traffic light is broken'
 }
 } 

 test ('can cross the road', { tag: '@unit'}, async () => {
 expect(checkTrafficLight('green')).toEqual('You can go - Cross the road')
 }); 

 test ('can be ready cross the road', { tag: '@unit'}, async () => {
 expect(checkTrafficLight('yellow')).toEqual('Get ready to go')
 }); 

 test ('can not cross the road', { tag: '@unit'}, async () => {
 expect(checkTrafficLight('red')).toEqual('Wait! You can not go')
 }); 

 test ('unusual situation', {tag: '@unit'}, async () => {
 expect(checkTrafficLight('')).toEqual('Traffic light is broken')
 });