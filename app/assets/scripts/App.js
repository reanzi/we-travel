// import $ from 'jquery';
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(` ${this.name} now owes $0 in taxes`);
    }
}

var big = new Adult('Big Dear', 'Pulple');
var baby = new Person('Baby Dear', 'pink');
baby.greet();
big.greet();
big.payTaxes();