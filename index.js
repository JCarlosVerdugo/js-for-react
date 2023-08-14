// FUNCTIONS //
// function hello(name) {
//     return 'Hola ' + name;
// }
// console.log(hello('Carlos'))
// function add(x, y = 0) {
//     return x + y;
// }
// console.log(add(10))


// OBJECTS //
// const user = {
//     name: 'juan',
//     lastname: 'perez',
//     age: 30,
//     address: {
//         country: 'mexico',
//         city: 'monterrey',
//         street: 'main street 123'
//     },
//     friends: ['francisco', 'jesus'],
//     active: true,
//     sendMail: function() {
//         return 'sending email...'
//     }
// }
// console.log(user.address.city);
// console.log(user.friends);
// console.log(user.active);
// console.log(user.sendMail());


//Short first hand object //
// const name = 'laptop';
// const price = 3000;
// const newProduct = {
//     name,
//     price
// }
// console.log(newProduct)


// DOM //
// const title = document.createElement('h1');
// title.innerText = 'Hola mundo desde js';
// const button = document.createElement('button');
// button.innerText = 'click';
// button.addEventListener('click', function() {
//     title.innerText = 'Actualizado con js';
//     alert('Se realizó un click')
// });
// document.body.append(title)
// document.body.append(button)


// Destructuring //
// const user = {
//     name: 'joe',
//     age: 30
// }
// function printInfo(user) {
//     const {name, age} = user;
//     return '<h1>Hola ' + name +'</h1>'
// }
// console.log(printInfo(user));
// document.body.innerHTML = printInfo(user)

// Anonym function //
// console.log(function () {
//     return 'Starting...';
// });
const button = document.createElement('button');
button.innerText = 'click me';
function handleClick() {
    alert('clicked');
}
button.addEventListener('click', handleClick);
document.body.append(button)