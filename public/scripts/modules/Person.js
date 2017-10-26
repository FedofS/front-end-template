class Person {
	constructor (name) {
		this.name = name;
	}
	hello() {
		if (typeof this.name === 'string') {
			return 'Front-end template: ' + this.name + '.';
		} else {
			return 'Front-end template.';
		}
	}
}

export default Person;