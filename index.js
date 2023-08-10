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
const user = {
    name: 'juan',
    lastname: 'perez',
    age: 30,
    address: {
        country: 'mexico',
        city: 'monterrey',
        street: 'main street 123'
    },
    friends: ['francisco', 'jesus'],
    active: true,
    sendMail: function() {
        return 'sending email...'
    }
}

console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail());