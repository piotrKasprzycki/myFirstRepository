const button = document.querySelector('button');
const section = document.querySelector('section');
const codesNumber = 100;
const codeLength = 20;
let characters = 'ABCDEFGHIJKLMNOPRSTUW0123456789';

const getCodes = () => {
    section.textContent = "";
    for (let i = 0; i < codesNumber; i++) {
        const newDiv = document.createElement('div');
        section.appendChild(newDiv);
        for (let j = 0; j < codeLength; j++) {
            const randomNumber = Math.floor(Math.random() * characters.length);  
            newDiv.textContent += characters[randomNumber];
        } 
    }
}

button.addEventListener('click', getCodes);
