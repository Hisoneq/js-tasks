//Создайте функцию printInfo, которая будет выводить информацию о человеке 
//в формате "Name: <имя>, Age: <возраст>". Создайте объект person с двумя 
//свойствами: name и age. Используйте метод call, чтобы вызвать функцию printInfo от имени объекта person.
/*
const printInfo = function(){
  console.log(`Name: ${this.name}, Age: ${this.age}`)
};

const person = {
  name: 'Roma',
  age: '18'
};

printInfo.call(person);
*/

//Создайте функцию calculate, которая будет принимать три параметра: a, b и operator. 
//Функция должна производить математическую операцию между a и b в зависимости от 
//значения operator (может быть "+", "-", "*" или "/") и возвращать результат операции.
//Используйте метод apply, чтобы вызвать функцию calculate с передачей объекта со значениями 
//a, b и operator в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] 
//в качестве второго аргумента.

/*
const calculate = function(a, b, operator){
  switch(operator){
    case('+'):
      return a + b;
      break;
    case('-'):
      return a - b;
      break;
    case('*'):
      return a * b;
      break;
    case('/'):
      return a / b;
      break;
    default:
      console.log('Неправильный оператор.')
  }
}

console.log(calculate.apply(null, [7, 10, "*"]));
*/


//Есть массив объектов, представляющих собой пользователей, 
//каждый из которых имеет свойство age (возраст). Создайте 
//новый массив, содержащий только тех пользователей, чей возраст 
//больше или равен 18. Затем создайте новый массив, содержащий 
//только свойства name (имя) каждого пользователя.

/*
const users = [
  {name: 'Roma', age: 17},
  {name: 'Polina', age: 19},
  {name: 'Makar', age: 20}
];

const newUsers = users.filter(user => user.age >= 18);

const newUsersName = newUsers.map(user => user.name);

console.log(newUsersName);
*/

//Создайте функцию setFullName, которая будет устанавливать свойство fullName 
//у переданного ей объекта. Используйте метод bind, чтобы создать новую функцию 
//setPersonFullName, которая будет устанавливать fullName для объекта person из 
//предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и убедитесь, 
//что свойство fullName объекта person было изменено соответствующим образом.

/*
const setFullName = function(fullName) {
  this.fullName = fullName;
};

const person = {
  name: 'Roma',
  age: 18
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName); 
*/

//Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
//содержащий только уникальные числа, отсортированные в порядке возрастания.

/*
const nums = [3,1,3,4,8,6,5,3,10,2,19];

const orignialNums = (nums) => {
  return Array.from(new Set(nums)).sort((a, b) => a-b);
}

console.log(orignialNums(nums));
*/

