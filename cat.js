function Cat() {
    this.sotmach = [];
}
Cat.prototype.eat = function(mouse) {
    this.sotmach.push(mouse);
};
module.exports = Cat;