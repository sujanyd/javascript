const input = document.getElementById("password");
const pass = document.getElementById('pa'); 


function change() {
    let value = input.value.length;

    if (value < 5) {
        pass.innerText = "Easy";
        pass.style.color = "black";
    } else if (value < 8) {
        pass.innerText = "Medium";
        pass.style.color = "#fff";
    } else {
        pass.innerText = "Hard";
        pass.style.color = "red";
    }
}


input.addEventListener("input", change);