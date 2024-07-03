// ASSIGMENT 45
// QUESTION 20
// 21. They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.


interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean
}
let person :person = {
    age : 20,
    name : 'ALIZA',
    nationality : 'Pakistani',
    student : true
}
console.log(person)


interface car {
    name : string,
    color : string,
    number : number,
}
let car = {
    name : 'carola',
    color : 'white',
    number : 4565,
}
console.log(car)