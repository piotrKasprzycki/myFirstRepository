const text = document.querySelector('.text');
const cursor = document.querySelector('.cursor');

const content = ['Ty masz chuja jak krewetkę', 'twoja cyce jak kalmary', 'Ja ją łapie za odwłok jak homary'];
let counterPhrase = 0;
let counterLetter = 0;
let intervalSwitch = true;

const add = () => {
    if (counterPhrase < 3 && counterLetter < content[counterPhrase].length) {
        const letter = content[counterPhrase][counterLetter];
        text.textContent += letter;
        counterLetter++;
        setTimeout(add, 300);
    } else {
        text.textContent = '';
        setTimeout(() => {
            counterPhrase++;
            counterLetter = 0;
            setTimeout(add, 1000);
        }, 300)

    }

    return

}

add();

const blinkCursor = function() {
    cursor.classList.toggle('blink');
    }
    
    var intervalCursor = setInterval(blinkCursor, 200);
    