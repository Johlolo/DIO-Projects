// types
// interfaces

// interface IAnimal {
//     name: string;
//     type: 'land' | 'aquatic' | 'fly';
//     domestic: boolean;
// }

// interface IFeline extends IAnimal {
//     nightVistion: boolean;
// }

// interface ICanine extends IAnimal {
//     size: 'small' | 'medium' | 'large';
// }

// type IDomestic = IFeline | ICanine;

// const animal: IDomestic = {
//     domestic: true,
//     name: 'dog',
//     size: 'medium',
//     type: 'land',
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// Input types

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });

////////////////////////////////////////////////////////////////////////////////////////////////

// Generic Types

// function addAppendixToList<T>(array: any[], value: T) {
//     return array.map(item => item + value);
// }

// addAppendixToList([1, 2, 3], 'a');

////////////////////////////////////////////////////////////////////////////////////////////////

// interface IUser {
//     id: string;
//     email: string;
//     position?: 'manager' | 'coordinator' | 'supervisor' | 'employee';  // When has '?' it turns optional
// }

// function redirect(user: IUser) {
//     if (user.position) {
//         // redirect(user.position);
//     }

//     // redirect to user's area
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// Readonly and private

// interface Dog {
//     name: string;
//     age: number;
//     favoritePlace?: string;
// }

// type DogReadOnly = {
//     readonly [K in keyof Dog]-?: Dog[K];
// }

// class MyDog implements DogReadOnly {
//     name;
//     age;
//     favoritePlace;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const dog = new MyDog('Jake', 6);

////////////////////////////////////////////////////////////////////////////////////////////////

// Using typings.d.ts  { 1 }

// import $ from "jquery";

// $.fn.extend({
//     newFunction() {
//         console.log('New function called');
//     }
// });

// $('body').newFunction();

////////////////////////////////////////////////////////////////////////////////////////////////

interface Person {
    name: string;
    age: number;
    nationality: string;
}

interface Brazilian extends Omit<Person, 'nationality'> {

}