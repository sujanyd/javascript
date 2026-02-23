let button = document.getElementById('btn');
let input = document.getElementById('text'); 
let ul = document.getElementById('ul');

function fun(event){
    event.preventDefault(); 
    let li = document.createElement('li');
    li.textContent = input.value; 
    ul.appendChild(li); 
    input.value = ''; 
}

button.addEventListener("click", fun);
