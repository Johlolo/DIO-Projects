const students = [
    {
        name: 'John',
        grade: 4,
        class: '1B'
    },
    {
        name: 'Sophia',
        grade: 9,
        class: '1B'
    },
    {
        name: 'Paul',
        grade: 6,
        class: '2C'
    },
    {
        name: 'Miguel',
        grade: 3,
        class: '2C'
    },
];

function aprovedStudents(arr, average) {
    let aproved = [];

    for (let i = 0; i < arr.length; i++) {

        const {grade, name} = arr[i];

        if(grade >= average) {
            aproved.push(name)
        }
    }

    return aproved;
}

console.log(aprovedStudents(students, 5))