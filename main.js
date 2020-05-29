/*
const name = 'john';
const age = 30;

//Concatenation
console.log('My name is '+ name +' and I am '+ age +" years old.");


//Template string
console.log(`My name is ${name} and I am ${age} years old.`);
*/
// const s = 'Hello World, dfa, gasd, adsgasd';

// console.log(s.length);
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(', '));
// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);\    
// fruits[3] = 'grapes';
// fruits.push('mangos');
// console.log(fruits);
// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true  
//     },
//     {
//         id: 2,
//         text: 'meeting out trash',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Destist appt',
//         isCompleted: false
//     }
// ];
// console.log(todos);
// const jsonTodos = JSON.stringify(todos);
// console.log(jsonTodos);
// const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// // console.log(person);
// // console.log(person.hobbies);
// // const {firstName, lastName, address} = person;
// // console.log(firstName);
// // console.log(address);
// const {firstName} = person;
// console.log(firstName);

// for(let i = 0; i < 5; i++){
//     console.log(`FOR LOOP ${i}`);
// }
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo.text);
// }
// todos.forEach(function(todo){
//     console.log(todo.id);
// });
// todos.forEach(function(i){
//     console.log(i.text);
// });
//************************************Map***************** */
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// const mamun = new Map();
// mamun.set('relation', 'false');
// mamun.get('relation');
// const zawad = new Map();
// zawad.set('fullName', 'Zawad Ahmed');
// console.log(zawad.get('fullName'));
// zawad.has('fullName');
// const mamun = new Map();
// mamun.set('relation',false);
// const single = !mamun.get('relation');
// console.log(single);
// console.log(mamun.has('relation'));
// mamun.delete('relation');
// console.log(mamun.has('relation'));
// mamun.set('relation',false);
// mamun.set('goodLooking', 'ofcourse');
// console.log(mamun);
// mamun.delete('relation');
// console.log(mamun);
// mamun.clear();
// console.log(mamun);

//****************************Filter*******************/

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });

// console.log(todoCompleted);
//****************If else ***************** */
// const x = 4;
// const y = 10;

// // if(x === 10){
// //     console.log("x is 10");
// // }
// if (x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 20');
// }

//***********turnary operator ******************/

// const x = 11;

// // const color = x > 10 ? 'red' : 'blue';
// const color = 'green';

// switch(color){
//     case 'red': console.log('color is red');
//         break;
//     case 'blue': console.log('color is blue');
//         break;
//     default:
//         console.log('color is neither red nor blue');
//         break;
// }

//*****************************arrow function *******************/

// const num = [11,12,13,14,15];
// // const result = num.map(function(x){
// //     return x*5;
// // });
// // console.log(result);

// const currentAge = num.map((x, onedob)=>`${x} : ${onedob}`);

// console.log(currentAge);

//**************************constructor function *************/

// function Person(firstName, lastName, DOB){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.DOB = new Date(DOB);

// }
// Person.prototype.getFullName = function(){
//     return this.firstName+' '+this.lastName;
// }
// const mamun = new Person('Mamun', 'Apu', '10-2-1996');
// console.log(mamun.getFullName());

//************************************Class************/
// class Person{
//     constructor(firstName, lastName, DOB){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.DOB = new Date(DOB);
//     }
//     getFullName(){
//         return this.firstName+' '+this.lastName;
//     }
// }
// const mamun = new Person('Mamun', 'Apu', '10-2-1996');
// console.log(mamun.getFullName());