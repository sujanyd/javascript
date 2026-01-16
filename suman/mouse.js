let h1 = document.getElementById('heading')

function change(){
    alert("you hover the text")
    h1.style.color = "red";
}

h1.addEventListener("mouseenter",change)

function change2(){
    alert("you leave the text")
    h1.style.color = "black"
}

h1.addEventListener("mouseleave",change2)