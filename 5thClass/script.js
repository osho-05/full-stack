/*
class Employee
{
    constructor(id,name,dept)
    {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }

    markAttendence(day)
    {
        console.log(`${this.id}Marked present for ${day}`);
    }
}

const emp1 = new Employee(101,"osho","Engg");
const emp2 = new Employee(102,"Sam","Dance");
console.log(emp2.markAttendence("Monday")); */

/* ---------------------------------------------------------------*/

/*
const obj =
{
    name:"abc",
    objMethod(){
        console.log(this);
        console.log(this.name);
    }
}

const obj2 = {name:"xyz"}

//obj.objMethod();

obj.objMethod.call(obj2); // call means binding + invoking the function

const method1 = obj.objMethod.bind(obj2);  // these 2 line can be cludbed together into above one line - call
method1();

*/
//-------------------------------------------------------------------------------

/*
class Employee
{
    constructor(id,name,dept)
    {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }

    /*markAttendence(day)
    {
        // has its own binding
        console.log(this);
        console.log(`${this.id} Marked present for ${day}`);
    } 

    // *

    markAttendence  = (day) =>
    {
        // takes the context "this" obj from the parent itself
        //call isme nai kam krega
        console.log(this);
        console.log(`${this.id} Marked present for ${day}`);
    }
}

const emp1 = new Employee(101,"osho","Engg");
const emp2 = new Employee(102,"Sam","Dance");

console.log(emp1.markAttendence());
console.log(emp1.markAttendence.call(emp2));
*/

//--------------------------------------------------------------------------------------

//Callbacks -> function passed as argument

/*
const fun1 = (cb)=>{
    console.log("function 1");
    cb();
}

const fun2 = () =>{
    console.log("finction 2");
}

fun1(fun2);

*/

//-----------------------------------------------------------------------------------------

/*
const arr = [1,2,3,4,5];
arr[0] = 100;

for(let i =0 ; i < arr.length ; i++)
{
    console.log(arr[i]);
}

//for each menthod

const fn = (value,index,arr) =>{
    //console.log(value,index,arr);
    console.log(value,index);
}
//arr.forEach(fn);

// for each can be written as- (no need to wtite function)

arr.forEach((value,index) => console.log(value,index));

*/

//-------------------------------------------------------------------------------

//Map method - exactly like forEach and it returns a new array

/*
const arr = [1,2,3,4,5];

const temp = arr.map(e => e+10);
console.log(temp);

*/

//----------------------------------------------------------------------------------------

//filter
/*
const arr = [1,2,3,4,5];

//const temp = arr.filter(e => (e%2 === 0));
const temp = arr.filter(e => !(e%2));
console.log(temp);

//even square

const etemp = arr.filter(e => e%2 === 0).map(e => e*e);
console.log(etemp);
*/

//----------------------------------------------------------------------------------------

//reduce = when we want to reduce my entire arr in one single value. eg - sum,product of arr

/*
const arr = [1,2,3,4,5];
const sum = arr.reduce((prev,curr)=>{
    console.log(prev,curr,prev+curr);
    return prev+curr;
},0)

console.log(sum);

const product = arr.reduce((prev,curr)=>(prev*curr),1);
console.log(product);

// we we dont pass a default value then defalut value will be takemn as arr first element.

const temp1 = arr.filter(e => e%2 === 1).map(e => e*e).reduce((prev,curr)=>(prev+curr));

console.log(temp1);

*/

//-------------------------------------------------------------------------------------------

//ES6 Destructuring

/*
const arr = [1,2,3,4,5];

const[el1,el2,...rest] = arr;
//console.log(el1,el2,rest);

const[,,ele1,ele2] = arr;
//console.log(ele1,el2);

const sumNumber = (...rest)=>{
    console.log(rest);
}
sumNumber(1,2,3,4);

// copy of an array

const arr2 = arr.map(e => e); //method - 1
const arr3 = [...arr]; //method -2
console.log(arr2);
console.log(arr3);

const array1 = [1,2,3[4,5],6,7];
const array2 = [...array1];
console.log(array2);

*/

//--------------------------------------------------------------------------------------------------

//object destructuring

/*
const emp = {
    empId : 101,
    dept : "engg"
}

//const emp2 = emp1;  // not recommended as it will point to the same object

// to make copy 

const emp2 = {...emp}
emp2.empId = 102;
console.log(emp,emp2);

// above thing can be done in diffrent way in onr line

const emp3 = {...emp,empId:103};
console.log(emp3);

const emp4 = {...emp,empdId:104,sal:2000};
console.log(emp4);

*/

const emp = {
    empId : 101,
    dept : "engg",
    salary:{
        amount:10000,
        currency:'INR',
        bankDetails:{
            bankAccountNumber:12345678
        }

    }
}

 /*
 const emp2 = {...emp}
emp.salary.amount= 20000
// here salary of emmp2 will also be changed only one level copy is done
console.log(emp,emp2);
*/

const emp3 = {...emp,empId:103,salary:{...emp.salary}};
emp.salary.amount = 20000

//console.log(emp,emp3);


 //facing problems

const emp4 = {...emp,empId:104,salary:{...emp.salary},bankDetails:{...emp.salary.bankDetails}};
emp.salary.bankDetails.bankAccountNumber = 98528552;
console.log(emp4);









