// Напиши функцію, яка перевіряє, чи є input масивом.  
// Тестові дані:  
// console.log(isArray('QA DOJO')); // false  
// console.log(isArray([1, 2, 4, 0])); // true    



function isArray(isInputArray) {
    if (typeof isInputArray === "string" && isInputArray === "QA DOJO") {
        return false;
    } else if (Array.isArray(isInputArray)) 
        return true;

    return false;
}
console.log(isArray("QA DOJO")); // false
console.log(isArray([1, 2, 3])); // true
console.log(isArray(42));

// Напиши функцію для створення копії масиву.  
// Тестові дані:  
// console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
// console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]

   function cloneArray(arr) {
  return [...arr];
}
console.log(cloneArray([1, 3, 2, 4]))

   function cloneArray1(arr) {
  return arr.slice(); 
}
   console.log(cloneArray([1, 3, 2, 4]))

//    Напиши функцію для отримання перших n елементів масиву.  
// Тестові дані:  
// console.log(first([7, 9, 0, -2])); // 7  
// console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    
const first = [7, 9, 0, -2]
function firstEl(first){
    return first[0]
}
console.log(firstEl([7, 9, 0, -2]))