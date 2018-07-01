/*  es5
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log(`
            Hell0, my name is ${this.name} and my favorite color is ${this.favoriteColor}.
        `)
    }
}

*/

class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    greet() {
        console.log(`Hell0, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
    };
}

export default Person;

