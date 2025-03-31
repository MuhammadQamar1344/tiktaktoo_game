let box1 = document.getElementById("one");
let box2 = document.getElementById("two");
let box3 = document.getElementById("three");
let box4 = document.getElementById("four");
let box5 = document.getElementById("five");
let box6 = document.getElementById("six");
let box7 = document.getElementById("seven");
let box8 = document.getElementById("eight");
let box9 = document.getElementById("nine");
let turn = document.querySelectorAll(".box");
let move = "X";
let player1 = prompt("Enter player1 name");
let player2 = prompt("Enter player2 name");
let player = player1;
document.getElementById("ten").innerText = player1 + " Enter your move";
let iswin = false;
let count = 0; // Track the number of moves

turn.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && !iswin) {
            box.innerText = move;
            count++;
            if (checkWin()) {
                iswin = true;
                document.getElementById("ten").innerText = player + " Wins!";
                return; 
            }
            if (count === 9) {
                document.getElementById("ten").innerText = "It's a Draw!";
                return;
            }
            if (move === "X") {
                move = "O";
                player = player2;
            } else {
                move = "X";
                player = player1;
            }
            document.getElementById("ten").innerText = player + " Enter your move";

        }
    });
});

// Function to check for a win without using an array
function checkWin() {
    if (
        // Rows
        (box1.innerText !== "" && box1.innerText === box2.innerText && box2.innerText === box3.innerText) ||
        (box4.innerText !== "" && box4.innerText === box5.innerText && box5.innerText === box6.innerText) ||
        (box7.innerText !== "" && box7.innerText === box8.innerText && box8.innerText === box9.innerText) ||
        
        // Columns
        (box1.innerText !== "" && box1.innerText === box4.innerText && box4.innerText === box7.innerText) ||
        (box2.innerText !== "" && box2.innerText === box5.innerText && box5.innerText === box8.innerText) ||
        (box3.innerText !== "" && box3.innerText === box6.innerText && box6.innerText === box9.innerText) ||
        
        // Diagonals
        (box1.innerText !== "" && box1.innerText === box5.innerText && box5.innerText === box9.innerText) ||
        (box3.innerText !== "" && box3.innerText === box5.innerText && box5.innerText === box7.innerText)
    ) {
        return true;
    }
    return false;
}
