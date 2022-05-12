let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
//play counts
let player1 = 0;
let player2 = 0;
let el;


for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        el = checkEl(player1, player2);
        if(this.childNodes.length === 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            if(player1 === player2) {
                player1++;
            }else {
                player2++;
            }
        }
    });
}


function checkEl(player1, player2) {
    if (player1 === player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}

