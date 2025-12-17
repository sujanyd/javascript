// const name = "sujan";
// let age = 99;
// var place ="hassan"
// console.log(name , age , place)

// age = `nine${name}`;  // it is a way that the variable is placed in the another variabl
// place="blr";  // the value will bw modified in here and overwrite the value of the first one

// console.log(name , age , place)
// console.log("%csujan","color:red;font-size:30px;")
// let a = true;

// age = `nine${a}`;

// console.log(typeof age) 
// console.log(age) 


// TO FINDING THE TRUE AND THE FALSE VALUE IN THE STRING

// let a = "hello";

// console.log(Boolean(a)) // EXAMPLE OF THE TRULY VALUE

// let b = 0;

// console.log(Boolean(b)) // EXAMPLE OF THE FALSELY VALUE 

// let name;

// if (name == null){
//     console.log("name is null")
// }
// if(name == undefined){
//     console.log("name is undefined")
// }

// console.log('2'*'1') // convert the string to a number make the multiplication

// // if any of the numbers is string the another number is also converted into the string and add it
// console.log('2'+1)

// let a = 501;
// let b = 136;

// let temp = 0;

// temp = a+b
// a = temp - a
// b = temp - b

// console.log("a",a+" and "+ 'b',b)

// console.log(7>6>5);
// console.log({} == {});

//FUNCTION INSIDE THE LOOPS TO FIND THE VOWELS IN IT 


// function countvowels(str){
//     let count= 0
//    for  (let i= 0 ; i <str.length; i++){
//     if( "aeiouAEIOU".includes(str[i])){
//         count+=1
        
//     }
//    }
//    return count 
// }

// FOR EACH

// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function printVal(val){
//     console.log(val);
// }); 

// arr.forEach((val) =>{
//     console.log(val);
// });

// let arr = ["pune" , "delhi" , "mumbai"]

// arr.forEach((val) =>{
//     console.log(val.toUpperCase()); 
// });

// THERE ARE THE THREE ARGUMENT IN THE FOREACH THAT WE ARE USED THAT ARE WE CAN PRINT THE "VALUES" , "INDEX (idx)" "ARRAY IT SELF(name of the arrary)"

// let arr = ["pune" , "delhi" , "mumbai"]

// arr.forEach((val , idx , arr) =>{
//     console.log(val , idx , arr) 
// });

// FOR  A GIVEN ARRAY OF NUMBER , PRINT THE SQUARE OF EACH VALUE USING THE FOREACH LOOP

// let arr = [1, 2 , 3, 4, 5]

// arr.forEach((val) =>{
// console.log(val*val)
// })

// MAP :: CREATE A NEW ARRAY WITH THA RESULT OF SOME OPRATION . THE VALUE ITS CALLBACK RETURN ARE USED TO FORM NEW ARRAY
// let arr = [1, 2, 3, 4, 5]

// arr.map((val) =>{
//     console.log(val);
// });

// TO CREATE A NEW ARRAY

// arr = [1 ,2 ,3 ,4 ,5]

// let newarr = arr.map((val)=>{
//     return(val);
// });

// console.log(newarr)

// FILTER :: CREATE A NEW ARRARY OF ELEMENT THAT GIVE TRUE FOR A CONDITION/ FILTER 

// let arr = [1, 2, 3, 4, 5]

// let evenarr = arr.filter((val) =>{
//     return val %2 ==0;
// });

// console.log(evenarr)


// class 8/12/2025

// let name = "sujan";
// let age;   // the age is undefine  when the age is not define so it will hive error
// place = "blr";
// console.log(name , age , place);

// console.log(age);

// if(age&&place){
//     console.log("true")
// }

// function hello(){
//     console.log("Hello World!");
// }

// hello();

// function sum(a , b){
//     let x = a+b
//     if(x%2==0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// }

// sum(3,4)
// function sum(){
//     console.log(add)
// }


// function add(a,b){
//     return a+b
// }

// ARRAY

// let = arr = [];
// arr.push(2)
// arr.push(6)
// arr.push(5)
// arr.push(4)
// arr.push(3)
// arr.shift()
// arr.unshift(10)
// arr.pop()

// THE OBJECT IN THE CLASS AND ACCESS THE KEY EXAMPLE

// let object={
//     color:"red",
//     make:"toyota",
//     year:2023,         // WE. CAN ALSO PROVIDE THE FUNCTION AS VALUE IN HERE 
//     start : function(){
//         console.log("The car has started")
//     },
//     end: function(){
//         console.log("The car is driving")
//     }
// }

// console.log(object)
// console.log(object.start)
// console.log(object.color)

// THE KEYS IN THE OBJECT ARE UNIQUE AND CAN NOT BE USED MORE THAN ONECS


// const arr = {
//     color:"red" ,
//     make:"toyota",
//     year:2023, 
// }
// arr.car="tata";  // IT WILL ADD THE KEY AND THE VALUE TO THE ORIGINAL ARRAY OR OBJECT

// console.log(arr)
// arr.color="blue";  // or arr["color"] = "red";
// console.log(arr)

// const arr = {
//     color:"red" ,
//     make:"toyota",
//     year:2023, 
//     repairing:function nam(who){
//         console.log("at "+who)
//     }
// }
// arr.repairing("sujan")
// // another way to do it 
// arr["repairing"]("sahitya")


function repair(who){
    console.log("at "+who)
}

const arr = {
    color:"red" ,
    make:"toyota",
    year:2023,
    repaire :repair("sujan")
}
console.log(arr)
delete arr.color;
console.log(arr)   // IT IS HELP TO DELETE THE KEY AND THE VALUE IN THE ARR