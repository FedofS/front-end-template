var $ = require('jquery');

//var Person = require('./modules/Person');
import Person from './modules/Person';

console.log(Person);

var persons = new Person('v0.0.1');

document.write(persons.hello());


// $("p").remove();