function hello(name) {
    return 'Hola ' + name;
}

console.log(hello('Carlos'))

function add(x, y = 0) {
    return x + y;
}

console.log(add(10))
