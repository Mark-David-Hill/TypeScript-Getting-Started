/// <reference path="person.ts" />


class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    constructor() {
        console.log('Creating a new Player. His name is')
    }

    formatName() {
        return this.name.toUpperCase();
    }
}