function DoSomthing() {

}

// to export (use somewhere else) a normal function
export default function DoSomthing () {

}


const DoSomthing = () => {
    return <div></div>
}

// to export a const with arrow
export const DoSomthing = () => {

}

// normal const in react. we need to export many components in react.
const MyComponent = (props: properties or argument) => {
    return <div></div>
}

// you can call a fucntion in onClick:
<button onClick={DoSomthing}></button>

// or directly write a function there as below: (it will be used a lot in react)
<button 
    onClick={() => {
        console.log("hello world!");
        }}
></button>

// using short code which is very common in react:
let age = 10;
let name = "reza";

if (age > 10) {
    name = "reza"
} else {
    name = "hasti"
}

// instead of above code, we can code as below:
let age = 10;
let name = age > 10 && "reza";

// && means if here when we use just if without else. or below when we use if-else which ? means if and : means else. 
let name = age > 10 ? "reza" : "Hasti"

// example in jsx:
const component = () => {
    return age > 10 ? <div> Reza </div> : <div> Hasti </div>
}

// destructure of an Object
const person = {
    name: 'Reza',
    age: 20.
    isMarried: false,
};

const name = person.name
const age = person.age
const isMarried = person.isMarried

// instead of this we can do below:
const {name, age, isMarried} = person;

// if create new person with the same information but name is different: (extrimely usefule in react)
const person2 = {...person, name: "Jafar"}

// another example with array
const names = ['Reza', 'Hasti', 'Jafar'];
const names2 = [...names, 'Fati']

// map and filter functions. First maping 'Hellow to each name in names array:
const names = ['Reza', 'Hasti', 'Jafar'];
names.map((name) => {
    retrunt 'Hello'+ name
})

// example in react:
names.map((name) => {
    return <h1> "hello" + {name} </h1>
})

// naw filter for example jafar:
const names = ['Reza','jafar', 'Hasti', 'Jafar', 'jafar'];

const names.filter((name) => {
    return name !== 'jafar'
})

// Async + Await + Fetch