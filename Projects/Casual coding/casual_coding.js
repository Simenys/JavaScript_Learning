let value = document.getElementById("numberInput");

if (document.getElementById("numberInput")) {
    document.getElementById("numberInput").addEventListener("input", function() {
        if (value > 5) {
            document.querySelector(".temp").style.backgroundColor = "red";
        } else {
            document.querySelector(".temp").style.backgroundColor = "blue";
        }
    });
}

let num1 = Math.floor(Math.random() * 10);
console.log(num1);