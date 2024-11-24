
/* task 6.6.1:
const word = prompt('Введите слово: ');

function checkPalindrome(word) {
    // Приводим слово к нижнему регистру и убираем пробелы
    const cleanedWord = word.toLowerCase().replace(/\s+/g, '');

    // Проверяем, является ли слово палиндромом
    if (cleanedWord === cleanedWord.split('').reverse().join('')) {
        console.log(`Слово "${word}" является палиндромом.`);
    } else {
        console.log(`Слово "${word}" не является палиндромом.`);
    }
}

checkPalindrome(word);
*/

/* 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const arrSet = new Set(arr);
const newArr = Array.from(arrSet);
console.log(newArr);
*/


/* 6.6.3
const number = prompt('Введите число: ');
const arr = [];

if(!isNaN(number)){
    for(let i = 0; i <= number; i++){
        arr[i] = i;
    }
    console.log(arr);
}else{
    console.log('Вы ввели не число.')
}
*/


/* 6.6.4
const size = prompt('Введите число: ');

const arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = [];  
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            arr[i][j] = 'x';  
        } else {
            arr[i][j] = 'o';  
        }
    }
}

for (let i = 0; i < size; i++) {
    let row = '';  
    for (let j = 0; j < size; j++) {
        row += arr[i][j] + ' ';  
    }
    console.log(row.trim()); 
} */

/*6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for(const key in obj){
    const value = obj[key];

    if(Array.isArray(value)){
       arrValues.push(...value);
    }else{
        arrValues.push(value);
    }
}

console.log(arrValues);
*/