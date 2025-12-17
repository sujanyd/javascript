// function Sum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b,Sum){
//     Sum (a,b);
// }

// calculate(3,4 ,Sum);

// const Hello=()=>{
// console.log("Hello ")

// }

// setTimeout(Hello , 3000);





 
//NESTING if - else

// n = Number(prompt("enter the age:"))

// if(n>=18){
//     if (n>=60){
//         console.log("senior")
//     }
//     else{
//         console.log("middle")
//     }
// }
// else{
//     console.log("child ")
// }





// function getData(dataid){
//     setTimeout (()=>{
//         console.log("data",dataid)
// },2000);
// }



// it is the nesting function and the another function called by the change of the first function


// function getData( dataid){
//     setTimeout (()=>{
//         console.log("data",dataid)
        
  
// },2000);
// }


// // getData(1,()=>{
// //     getData(2)
    

// // }
// // )
// getData(1)
// getData(2)
// function a(b){
//     console.log(b)
// }

// function fn(){
//     console.log("hi")
// }

// a(fn);


// function boiledwater(cb){
//     setTimeout(()=>{
//         console.log("Water is heating")
//     cb()

//     },2000)
    
// }
// function addsalt(addmaggi){
//     setTimeout(()=>{
//         console.log("Adding salt")
//     addmaggi()

//     },2000)
    
// }
// function addmaggi(sever){
//     setTimeout(()=>{
//         console.log("adding maggi")      //  IT GIVE THE STEP IN THE DELAY WITH THW TIME WE SET BUT IT WAS NOT STOP US TO WRITE THE CODE IN BETWEEN THAT AND RUN IT

//     },2000)
//     setTimeout(()=>{
//       console.log("serve")
    

//     },8000)
    
    
// }

// boiledwater(()=>{
//     addsalt(()=>{
//         addmaggi(()=>{
//             console.log("sever")
//         })

//     })
// })

// function boiledwater(cb){
//     let start  = Date.now();
//     let end = start + (6 *1000)
//     while(Date.now() < end){

//     }
//     console.log("water is boiling")
    
    
// }
// function addsalt(addmaggi){
//     let start  = Date.now();
//     let end = start + (6 *1000)
//     while(Date.now() < end){

//     }
//      console.log("adding salt")
    
    
    
// }
// function addmaggi(sever){
//     let start  = Date.now();
//     let end = start + (6 *1000)
//     while(Date.now() < end){

//     }
//         console.log("adding maggi")
    


//     }
//       console.log("serve")
    

    
    
    


// boiledwater(()=>{
//     addsalt(()=>{
//         addmaggi(()=>{
//             console.log("sever")
//         })

//     })
// })