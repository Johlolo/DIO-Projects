function calculateAge(years) {
    return `${years} from now, ${this.name} will be ${
        this.age + years
    } years old.`;
}

const person1 = {
    name: "John",
    age: 30
}

const person2 = {
    name: "Peter",
    age: 26
}

const animal = {
    name: "Jake",
    age: 6,
    breed: "Pug"
}

console.log(calculateAge.apply(animal, [5]));