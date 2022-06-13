const btn = document.querySelector('.btn');
let squareNumber = 1;
const section = document.querySelector('.board');
let square = document.querySelectorAll('.square');

function drawSquare() {
    const newDiv = document.createElement('div');
    section.appendChild(newDiv);
    if (squareNumber % 2 == 0) {
        newDiv.classList.add('square', 'squareBlack');
    }
    else {
        newDiv.classList.add('square');
    }
    newDiv.classList.add('square');
    newDiv.textContent = squareNumber;
    squareNumber ++;
}

btn.addEventListener('click', drawSquare);

function autoDraw(squares) {
    for (let i = 0; i < squares; i++) {
        drawSquare ();

    }
}

