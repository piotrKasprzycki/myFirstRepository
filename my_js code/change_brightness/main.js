const text = document.querySelectorAll('h1, h2');
let color = 255;
let bodyColor = 0;


document.body.addEventListener('keydown', (event) => {
    console.log(event);
     const key = event.keyCode;
     if (key == 38 && color > 0) {
         color -= 10;
         document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
     }

     else if (key == 40 && color < 255) {
        color += 10;
        document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
     }

     for (let index = 0; index < text.length; index++) {
        switch (key) {
            case 39:
                bodyColor < 255 ? bodyColor += 10 : bodyColor;
               text[index].style.color = `rgb(${bodyColor}, ${bodyColor}, ${bodyColor})`;
                break;
        
            case 37:
                bodyColor > 0 ? bodyColor -= 10 : bodyColor;
                text[index].style.color = `rgb(${bodyColor}, ${bodyColor}, ${bodyColor})`;
                 break;
        } 
         
     }

    
})