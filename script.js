function makeWish() {
    let name = document.getElementById("nameInput").value;
    let wish = document.getElementById("wishInput").value;

    let outputBox = document.getElementById("output");

    // Show the message
    outputBox.innerHTML = `<strong>${name}</strong>, ${wish}! 🎉`;

    // Make it visible
    outputBox.style.display = "block";
}