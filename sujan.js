// function add(){
//     // console.log("you click it")
//     // alert("you are click it")
//     const titel = document.getElementById('header')
//     titel.innerText = 'sujan is in'
//     console.log(titel)
// }

// // function changeText{
// //     document.getElementById("header")
// // }

// function add(){
//     const tag = document.querySelector('#header');
//     console.log(tag)
// }
console.log("hi")
// const button =document.getElementById("myBotton");
// button.addEventListener("click",function()  {alert("First!");});
// button.addEventListener("click",function() {alert("Second!");});
// button.addEventListener("click",function() {alert("Thrid!");});


// button.addEventListener("click", function () {
//     alert("First!");
// });

// button.addEventListener("click", function () {
//     alert("Second!");
// });

// button.addEventListener("click", function () {
//     alert("Third!");
// });


// // to creta the new tag in the html by the js
// const p = document.createElement("p");
// p.innerText = "Hello";
// document.body.appendChild(p)

//THE SHOW EFFECT
const button = document.getElementById("myButton");

function easter(){
     for (let i = 1; i <= 2000; i++){
const div = document.createElement("div")
div.style.backgroundColor="black";
div.style.height = "1px";
div.style.width="1px";
div.style.borderRadius="100%";
div.style.position="absolute";
div.style.top = Math.random()*100 +"vw";
div.style.left = Math.random()*100 +"vw";
document.body.appendChild(div)
     }



}
button.addEventListener("click",easter)


const arr = ["sujan", "lavya", "sahitya"];

for (let i = 0; i < arr.length; i++) {
    console.log(i);
    let element1 = document.createElement("div");
    element1.className = "box1";
    element1.innerText = arr[i];
    document.body.appendChild(element1);
}