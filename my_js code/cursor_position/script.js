const text = document.querySelector('h1');

const windowWidth = document.clientX;
const windowHeight = document.clientY;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
text.textContent = `X: ${x}, Y: ${y} `;

const r = ((y/innerHeight) * 100); 
const g = ((x/innerWidth) * 100); 
const b = (((y/innerHeight + x/innerWidth) * 100)/2); 
document.body.style.backgroundColor = `rgb(${r}%, ${g}%, ${b}%)`;
})