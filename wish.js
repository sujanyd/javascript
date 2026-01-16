function changeText(){

    mydiv.innerText = 'adarsh';
    mydiv.style.color = 'red';
    mydiv.style.fontWeight='bold';
    mydiv.style.transform='scale(1.5)';
    mydiv.style.transition='all 1s ease-in-out';
    mydiv.style.textDecoration='line-through';
    mydiv.style.background = 'aqua';

}
let mydiv = document.getElementById('myid');

console.log(mydiv.innerText)