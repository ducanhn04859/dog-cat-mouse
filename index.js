var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog')

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('John');
try {
    cat.eat(dog);

} catch (error) {
    console.log('Cat only eat mouse');
}