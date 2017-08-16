var person = {
    first_name: '',
    last_name: '',
    get_greeting: function(){
        return 'Hello, I\'m ' + this.first_name + ' ' + this.last_name;
    }
}

var john = Object.create(person);
john.first_name = 'John';
john.last_name = 'Doe';

var mary = Object.create(person);
mary.first_name = 'Mary';
mary.last_name = 'Watson';

console.log(john.get_greeting());
console.log(mary.get_greeting());