var mouse = require('./Mouse');

function Cat() {
    this.sotmach = [];
}
Cat.prototype.eat = function(animal) {
    if (animal instanceof mouse) {
        this.sotmach.push(animal);
    } else {
        throw new Error('Cat only eat mouse');
    }

};
module.exports = Cat;