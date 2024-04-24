// https://www.youtube.com/watch?v=BCg4U1FzODs

let id: number = 5

let na: string = "YO"

let isPublished: boolean = true


let x: any = 'Hello'

// type of 'any' can be changed later


let ids: number[] = [1,2,3,4,5]

//so you cant push string to ids


let arr: any[] = [1,2,3,4, true]


//TUPLE
let person:[number, string, boolean] = [1, 'Kurs', true]
// the array expects the types in that particular order

//TUPLE ARRAY
 let employee: [number, string][]

 employee = [
  [1, 'Brad'],
  [2, 'Josh']
 ]



 //UNION

 let pid: string | number
 //this can hold string or number


//ENUM  (must be in pascal case)
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Up)

//by default up down ... values will be 0, 1, 2, 3 ...
//you can change it: 

// enum Direction1 {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }

//ENUM
enum Direction2 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

//Object

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Kuersch'
}

//Type assertion

let cid: any = 1

let customerId = <number>cid

// customerId = true ... ex wouldnt work

//Functions

cid = 'change'

function addNum (x: number, y: number): number {
  return x + y
}

//the 'number' after the paranthesis is for the return type
// so x + y is also a number


//if it doesnt return anything you can use void
function log(message: string | number): void {
  console.log(message)
}

let age: number = 20


if (age < 50) {
  age += 10
}
console.log(age)
 


//in ts large underscore can be used with large numbers:

let year: number = 120_300_090


// if we initialise the variables, we dont have to add : number or : string to it, because it is automatically assigned

// if we declare a variable and dont assign a type or a value to it, it is considered 'any'



 
function calculateIncome (income: number, taxYear?: number) {
  if ((taxYear || 2022) < 2022) {
    return income * 0.14
  } else {
    return income * 0.17
  }
}

// the question mark in the type definition makes the argument optional


let employee2 : {
  readonly id: number,
  name?: string
} = { id: 1}

// the question mark in the type definition makes the property optional, so that it doesnt give an error ad we can give the name property later 
// with readonly typescript makes it impossible to accidentally change the id later...




// THIS WAY YOU CAN DEFINE THE TYPES OF THE PROPERTIES IN A 'TYPE' AND CLEAN UP THE CODE A BIT.

type Employee = {
  readonly id: number,
  name: string
}

let employee3: Employee = { id: 1, name: 'josh'}




// INTERSECTION TYPES

let weight: number & string;

//this represents that is both number and string at the sametime (?)



type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}




// LIMITING THE VARIABLES

let quantity: 50;
//quantity can only be set to 50

let quantity2: 50 | 100;
//can be set to 50 or 100


type Quantity = 50 | 100
let quantity3: Quantity = 100


type Metric = 'cm' | 'inch'




// Wen we call the function that is set to accept a string as argument, we cannot pass null or undefined.
// this is "strictNullChecks": true in .json file. Can be set to false but it is not recommended
// instead include the null and  undefined into the type definition
// THESE ARE CALLED NULLABLE TYPES

function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase())
  else
    console.log('Hola!')
}

greet(null)
greet(undefined)




//OPTIONAL CHAINING

type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(0)

// customer?.birthday       is called =>          Optional property access operator

console.log(customer?.birthday)

//this way we can check if the customer is NOT undefined or null before chaining .birthday to it. Otherwise if the customer comes as undefined, undefined.birthday will break the code and ts doesnt allow this

// all of this can also be written like

// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday)
// }

// but this is kinda long and ugly






// We can also take it one step further:

console.log(customer?.birthday?.getFullYear())

// this gets full year and shows it only if 1) customer is not null or undefined and 2) customer has a birthday




// OPTIONAL ELEMENT ACCESS OPERATOR

// customers?.[0]
