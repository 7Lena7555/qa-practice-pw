// 1. Парне чи непарне число
// Напишіть програму, яка визначає, чи число парне або непарне.
// Вхід: Число (наприклад, 4)
// Вихід:
// - "Число парне."
// - "Число непарне."

const number = 4;
if (number % 2 === 0) {
    console.log('Even number');
} else {
    console.log('Odd number');
};   

// 2. Привітання за часом
// Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
// Вхід: Година (наприклад, 15)
// Вихід:
// - Якщо год < 12: "Доброго ранку!"
// - Якщо год 12–18: "Доброго дня!"
// - Якщо год > 18: "Доброго вечора!"

const time = 15;
if (time < 12) {
    console.log('Good morning!')
} else if (time >+ 12 && time <= 18){
    console.log('Good afternoon!')
} else {
    console.log('Good night!')
};
    

// 3. Перевірка оцінки
// Якщо бал >= 50 — "Тест складено".
// Якщо < 50 — "Тест не складено".
// Вхід: Бал (наприклад, 42)

const mark = 42;
if (mark >= 50) {
    console.log ('Test passed')
} else {
    console.log('Test failed')
}


// 4. Вік для голосування
// Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
// Вхід: Вік (наприклад, 17)
// Вихід:
// - Якщо >= 18: "Ви можете голосувати."
// - Інакше: "Ви ще не можете голосувати."
   
const age = 17;
if (age >= 18) {
    console.log('You can vote')
} else {
    console.log('You can not voit');
} 

// 5. Порівняння чисел
// Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
// Вхід: Два числа (наприклад, 8 і 10)
// Вихід:
// - "Перше число більше."
// - "Друге число більше."
// - "Числа рівні."

const firstNumber = 8;
const secondNumber = 10;
if(firstNumber > secondNumber) {
    console.log ('First number is bigger')
} else if(firstNumber < secondNumber) {
    console.log('Second number is bigger')
} else {
console.log('The numbers are equal')
}
// 6. Дорога і світлофор
// Якщо зелений — переходьте.
// Якщо жовтий — підготуйтеся.
// Якщо червоний — зачекайте.
// Вхід: Колір світлофора (наприклад, "жовтий")

 const color = 'yellow';
 if (color === 'green') {
    console.log ('You can go - Cross the road')
 } else if (color === 'yellow') {
    console.log('Get ready to go')
 } else if (color === 'red') {
    console.log('Wait! You can not go')
 } else {
    console.log('Traffic light is broken')
 }
 
 function checkTrafficLight(lightColor){
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
 const lightColor = 'yellow'
 console.log(checkTrafficLight(lightColor)); 


// 7. Визначення типу числа
// Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
// Вхід: Число (наприклад, -5)
// Вихід:
// - "Число додатнє."
// - "Число від’ємне." 
// - "Число дорівнює нулю."

const randomNumber = -5;
if(randomNumber > 0){
    console.log('Positive number')
} else if (randomNumber < 0) {
console.log('Negative number')
} else if(randomNumber === 0) {
    console.log('Number equal to zero')
}

function checkRandomNumber(randomNumber1){
    if(randomNumber1 > 1){
        return 'Positive number'
    } else if(randomNumber1 < 0) {
        return 'Negative number'
    } else if (randomNumber1 === 0) {
        return 'Number equal to zero'
    }
}
const randomNumber1 = -5;
console.log(checkRandomNumber(randomNumber1));




